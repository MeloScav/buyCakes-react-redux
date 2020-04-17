import { BUYCAKE } from "../types/cakeTypes";

const initialState = {
  cakes: 13,
  myCakes: 0,
};

const cakeReducer = (state = initialState, action) => {
  if (action.type === BUYCAKE) {
    return {
      ...state,
      cakes: state.cakes - 1,
      myCakes: state.myCakes + 1,
    };
  }

  return state;
};

export default cakeReducer;
