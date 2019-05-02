export const RECEIVE_INFO = "RECEIVE_INFO";

export function receiveInfo(alias) {
  return {
    type: RECEIVE_INFO,
    alias
  };
}
