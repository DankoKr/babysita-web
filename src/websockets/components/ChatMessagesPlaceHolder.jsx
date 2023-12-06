const MessageReceived = ({ from, text, direct, isMine }) => {
  const messageStyle = isMine
    ? { color: 'black' }
    : { color: 'blue', fontWeight: 'bold' };
  const prefix = isMine ? 'Me' : from;

  return (
    <div style={messageStyle}>
      <b>{prefix}</b>: {text}
    </div>
  );
};

const ChatMessagesPlaceholder = ({ senderName, messagesReceived }) => {
  return (
    <>
      <h2>Messages:</h2>
      {messagesReceived.map((message) => (
        <MessageReceived
          key={message.id}
          from={message.from}
          direct={message.to === senderName}
          text={message.text}
          isMine={message.from === senderName}
        />
      ))}
    </>
  );
};

export default ChatMessagesPlaceholder;
