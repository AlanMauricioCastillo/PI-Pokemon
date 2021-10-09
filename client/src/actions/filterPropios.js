import { PROPIOS } from "./index";

export function filterPropios(payload) {
  return {
    type: PROPIOS,
    payload: payload
  };
}