import React from 'react'
import trainers1 from "/public/trainer1.jpg"
import trainers2 from "/public/trainer2.jpg"
import trainers3 from "/public/trainer3.jpg"


function SectionEl1() {
  return (
    <div className="blue">
    <div className="trainers container">
      <h2>OUR BEST TRAİNERS</h2>
      <hr className="hrcenter"/>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eaque
        dicta sapiente <br />
        minus dignissimos repellendus.
      </p>
      <div className="images">
        <div className="img-div">
          <img src={trainers1} alt="" />
          <div className="path">
            <h3>John Due</h3>
            <p>Cardio Tranier</p>
          </div>
        </div>
        <div className="img-div">
          <img src={trainers2} alt="" />
          <div className="path">
            <h3>John Due</h3>
            <p>Cardio Tranier</p>
          </div>
        </div>
        <div className="img-div">
          <img src={trainers3} alt="" />
          <div className="path">
            <h3>John Due</h3>
            <p>Cardio Tranier</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SectionEl1