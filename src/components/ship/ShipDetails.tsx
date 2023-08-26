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

  const shipState: any = useSelector(
    (state: RootState) => state.shipsApi.queries["getShips(undefined)"]?.data
  );

  console.log(shipState.ships);
  const selectedShip: Ship | undefined = shipState?.ships.find(
    (ship: Ship) => ship.id == id
  );

  if (!selectedShip) {
    return <div>Ship Not Found.</div>;
  }

  const ownerParts = selectedShip.owner.split("(");
  const country =
    ownerParts.length > 1 ? ownerParts[1].replace(")", "") : "Not Given";

  return (
    <div className="flex justify-center items-start h-screen">
      <div className="border p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-semibold mb-2">{selectedShip.name}</h2>
        <p className="text-lg">Country of Origin: {country}</p>
        <p className="text-md">Built: {selectedShip.built}</p>
        <p className="text-md">Max TEU (TEU): {selectedShip.maxTEU}</p>
        <p className="text-md">Length (meters): {selectedShip.lengthMeters}</p>
        <p className="text-md">Beam (meters): {selectedShip.beamMeters}</p>
        <p className="text-md">Owner: {selectedShip.owner}</p>
      </div>
    </div>
  );
}

export default ShipDetails;
