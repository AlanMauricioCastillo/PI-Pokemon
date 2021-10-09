import { FORCE_DES } from "./index";

export function forceDes(payload) {
  return {
    type: FORCE_DES,
    payload: payload
  };
}