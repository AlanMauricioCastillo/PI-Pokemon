import { FORCE_ASC } from "./index";

export function forceAsc(payload) {
  return {
    type: FORCE_ASC,
    payload: payload
  };
}