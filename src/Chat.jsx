import React, { useEffect, useState } from "react";
import "./css/Chat.css";
import { Avatar, IconButton } from "@mui/material";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@mui/icons-material";
function Chat() {
  const [seed, setSeed] = useState("");
  const [input,setInput]=useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e)=>{
    e.preventDefault();
    console.log("You typed >>> ", input)
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className= {`chat__message ${false && `chat__reciver`} `}>
          <span className="chat__name"> Tausif Hossain </span>
          Let's make a call
          <span className="chat__timestamp">9.52pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon/>
        <form>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Type a message" />
            <button type="submit" onClick={sendMessage}>Send a massage </button>
        </form>
        <Mic/>
      </div>
    </div>
  );
}

export default Chat;
