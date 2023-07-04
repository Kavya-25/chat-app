import { useState, useEffect } from "react";
import "./Chats.scss";
import axios from "axios";

export const Chats = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("http://localhost:5000/api/chats");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="chats">
      {chats.map((chat) => {
        return (
          <div key={chat._id}>
            <h1>{chat.chatName}</h1>
          </div>
        );
      })}
    </div>
  );
};
