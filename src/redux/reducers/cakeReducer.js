import { BUYCAKE } from "../types/cakeTypes";

const initialState = {
  cakes: 13,
  myCakes: 0,
};

const cakeReducer = (state = initialState, action) => {
  if (action.type === BUYCAKE) {
    return {
      ...state,
      cakes: state.cakes > 0 ? state.cakes - 1 : state.cakes,
      myCakes: state.myCakes < 13 ? state.myCakes + 1 : state.myCakes,
    };
  }

  return state;
};

export default cakeReducer;
