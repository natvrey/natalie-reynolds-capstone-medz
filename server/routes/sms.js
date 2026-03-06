const express = require("express");
const twilio = require("twilio");

const router = express.Router();

const isValidE164 = (phoneNumber) => /^\+[1-9]\d{1,14}$/.test(phoneNumber);

router.post("/", async (req, res) => {
  const { recipients, message, passcode } = req.body || {};
  const configuredPasscode = process.env.SMS_PASSCODE;

  if (configuredPasscode && passcode !== configuredPasscode) {
    return res.status(401).json({ error: "Invalid passcode." });
  }

  if (!Array.isArray(recipients) || recipients.length === 0) {
    return res.status(400).json({ error: "At least one recipient is required." });
  }

  const normalizedRecipients = recipients
    .map((value) => String(value || "").trim())
    .filter(Boolean);

  if (!normalizedRecipients.every(isValidE164)) {
    return res.status(400).json({
      error: "All recipients must be in E.164 format (example: +15551234567).",
    });
  }

  const smsBody = String(message || "").trim();
  if (!smsBody) {
    return res.status(400).json({ error: "Message is required." });
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    return res.status(500).json({
      error: "Server misconfiguration: missing Twilio credentials.",
    });
  }

  try {
    const client = twilio(accountSid, authToken);
    const results = await Promise.all(
      normalizedRecipients.map(async (to) => {
        const response = await client.messages.create({
          body: smsBody,
          from: fromNumber,
          to,
        });

        return {
          to,
          sid: response.sid,
          status: response.status,
        };
      })
    );

    return res.status(200).json({
      sentCount: results.length,
      results,
    });
  } catch (error) {
    console.error("SMS send failed:", error.message);
    return res.status(500).json({
      error: "Could not send SMS. Check Twilio configuration and verified numbers.",
    });
  }
});

module.exports = router;
