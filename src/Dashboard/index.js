import React, { useState, useEffect } from "react";

const vietnameseToEnglishMap = {
  à: "a",
  á: "a",
  ả: "a",
  ã: "a",
  ạ: "a",
  ă: "a",
  ằ: "a",
  ắ: "a",
  ẳ: "a",
  ẵ: "a",
  ặ: "a",
  â: "a",
  ầ: "a",
  ấ: "a",
  ẩ: "a",
  ẫ: "a",
  ậ: "a",
  đ: "d",
  è: "e",
  é: "e",
  ẻ: "e",
  ẽ: "e",
  ẹ: "e",
  ê: "e",
  ề: "e",
  ế: "e",
  ể: "e",
  ễ: "e",
  ệ: "e",
  ì: "i",
  í: "i",
  ỉ: "i",
  ĩ: "i",
  ị: "i",
  ò: "o",
  ó: "o",
  ỏ: "o",
  õ: "o",
  ọ: "o",
  ô: "o",
  ồ: "o",
  ố: "o",
  ổ: "o",
  ỗ: "o",
  ộ: "o",
  ơ: "o",
  ờ: "o",
  ớ: "o",
  ở: "o",
  ỡ: "o",
  ợ: "o",
  ù: "u",
  ú: "u",
  ủ: "u",
  ũ: "u",
  ụ: "u",
  ư: "u",
  ừ: "u",
  ứ: "u",
  ử: "u",
  ữ: "u",
  ự: "u",
  ỳ: "y",
  ý: "y",
  ỷ: "y",
  ỹ: "y",
  ỵ: "y",
};

const Dashboard = (props) => {
  const { data, join } = props;

    function convertVietnameseToEnglish(str1) {
      const str = str1 || ""
    let result = "";

    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      const englishC = vietnameseToEnglishMap[c] || c;
      result += englishC;
    }

    return result;
  }

    const speechHandler = (text) => {
      console.log(text);
    const msg = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    msg.voice = voices[49];
    window.speechSynthesis.speak(msg);
  };

  useEffect(() => {
    speechHandler(`hello ${convertVietnameseToEnglish(join?.nickname).replace(/[^a-zA-Z\s]+/g, '')}`);
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
