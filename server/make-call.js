require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.calls
  .create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: process.env.MY_PHONE_NUMBER,
    // from: "+16043370026", --REAL TWILIO# to use during live demo
    // from: "+15005550006",
    from: "+16043370026",
  })
  .then((call) => console.log(call.sid))
  .catch((error) => console.log(error));
