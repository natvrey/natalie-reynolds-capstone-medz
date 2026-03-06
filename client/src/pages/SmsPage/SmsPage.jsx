import React, { useMemo, useState } from "react";
import axios from "axios";
import "./SmsPage.scss";

const API_URL = process.env.REACT_APP_API_URL || "";
const E164_REGEX = /^\+[1-9]\d{1,14}$/;

function SmsPage() {
  const [newRecipient, setNewRecipient] = useState("");
  const [recipients, setRecipients] = useState([]);
  const [passcode, setPasscode] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const normalizedRecipient = useMemo(
    () => newRecipient.trim(),
    [newRecipient]
  );

  const addRecipient = (event) => {
    event.preventDefault();
    const value = normalizedRecipient;

    if (!value) {
      return;
    }

    if (!E164_REGEX.test(value)) {
      setResult("Recipient must be in E.164 format (example: +15551234567).");
      return;
    }

    if (recipients.includes(value)) {
      setResult("Recipient already added.");
      return;
    }

    setRecipients((prev) => [...prev, value]);
    setNewRecipient("");
    setResult("");
  };

  const sendMessages = async (event) => {
    event.preventDefault();

    if (!API_URL) {
      setResult("API URL is not configured. Set REACT_APP_API_URL.");
      return;
    }

    if (recipients.length === 0) {
      setResult("Add at least one recipient before sending.");
      return;
    }

    if (!message.trim()) {
      setResult("Message is required.");
      return;
    }

    try {
      setIsSending(true);
      setResult("");
      const response = await axios.post(`${API_URL}/sms`, {
        recipients,
        message: message.trim(),
        passcode: passcode.trim(),
      });

      const sentCount = response?.data?.sentCount ?? recipients.length;
      setResult(`Message sent to ${sentCount} recipient(s).`);
      setRecipients([]);
      setPasscode("");
      setMessage("");
    } catch (error) {
      const apiMessage =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        "Could not send SMS.";
      setResult(apiMessage);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <article className="sms-page">
      <h1 className="sms-page__heading">Send a Text to Emergency Contacts</h1>

      <section className="sms-page__card">
        <h2 className="sms-page__title">Add Recipients</h2>
        <p className="sms-page__text">
          Enter one or more phone numbers. All numbers must use E.164 format
          (example: +15551234567).
        </p>

        <form onSubmit={addRecipient} className="sms-page__form">
          <label htmlFor="sms-recipient" className="sms-page__label">
            New Recipient Phone Number
          </label>
          <input
            id="sms-recipient"
            type="tel"
            value={newRecipient}
            onChange={(event) => setNewRecipient(event.target.value)}
            className="sms-page__input"
            placeholder="+15551234567"
          />
          <button type="submit" className="sms-page__button">
            Add
          </button>
        </form>

        <p className="sms-page__list-title">Current list of recipients:</p>
        <ul className="sms-page__list">
          {recipients.map((recipient) => (
            <li key={recipient}>{recipient}</li>
          ))}
        </ul>
      </section>

      <section className="sms-page__card">
        <h2 className="sms-page__title">Send Your Message</h2>
        <form onSubmit={sendMessages} className="sms-page__form">
          <label htmlFor="sms-passcode" className="sms-page__label">
            Application Passcode
          </label>
          <input
            id="sms-passcode"
            type="password"
            value={passcode}
            onChange={(event) => setPasscode(event.target.value)}
            className="sms-page__input"
            placeholder="Enter passcode"
          />

          <label htmlFor="sms-message" className="sms-page__label">
            Write your message
          </label>
          <textarea
            id="sms-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="sms-page__textarea"
            rows="4"
            placeholder="Emergency message"
          />

          <button type="submit" className="sms-page__button" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </section>

      {result ? <p className="sms-page__result">{result}</p> : null}
    </article>
  );
}

export default SmsPage;
