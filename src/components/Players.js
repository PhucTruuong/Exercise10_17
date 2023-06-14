import React, { useState } from "react";
import { data } from "../Share/ListOfPlayers";
import { Link } from "react-router-dom";

function Players() {
  const [players, setPlayer] = useState([]);

  return (
    <div className="container">
      {data.map((player) => (
        <div className="column" key={player.id}>
          <div className="card">
            <img src={player.img} alt="" />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p className="btn">
              <button onClick={() => {setPlayer(player);}}>
                <Link to={`detail/${player.id}`}>
                  Detail
                </Link>
              </button>
            </p>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default Players;
