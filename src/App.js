import './App.css';
import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

function App() {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState(" ws://localhost:3698");
  const [messageHistory, setMessageHistory] = useState([]);

  const { lastMessage } = useWebSocket(socketUrl);
   useEffect(() => {
     if (lastMessage !== null) {
       console.log(lastMessage);
       setMessageHistory((prev) => prev.concat(lastMessage));
     }
   }, [lastMessage, setMessageHistory]);
  
  return <div className="">{`${lastMessage?.data}`}</div>;
}

export default App;
