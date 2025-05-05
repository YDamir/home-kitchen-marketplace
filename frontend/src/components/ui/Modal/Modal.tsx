import React, { useState } from 'react';

interface ModalProps {
  onClose: () => void;
  onSubmit: (data: { title: string; price: string; description: string }) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (!title || !description) {
      alert('All fields must be filled out!');
      return;
    }
    onSubmit({ title, price: price || `$${Math.floor(Math.random() * 1000) + 1}`, description });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Update Plan</h2>
        <form className="modal-form">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required />
          <label htmlFor="price">Price:</label>
          <span id="price-display" className="price-value">{price}</span>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} required />
          <div className="modal-buttons">
            <button type="button" className="btn-ok" onClick={handleSubmit}>OK</button>
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
