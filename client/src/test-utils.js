import Provider from "react-redux";
import { render } from "@testing-library/react";
import { store } from "./store/index";

function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
const reduxRender = (ui, options = [0,1,2]) =>
  render(ui, { wrapper: ReduxProvider }, ...options);

export * from "@testing-library/react";
export { reduxRender as render };
