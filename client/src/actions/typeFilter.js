import { TYPE_FILTER } from "./index";

export function typeFilter(payload) {
  return {
    type: TYPE_FILTER,
    payload: payload
  };
}