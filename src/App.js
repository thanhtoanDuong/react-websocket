import "./App.css";
import React, { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import Dashboard from "./Dashboard";

function App() {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState(" ws://localhost:3698");
  const [messageHistory, setMessageHistory] = useState([]);
  const [data, setData] = useState({ comment: undefined, nickname: '-', profilePictureUrl: "" });
  const [join, setJoin] = useState()

  const { lastMessage } = useWebSocket(socketUrl);
  useEffect(() => {
    if (lastMessage !== null) {
      const newData = JSON.parse(lastMessage?.data);
      switch (newData.key) {
        case "chat":
          console.log(newData);
          setData(newData.data);
          break;
        case "member":
          console.log(newData);
          setJoin(newData.data)
          break;
        case "roomUser":
          // console.log(newData.data);
          break;
        case "like":
          // console.log(newData);
          break;
        default:
          break;
      }
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage]);

  return <div className="">
    <Dashboard
      data={data}
      join={join}
    />
  </div>;
}

export default App;
