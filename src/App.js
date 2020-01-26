import React from "react";
import Navbar from "./Components/Navbar";
import Pokemons from "./Components/Pokemons";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Pokemons />
    </div>
  );
}
