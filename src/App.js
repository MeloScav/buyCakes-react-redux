import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  // initial state
  const nbrCakes = useSelector((state) => state.cake);

  return (
    <>
      <h1>{"Goûtez nos magnifiques gâteaux !"}</h1>
      <p>{`Gâteaux restant: ${nbrCakes}`}</p>
    </>
  );
};

export default App;
