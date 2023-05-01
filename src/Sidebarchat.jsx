import React, { useEffect, useState } from "react";
import "./css/Sidebarchat.css";
import { Avatar } from "@mui/material";
import db from "./firbase";
import { Link } from "react-router-dom";

function Sidebarchat({ name,id,addNewChat }) {
  
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
     if (roomName) {
      //To do some clever stuffs 
      db.collection('rooms').add({
        name: roomName,
      })
     }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className="sidebarchat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last message..</p>
      </div>
    </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default Sidebarchat;
