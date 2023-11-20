import ChatMessagesPlaceholder from "./components/ChatMessagesPlaceHolder";
import SendMessagePlaceholder from "./components/SendMessagePlaceholder";
import { useStompClient } from "./useStompClient";
import { useParams } from "react-router-dom";

const ChatPage = () => {
  const { senderName, receiverName } = useParams();
  const { messagesReceived, sendMessage } = useStompClient(senderName);

  return (
    <div className="chat">
      <SendMessagePlaceholder
        senderName={senderName}
        receiverName={receiverName}
        onMessageSend={sendMessage}
      />
      <br />
      <ChatMessagesPlaceholder
        senderName={senderName}
        messagesReceived={messagesReceived}
      />
    </div>
  );
};

export default ChatPage;
