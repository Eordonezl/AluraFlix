import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import VideoForm from './pages/VideoForm';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import React, { useState, useEffect } from 'react';

function App() {
  // Estado para los videos
  const [videos, setVideos] = useState([]);

  // Cargar los videos desde localStorage cuando el componente se monta
  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem('videos'));
    if (savedVideos) {
      setVideos(savedVideos);
    }
  }, []);

  // Guardar los videos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos));
  }, [videos]);

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

