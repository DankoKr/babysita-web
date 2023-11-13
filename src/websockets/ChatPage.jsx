import React, { useState } from "react";
import ChatMessagesPlaceholder from "./components/ChatMessagesPlaceHolder";
import SendMessagePlaceholder from "./components/SendMessagePlaceholder";
import UsernamePlaceholder from "./components/UsernamePlaceholder";
import { useStompClient } from "./useStompClient";

const ChatPage = () => {
  const [username, setUsername] = useState();
  const { stompClient, messagesReceived, sendMessage } =
    useStompClient(username);

  const onUsernameInformed = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <div className="chat">
      <UsernamePlaceholder
        username={username}
        onUsernameInformed={onUsernameInformed}
      />
      <br />
      <SendMessagePlaceholder username={username} onMessageSend={sendMessage} />
      <br />
      <ChatMessagesPlaceholder
        username={username}
        messagesReceived={messagesReceived}
      />
    </div>
  );
};

export default ChatPage;
