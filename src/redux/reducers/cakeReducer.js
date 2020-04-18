import { BUYCAKE, LESSCAKE } from "../types/cakeTypes";

const initialState = {
  cakes: 13,
  myCakes: 0,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUYCAKE:
      return {
        ...state,
        cakes: state.cakes > 0 ? state.cakes - 1 : state.cakes,
        myCakes: state.myCakes < 13 ? state.myCakes + 1 : state.myCakes,
      };
    case LESSCAKE:
      return {
        ...state,
        cakes: state.cakes < 13 ? state.cakes + 1 : state.cakes,
        myCakes: state.myCakes > 0 ? state.myCakes - 1 : state.myCakes,
      };
    default:
      return state;
  }
};

export default cakeReducer;
