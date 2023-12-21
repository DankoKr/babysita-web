import ChatMessagesPlaceholder from './components/ChatMessagesPlaceHolder';
import SendMessagePlaceholder from './components/SendMessagePlaceholder';
import { useStompClient } from './useStompClient';
import { useParams } from 'react-router-dom';
import styles from './components/ChatPage.module.css';

const ChatPage = () => {
  const { senderName, receiverName } = useParams();
  const { messagesReceived, sendMessage } = useStompClient(senderName);

  return (
    <div className={styles.chat}>
      <h2 className={styles.chatHeader}>Chat with {receiverName}</h2>
      <div className={styles.messageContainer}>
        <ChatMessagesPlaceholder
          senderName={senderName}
          messagesReceived={messagesReceived}
        />
        <SendMessagePlaceholder
          senderName={senderName}
          receiverName={receiverName}
          onMessageSend={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatPage;
