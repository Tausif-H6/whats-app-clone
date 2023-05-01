import React from "react";
import "./css/Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import {
  MoreVert,
  DonutLarge,
  Chat,
  SearchOutlined,
} from "@mui/icons-material";
import Sidebarchat from "./Sidebarchat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <Sidebarchat addNewChat/>
        <Sidebarchat/>
        <Sidebarchat/>
        <Sidebarchat/>
        <Sidebarchat/>

      </div>
    </div>
  );
}

export default Sidebar;
