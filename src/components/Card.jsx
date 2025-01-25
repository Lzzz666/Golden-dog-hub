import React, { useState, useEffect } from "react";
import './Card.css'; // 確保你有這個 CSS 檔案

const Card = ({ logo, name,link,desc }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseEnter = () => {
    // 開始計時
    setTimer(setTimeout(() => setShowMessage(true), 500));
  };

  const handleMouseLeave = () => {
    // 清除計時器，隱藏訊息
    clearTimeout(timer);
    setShowMessage(false);
  };

  useEffect(() => {
    return () => clearTimeout(timer); // 清除計時器，避免記憶體洩漏
  }, [timer]);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer"  className="card-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="card">
      <img src={logo}  className="card-logo" />
      <span className="card-name">{name}</span>
    </div>
    {showMessage && (
        <div className="info-card">
          <div
            className="info-card-content"
            style={{
              pointerEvents: "all", // 確保彈出卡片可以接收點擊
            }}
          >
            <h2 className="text-2xl font-semibold ">{name}</h2>
            <div className="inword">{desc}</div>
          </div>
        </div>
      )}

    </a>
  );
};

export default Card;
