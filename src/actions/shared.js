import { getInfo } from "../utils/commands";
import { receiveInfo } from "./receiveInfo";

export function handleInitialData() {
  return dispatch => {
    return getInfo().then(({ alias }) => {
      dispatch(receiveInfo(alias));
    });
  };
}
