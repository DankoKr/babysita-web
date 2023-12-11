import styles from './ChatPage.module.css';

const MessageReceived = ({ from, text, isMine }) => {
  const messageClasses = isMine
    ? `${styles.messageBox} ${styles.mine}`
    : styles.messageBox;

  const prefix = isMine ? 'Me' : from;

  return (
    <div className={messageClasses}>
      <div className={styles.messageSender}>{prefix}</div>
      <div>{text}</div>
    </div>
  );
};

const ChatMessagesPlaceholder = ({ senderName, messagesReceived }) => {
  return (
    <div className={styles.messagesContainer}>
      {messagesReceived.map((message) => (
        <MessageReceived
          key={message.id}
          from={message.from}
          text={message.text}
          isMine={message.from === senderName}
        />
      ))}
    </div>
  );
};

export default ChatMessagesPlaceholder;
