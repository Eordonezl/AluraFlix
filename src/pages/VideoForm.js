import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VideoForm.css';

const VideoForm = ({ onSave, onCancel, video }) => {
  const [title, setTitle] = useState(video ? video.title : '');
  const [category, setCategory] = useState(video ? video.category : '');
  const [image, setImage] = useState(video ? video.image : '');
  const [link, setLink] = useState(video ? video.link : '');
  const [description, setDescription] = useState(video ? video.description : '');
  const navigate = useNavigate();

  const handleSave = () => {
    const newVideo = { title, category, image, link, description };
    onSave(newVideo);
    navigate('/'); // Redirige a la página principal después de guardar
  };

  return (
    <div className="form">
      <div className="form__group">
        <label>Título</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form__group">
        <label>Categoría</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div className="form__group">
        <label>Imagen</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div className="form__group">
        <label>Link</label>
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </div>
      <div className="form__group">
        <label>Descripción</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="form__actions">
        <button className="button" onClick={handleSave}>Guardar</button>
        <button className="button" onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default VideoForm;










