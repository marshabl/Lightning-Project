import { RECEIVE_INFO } from "../actions/receiveInfo";

export default function alias(state = {}, action) {
  switch (action.type) {
    case RECEIVE_INFO:
      return {
        ...state,
        ...action.alias
      };
    default:
      return state;
  }
}
