import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import Second from "./Second";
import Main from "./Main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
