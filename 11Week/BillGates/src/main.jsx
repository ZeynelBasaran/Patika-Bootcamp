import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ActivePageProvider from "./Context/ActivePageProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ActivePageProvider>
    <App />
  </ActivePageProvider>
);
