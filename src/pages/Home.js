import React, { useState } from 'react';
import VideoCard from '../components/VideoCard';
import VideoForm from './VideoForm';
import '../styles/Home.css';

const Home = ({ videos, setVideos, onEdit, onDelete }) => {
  const [editingVideo, setEditingVideo] = useState(null);

  const handleEdit = (video) => {
    setEditingVideo(video);
  };

  const handleDelete = (video) => {
    onDelete(video);
  };

  const handleSave = (video) => {
    if (editingVideo) {
      setVideos(videos.map((v) => (v === editingVideo ? video : v)));
    } else {
      setVideos([...videos, video]);
    }
    setEditingVideo(null);
  };

  const handleCancel = () => {
    setEditingVideo(null);
  };

  return (
    <div className="home">
      <h2>Front End</h2>
      <div className="video-card-container">
        {videos.filter(video => video.category === 'Front End').map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <h2>Back End</h2>
      <div className="video-card-container">
        {videos.filter(video => video.category === 'Back End').map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {editingVideo && (
        <div className="overlay">
          <div className="overlay__content">
            <VideoForm
              video={editingVideo}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

