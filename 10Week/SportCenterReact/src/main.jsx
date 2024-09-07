import { createRoot } from "react-dom/client";
import "./index.css";


import Main from "./Components/HeroandMaim/main";
import Section1 from "./Components/Section1/section";
import Section2 from "./Components/Section2/Section";
import Section3 from "./Components/Section3/section";
import Footer from "./Components/Footer/footer";

createRoot(document.getElementById("root")).render(
  <>
    <Main />
    <Section1 />
    <Section2 />
    <Section3 />
    <Footer />
  </>
);
