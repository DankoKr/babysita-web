import { useState, useEffect, useCallback } from "react";
import { Client } from "@stomp/stompjs";
import { v4 as uuidv4 } from "uuid";

const useStompClient = (username) => {
  const [stompClient, setStompClient] = useState(null);
  const [messagesReceived, setMessagesReceived] = useState([]);

  // Function to handle incoming messages
  const onMessageReceived = useCallback((data) => {
    const message = JSON.parse(data.body);
    setMessagesReceived((prevMessages) => [...prevMessages, message]);
  }, []);

  // Function to setup STOMP client
  const setupStompClient = useCallback(() => {
    const client = new Client({
      brokerURL: "ws://localhost:8080/ws",
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = () => {
      // Subscribe to private messages if username is available
      if (username) {
        client.subscribe(
          `/user/${username}/queue/inboxmessages`,
          onMessageReceived
        );
      }
    };

    client.activate();
    setStompClient(client);

    return () => client.deactivate();
  }, [username, onMessageReceived]);

  // Initialize and clean up STOMP client
  useEffect(() => {
    if (!username) return;

    const cleanup = setupStompClient();
    return cleanup;
  }, [username, setupStompClient]);

  // Function to send a message
  const sendMessage = (newMessage) => {
    if (!stompClient || !username) return;

    const payload = {
      id: uuidv4(),
      from: username,
      to: newMessage.to,
      text: newMessage.text,
    };

    const destination = payload.to
      ? `/user/${payload.to}/queue/inboxmessages`
      : "/topic/publicmessages";

    stompClient.publish({
      destination,
      body: JSON.stringify(payload),
    });
  };

  return { stompClient, messagesReceived, sendMessage };
};

export { useStompClient };
