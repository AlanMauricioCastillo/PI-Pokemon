import { FROM_API } from "./index";

export function filterApi(payload) {
  return {
    type: FROM_API,
    payload: payload
  };
}