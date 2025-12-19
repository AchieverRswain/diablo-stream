import React from "react";
import "./Player.css";
import { useNavigate, useParams } from "react-router-dom";
import cards_data from "../../assets/cards/Cards_data";

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const video = cards_data.find(item => item.id === id);

  if (!video) {
    return <h2 style={{ color: "white" }}>Video not found</h2>;
  }

  return (
    <div className="player">
      {/* Back button */}
      <img
        src="/back_arrow_icon.png"
        alt="Back"
        className="back-arrow"
        onClick={() => navigate(-1)}
      />

      {/* R2 video stream */}
      <video
        src={video.videoUrl}
        controls
        autoPlay
        width="90%"
        height="90%"
      />

      <div className="player-info">
        <p>{video.name}</p>
        <p>Original Content</p>
        <p>MP4 Stream</p>
      </div>
    </div>
  );
};

export default Player;
