import React from 'react'

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
          <img src="./public/trainer1.jpg" alt="" />
          <div className="path">
            <h3>John Due</h3>
            <p>Cardio Tranier</p>
          </div>
        </div>
        <div className="img-div">
          <img src="./public/trainer2.jpg" alt="" />
          <div className="path">
            <h3>John Due</h3>
            <p>Cardio Tranier</p>
          </div>
        </div>
        <div className="img-div">
          <img src="./public/trainer3.jpg" alt="" />
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