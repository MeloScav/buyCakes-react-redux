import React from "react";
import { useSelector } from "react-redux";

const Bag = () => {
  // initial state
  const nbrCakes = useSelector((state) => state.cakes);
  const myCakes = useSelector((state) => state.myCakes);

  return (
    <div className={"bag"}>
      <h2>{"Mon panier"}</h2>
      <p>
        {`Vous avez actuellement ${myCakes} `}
        {myCakes > 1 ? "gâteaux" : "gâteau"}
      </p>
    </div>
  );
};

export default Bag;
