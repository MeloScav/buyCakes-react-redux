import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BuyCakes } from "./redux/actions/cakeActions";

const App = () => {
  // initial state
  const nbrCakes = useSelector((state) => state.cakes);
  const myCakes = useSelector((state) => state.myCakes);

  // Actions
  const dispatch = useDispatch();

  return (
    <>
      <h1>{"Goûtez nos magnifiques gâteaux !"}</h1>
      <p>{`Gâteaux restant: ${nbrCakes}`}</p>

      <h2>{"Mon panier :"}</h2>
      <p>
        {`Vous avez actuellement ${myCakes} `}
        {myCakes > 1 ? "gâteaux" : "gâteau"}
      </p>
      <button
        type={"button"}
        onClick={() => {
          dispatch(BuyCakes());
        }}
      >
        {"Ajouter"}
      </button>
    </>
  );
};

export default App;
