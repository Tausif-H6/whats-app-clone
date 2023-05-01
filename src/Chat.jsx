import React, { useEffect, useState } from "react";
import "./css/Chat.css";
import { Avatar, IconButton } from "@mui/material";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import db from "./firbase";


function Chat() {
  const [seed, setSeed] = useState("");
  const [input,setInput]=useState("");
  const {roomId} = useParams();
  const [roomName,setRoomName]=useState("");
  
  useEffect(() => {
    //For getting random svg charecters
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  useEffect(()=>{
          //    when room id will chnage we will run a function to get new masseges
   if (roomId) {
    //Puuling data if room id get's a match 
    db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(setRoomName(snapshot.data().name)))
   }

  },[roomId])


  const sendMessage = (e)=>{
    e.preventDefault();
    console.log("You typed >>> ", input)
    setInput("");
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
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
