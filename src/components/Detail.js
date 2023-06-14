import { useParams } from "react-router-dom";
import { data } from "../Share/ListOfPlayers";
import React from "react";

const Detail = () => {
  const userName = useParams();
  const player = data.find((obj) => {
    console.log(`obj: ${obj.id} userName: ${userName.id}`);
    return obj.id === parseInt(userName.id);
  });
  let cost = player.cost.toLocaleString();
  return (
    <div className="details-container">
      <div className="product-card">
        <div className="upper">
          <div className="badge">{player.name}</div>
          <div className="product-tumb">
            <img src={`../${player.img}`} alt="" />
          </div>
        </div>
        <div className="product-details">
          <h4>{player.club}</h4>
          <div className="product-price">Market value: € {cost}</div>
          <p>{player.info}</p>
          <div className="product-bottom-details"></div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
