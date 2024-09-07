import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Components/Compo/Container";
import ActivePageProvider from "./Context/ActivePage";


import "./index.css";

createRoot(document.getElementById("root")).render(
  <ActivePageProvider>
    <Container />
  </ActivePageProvider>
);
