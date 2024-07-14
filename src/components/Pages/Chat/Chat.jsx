// ChatRoom.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io("https://localhost:8080"); 

const Chat = ({ currentUser, recipientUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.post('/api/messages/getmsg', {
          from: currentUser._id,
          to: recipientUser._id,
        });
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

  
    socket.on(`newMessage_${currentUser._id}`, (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off(`newMessage_${currentUser._id}`);
    };
  }, [currentUser._id, recipientUser._id]);

  const sendMessage = async () => {
    try {
      await axios.post('/api/messages/addmsg', {
        from: currentUser._id,
        to: recipientUser._id,
        message: newMessage,
      });
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.fromSelf ? 'from-self' : 'from-other'}`}>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="input-area">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
