import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BuyCakes } from "./redux/actions/cakeActions";
import { LessCakes } from "./redux/actions/lessCakeActions";

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

      <div className={"buttons"}>
        <button
          type={"button"}
          onClick={() => {
            dispatch(BuyCakes());
          }}
        >
          {myCakes <= 0 ? "Ajouter" : "+"}
        </button>

        {myCakes >= 1 ? <p>{myCakes}</p> : null}

        {myCakes >= 1 ? (
          <button
            type={"button"}
            onClick={() => {
              dispatch(LessCakes());
            }}
          >
            {"-"}
          </button>
        ) : null}
      </div>
    </>
  );
};

export default App;
