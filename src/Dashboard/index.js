import React, { useState, useEffect } from "react";

const Dashboard = (props) => {
  const { data } = props;
  return (
    <div>
      {data ? (
        <div>
          <img src={data?.profilePictureUrl} />
          <div>{data.nickname}</div>
          <div>{data.comment}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
