"use strict";

require("dotenv-safe").config();
const cors = require("cors");
const http = require("http");
const express = require("express");
const { urlencoded } = require("body-parser");
const twilio = require("twilio");
const AccessToken = twilio.jwt.AccessToken;
const VoiceGrant = AccessToken.VoiceGrant;
const VoiceResponse = twilio.twiml.VoiceResponse;
const profilesRouter = require("./routes/profiles");
const app = express();

app.use(cors({}));
app.use(express.json());
app.use(express.static("public"));
app.use("/profiles", profilesRouter);
app.use(express.static(__dirname + "/public"));
app.use(urlencoded({ extended: false }));

// Generate an Access Token for @twilio/voice-sdk (required; legacy Client Capability is no longer supported)
app.get("/token", (request, response) => {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const apiKeySid = process.env.TWILIO_API_KEY_SID;
    const apiKeySecret = process.env.TWILIO_API_KEY_SECRET;
    const applicationSid = process.env.TWILIO_TWIML_APP_SID;

    if (!accountSid || !apiKeySid || !apiKeySecret || !applicationSid) {
      console.error(
        "Missing Twilio env: TWILIO_ACCOUNT_SID, TWILIO_API_KEY_SID, TWILIO_API_KEY_SECRET, and TWILIO_TWIML_APP_SID must be set. Create an API Key at https://console.twilio.com/us1/account/keys"
      );
      return response.status(500).json({
        error: "Server misconfiguration: Twilio credentials not set. Create an API Key in Twilio Console and set TWILIO_API_KEY_SID and TWILIO_API_KEY_SECRET in server/.env",
      });
    }

    const identity = "medz-user-" + Math.random().toString(36).slice(2, 10);
    const token = new AccessToken(accountSid, apiKeySid, apiKeySecret, {
      identity,
      ttl: 3600,
    });

    const voiceGrant = new VoiceGrant({
      outgoingApplicationSid: applicationSid,
      incomingAllow: false,
    });
    token.addGrant(voiceGrant);

    response.json({ token: token.toJwt() });
  } catch (err) {
    console.error("Token generation failed:", err.message);
    response.status(500).json({
      error: "Could not generate voice token. Check server logs and Twilio credentials.",
    });
  }
});

// Create TwiML for outbound calls
app.post("/voice", (request, response) => {
  let voiceResponse = new VoiceResponse();
  voiceResponse.dial(
    {
      callerId: process.env.TWILIO_NUMBER,
    },
    request.body.number
  );
  response.type("text/xml");
  response.send(voiceResponse.toString());
});

app.use((error, req, res, next) => {
  res.status(500);
  res.send("Server Error");
  console.error(error.stack);
  next(error);
});

let server = http.createServer(app);
let port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Twilio & Express Server listening on *:${port}`);
  console.log("Stop with Ctrl+C");
});

module.exports = app;
