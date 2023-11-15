import React from "react";

const MessageReceived = ({ from, text, direct }) => {
  return (
    <div>
      <b>{from}</b>: {text} {direct ? <b>(direct)</b> : ""}
    </div>
  );
};

const ChatMessagesPlaceholder = ({ senderName, messagesReceived }) => {
  return (
    <>
      <h2>Messages:</h2>
      {messagesReceived
        .filter((message) => message.from !== senderName)
        .map((message) => (
          <MessageReceived
            key={message.id}
            from={message.from}
            direct={message.to === senderName}
            text={message.text}
          />
        ))}
    </>
  );
};

export default ChatMessagesPlaceholder;
