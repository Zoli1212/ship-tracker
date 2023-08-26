import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ShipList from "./components/ship/ShipList";
import ShipDetails from "./components/ship/ShipDetails";

import Nav from "./components/common/Nav";
import { useState } from "react";
import { Ship } from "./interfaces/interface";

function App() {

  const [ filteredShips, setFilteredShips] = useState<Ship []>([])

  return (
    <Provider store={store}>
      <Nav setFilteredShips={setFilteredShips}/>
      <Routes>
        <Route path="/" element={<ShipList filteredShips={filteredShips}/>} />
        <Route path="/ship/:id" element={<ShipDetails />} />
      </Routes>
    </Provider>
  );
}

export default App;
