"use strict";

require("dotenv-safe").config();
const cors = require("cors");
const http = require("http");
const express = require("express");
const { urlencoded } = require("body-parser");
const twilio = require("twilio");
const ClientCapability = twilio.jwt.ClientCapability;
const VoiceResponse = twilio.twiml.VoiceResponse;

// below code is from og server.js file
const profilesRouter = require("./routes/profiles");
const app = express();

app.use(cors({}));

app.use(express.json());

// app.use(express.static(__dirname + "./../build"));

app.use(express.static("public"));

app.use("/profiles", profilesRouter);

app.use(express.static(__dirname + "/public"));
app.use(urlencoded({ extended: false }));

// Generate a Twilio Client capability token
app.get("/token", (request, response) => {
  const capability = new ClientCapability({
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
  });

  capability.addScope(
    new ClientCapability.OutgoingClientScope({
      applicationSid: process.env.TWILIO_TWIML_APP_SID,
    })
  );

  const token = capability.toJwt();

  // Include token in a JSON response
  response.send({
    token: token,
  });
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
