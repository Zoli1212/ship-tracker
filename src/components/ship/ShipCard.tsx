import React from "react";
import { Link } from "react-router-dom";
import { Ship } from "../../interfaces/interface";

interface ShipCardProps {
  ships: Ship[] | undefined;
}

const ShipCard: React.FC<ShipCardProps> = ({ ships }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {ships?.map((ship: Ship) => (
        <Link key={ship.id} to={`/ship/${ship.id}`}>
          <div className="border p-4 rounded shadow flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">{ship.name}</h2>
            <p className="text-lg mb-2">Country of origin: {ship.country}</p>
            <p className="text-lg">{ship.maxTEU}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShipCard;
