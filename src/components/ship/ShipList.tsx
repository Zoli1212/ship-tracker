import React from "react";
import { useGetShipsQuery } from '../../slices/shipsApiSlice';
import { Link } from "react-router-dom";
import { Ship } from "../../interfaces/interface";


function ShipList() {
  const { data, isError, isLoading } = useGetShipsQuery();

  
  if (isLoading) {
      return <div>Loading...</div>;
    }
    
    if (isError) {
        return <div>Error loading ships...</div>;
    }
    console.log(data)

  return (
    <div className="grid grid-cols-3 gap-4">
      {data && data.ships.map((ship: Ship) => (
        <Link key={ship.id} to={`/ship/${ship.id}`}>
          <div className="border p-4 rounded shadow">
            <h2>{ship.name}</h2>
            <p>{ship.country}</p>
            <p>{ship.maxTEU}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ShipList;
