import React, { useState } from "react";

const SendMessagePlaceholder = ({
  senderName,
  receiverName,
  onMessageSend,
}) => {
  const [message, setMessage] = useState("");

  if (!senderName) {
    return <></>;
  }

  const handleSendMessage = () => {
    if (!message) {
      alert("Please type a message!");
      return;
    }

    onMessageSend({ text: message, to: receiverName });
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSendMessage();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Message:</label>
      <input
        id="message"
        type="text"
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessagePlaceholder;
