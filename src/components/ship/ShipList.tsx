import React from "react";
import { useGetShipsQuery } from "../../slices/shipsApiSlice";
import { Link } from "react-router-dom";
import { Ship } from "../../interfaces/interface";
import ShipCard from "./ShipCard";

interface Props {
  filteredShips: Ship[];
}

function ShipList({ filteredShips }: Props) {
  const { data, isError, isLoading } = useGetShipsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading ships...</div>;
  }

  const shipsWithCountryNames = (
    filteredShips?.length > 0 ? filteredShips : data?.ships
  )?.map((ship: Ship) => {
    const ownerParts = ship.owner.split("(");
    const country =
      ownerParts.length > 1 ? ownerParts[1].replace(")", "") : "Not Given";
    return {
      id: ship.id,
      built: ship.built,
      name: ship.name,
      country: country,
      lengthMeters: ship.lengthMeters,
      beamMeters: ship.beamMeters,
      maxTEU: ship.maxTEU,
      owner: ship.owner,
    };
  });

  return (
    <div className="flex justify-center">
      <ShipCard ships={shipsWithCountryNames} />
    </div>
  );
}

export default ShipList;
