import { GET_USER } from "../action/User.action";
const initialeState = {};

export default function useReducer(State = initialeState.action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      State;
  }
}
