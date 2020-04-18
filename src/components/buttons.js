import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BuyCakes } from "../redux/actions/cakeActions";
import { LessCakes } from "../redux/actions/lessCakeActions";

const Buttons = () => {
  // initial state
  const myCakes = useSelector((state) => state.myCakes);

  // Actions
  const dispatch = useDispatch();

  return (
    <div className={"buttons"}>
      <button
        type={"button"}
        onClick={() => {
          dispatch(BuyCakes());
        }}
      >
        {myCakes <= 0 ? "Ajouter" : "+"}
      </button>

      {myCakes >= 1 ? (
        <>
          <p>{myCakes}</p>
          <button
            type={"button"}
            onClick={() => {
              dispatch(LessCakes());
            }}
          >
            {"-"}
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Buttons;
