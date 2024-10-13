import React from "react";
import Modal from "react-modal";
import "./App.css"; 

Modal.setAppElement("#root");  

function CharacterModal({ isOpen, onClose, character }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };



  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Character Details"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2 className="model_per">{character.name}</h2>
      <p className="model_perr">Height: {character.height / 100} meters</p>
      <p className="model_perr">Mass: {character.mass} kg</p>
      <p className="model_perr">Birth Year: {character.birth_year}</p>
      <p className="model_perr">Number of Films: {character.films.length}</p>
      <p className="model_perr">Added to API: {formatDate(character.created)}</p>
      <button className="btn_model" onClick={(e) => {
        e.stopPropagation(); 
        onClose(); 
      }}>Close</button>    </Modal>
  );
}

export default CharacterModal;
