const Device = require("@twilio/voice-sdk").Device;
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

client.calls
  .create({
    twiml:
      "<Response><Say>Hello, I have a medical emergency. Please call 911!</Say></Response>",
    to: process.env.MY_PHONE_NUMBER,
    // from: "+16043370026", --REAL TWILIO# to use during live demo
    from: "+15005550006",
  })
  .then((call) => console.log(call.sid))
  .catch((error) => console.log(error));
