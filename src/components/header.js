import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  // initial state
  const nbrCakes = useSelector((state) => state.cakes);

  return (
    <div className={"header"}>
      <h1>{"Goûtez nos magnifiques gâteaux !"}</h1>
      <p>{`Gâteaux restant: ${nbrCakes}`}</p>
    </div>
  );
};

export default Header;
