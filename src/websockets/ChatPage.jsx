import React from "react";
import ChatMessagesPlaceholder from "./components/ChatMessagesPlaceHolder";
import SendMessagePlaceholder from "./components/SendMessagePlaceholder";
import { useStompClient } from "./useStompClient";

const ChatPage = ({ senderName, receiverName }) => {
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
