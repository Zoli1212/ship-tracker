import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Ship } from '../../interfaces/interface';
import { useGetShipsQuery } from '../../slices/shipsApiSlice';



interface Props {
    setFilteredShips: React.Dispatch<React.SetStateAction<Ship[]>>
}

function Nav({ setFilteredShips}: Props) {
  const [searchTerm, setSearchTerm] = useState('');


  const { data } = useGetShipsQuery();

  useEffect(() => {
      const filteredShips: Ship[] = data?.ships.filter((ship: Ship) =>
        ship.owner.toLowerCase().includes(searchTerm.toLowerCase())
      ) || [];

      setFilteredShips(filteredShips)

  }, [searchTerm])



  return (
    <nav className="flex items-center justify-between bg-blue-300 p-4 mb-10">
      <div className="flex items-center">
        <Link to="/" className="text-white text-2xl">
          <AiOutlineHome className="mr-2" />
        </Link>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search by owner"
          className="bg-white rounded p-2 mr-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
     
      </div>
    </nav>
  );
}

export default Nav;
