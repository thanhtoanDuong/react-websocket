import "./App.css";
import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import Dashboard from "./Dashboard";

function App() {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState(" ws://localhost:3698");
  const [messageHistory, setMessageHistory] = useState([]);
  const [data, setData] = useState();

  const { lastMessage } = useWebSocket(socketUrl);
  useEffect(() => {
    if (lastMessage !== null) {
      console.log(lastMessage);
      const newData = JSON.parse(lastMessage?.data);
      switch (newData.key) {
        case 'chat':
          console.log(newData.data);
          break;
        default:
          break;
      }
      setData();
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  return (
    <div className="">
      {/* <Dashboard data={data} /> */}
    </div>
  );
}

export default App;
