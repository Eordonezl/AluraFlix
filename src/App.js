import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import VideoForm from './pages/VideoForm';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [videos, setVideos] = useLocalStorage('videos', []);
  const [editingVideo, setEditingVideo] = useState(null);

  const handleSave = (video) => {
    if (editingVideo) {
      setVideos(videos.map((v) => (v === editingVideo ? video : v)));
    } else {
      setVideos([...videos, video]);
    }
    setEditingVideo(null);
  };

  const handleEdit = (video) => {
    setEditingVideo(video);
  };

  const handleDelete = (video) => {
    setVideos(videos.filter((v) => v !== video));
  };

  const handleCancel = () => {
    setEditingVideo(null);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home videos={videos} onEdit={handleEdit} onDelete={handleDelete} setVideos={setVideos} />} />
          <Route path="/nuevo-video" element={<VideoForm onSave={handleSave} onCancel={handleCancel} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

