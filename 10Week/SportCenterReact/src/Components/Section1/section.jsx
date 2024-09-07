import React from "react";
import SectionEl1 from "./SectionEl1"
import SectionEl2 from "./SectionEl2";
import SectionEl3 from "./SectionEl3";
import SectionEl4 from "./SectionEl4";
import "./sectionstyle.css"


function Section1() {
  return (
    <section id="section1">
      <div className="container">
        <SectionEl1 />
        <SectionEl2 />
        <SectionEl3 />
        <SectionEl4 />
      </div>
    </section>
  );
}

export default Section1;
