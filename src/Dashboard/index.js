import React, { useState, useEffect } from "react";

const Dashboard = (props) => {
  const { data } = props;
  const { comment, nickname, profilePictureUrl } = data;
  console.log(data);
  return (
    <div>
      <img src={profilePictureUrl} />
      <div>{nickname}</div>
      <div>{comment}</div>
    </div>
  );
};

export default Dashboard;
