import React, { useState } from "react";
import CharacterModal from "./CharacterModal";

function CharacterCard({ character }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div className="character-card" onClick={handleOpen}>
        <img 
        src="/assets/profile.svg" 
        alt={`${character.name}'s profile`} 
        className="character-image" 
        style={{width: '5vw'}}
      />
      <h2 className="charecter-h1">{character.name}</h2>
      <CharacterModal
        isOpen={isModalOpen}
        onClose={handleClose}
        character={character}
      />
    </div>
  );
}

export default CharacterCard;
