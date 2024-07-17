import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import '../styles/VideoCard.css';

const VideoCard = ({ video, onEdit, onDelete }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="card">
      <div className="card__video">
        {!isPlaying ? (
          <img
            src={video.image}
            alt={video.title}
            onClick={handlePlayPause}
            className="video-thumbnail"
          />
        ) : (
          <ReactPlayer
            url={video.link}
            playing={isPlaying}
            controls
            width="100%"
            height="100%"
          />
        )}
      </div>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <div className="button-container">
        <button className="button" onClick={handlePlayPause}>
          {isPlaying ? 'Pausar Video' : 'Ver Video'}
        </button>
        <button className="button" onClick={() => onEdit(video)}>Editar</button>
        <button className="button" onClick={() => onDelete(video)}>Eliminar</button>
      </div>
    </div>
  );
};

export default VideoCard;














