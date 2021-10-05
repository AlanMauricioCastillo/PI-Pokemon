import { ORDER_ASC } from "./index.JS";

export function orderAsc() {
  return {
    type: ORDER_ASC,
    payload: null
  };
}