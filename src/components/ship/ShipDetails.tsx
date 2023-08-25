import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Ship, ShipResponse } from "../../interfaces/interface";
import { RootState, store } from "../../store/store";


interface Params {
    [key: string]: string | undefined;
    id: string;
  }

function ShipDetails() {
  const { id } = useParams<Params>();

  const shipState = useSelector((state: RootState) => 
  state.shipsApi.queries['getShips(undefined)']?.data
);

console.log(shipState)



//   if (!ship) {
//     return <div>Ship Not Found.</div>;
//   }

  return (
    <div className="border p-4 rounded shadow">
      {/* <h2>{ship.name}</h2>
      <p>Country of origin: {ship.country}</p>
      <p>TEU: {ship.maxTEU}</p>
      További hajóadatok... */}
    </div>
  );
}

export default ShipDetails;
