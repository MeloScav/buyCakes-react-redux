import { BUYCAKE } from "../types/cakeTypes";

const initialState = {
  cake: 13,
};

const cakeReducer = (state = initialState, action) => {
  if (action.type === BUYCAKE) {
    return {};
  }

  return state;
};

export default cakeReducer;
