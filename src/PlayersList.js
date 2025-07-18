// src/PlayersList.js

import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
        // Le spread operator {...player} passe toutes les props automatiquement
      ))}
    </div>
  );
};

export default PlayersList;
