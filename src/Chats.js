import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo This has been the time of the life"
        timestamp="40 sec"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Santiago_Cervera_Profile_Pic.jpg/1200px-Santiago_Cervera_Profile_Pic.jpg"
      />
    </div>
  );
}

export default Chats;
