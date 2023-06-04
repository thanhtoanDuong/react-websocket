import React, { useState, useEffect } from "react";

const Dashboard = (props) => {
  const { data, join } = props;

  const speechHandler = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  useEffect(() => {
    console.log("hello", join?.nickname);
    speechHandler(`hello ${join?.nickname.replace(/[^a-zA-Z]+/g, '')}`);
  }, [join]);
  return (
    <div>
      {data ? (
        <div>
          <img src={data?.profilePictureUrl} />
          <div>{data.nickname}</div>
          <div>{data.comment}</div>
        </div>
      ) : null}
      {join ? <div>Hello {join.nickname}</div> : null}
    </div>
  );
};

export default Dashboard;
