import React, { useState, useEffect } from 'react'

const Dashboard = (props) => {
    const { data } = props
    const { comment, nickname, profilePictureUrl } = data;
    console.log(data);
    return (
      <div>
        <div>{}</div>
      </div>
    );
}

export default Dashboard;