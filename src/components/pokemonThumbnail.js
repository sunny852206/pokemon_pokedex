import React from "react";

const PokemonThumbnail = ({ id, name, image, type }) => {
  return (
    <div className="thumb-container">
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
      </div>
    </div>
  );
};

export default PokemonThumbnail;
