import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePokemon from '../src/views/HomePokemon'
import DetailPokemon from '../src/views/DetailPokemon'
import MyPokemon from "../src/views/MyPokemon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePokemon />} />
        <Route path="/detail/:name" element={<DetailPokemon />} />
        <Route path="/list-mypokemon" element={<MyPokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
