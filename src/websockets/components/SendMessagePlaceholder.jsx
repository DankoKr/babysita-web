import { useState } from 'react';
import styles from './ChatPage.module.css';

const SendMessagePlaceholder = ({
  senderName,
  receiverName,
  onMessageSend,
}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!message) {
      alert('Please type a message!');
      return;
    }

    onMessageSend({ text: message, to: receiverName });
    setMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSendMessage();
  };

  return (
    <div className={styles.sendMessageContainer}>
      <form className={styles.sendMessageForm} onSubmit={handleSubmit}>
        <label htmlFor='message'>Message:</label>
        <input
          id='message'
          type='text'
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default SendMessagePlaceholder;
