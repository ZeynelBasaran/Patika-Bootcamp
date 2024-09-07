import React from "react";
import { useState } from "react";

function Chosed({active}) {
    console.log(active)

    if (active == "yoga") {
        return (
         <div className="chosed yoga">
            <div className="chosed-info">
              <h2>Why are you Yoga</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                dicta? Sint esse molestiae distinctio consectetur labore veritatis
                impedit numquam aut alias nostrum quisquam facere pariatur, sapiente
                dignissimos reiciendis.
              </p>
              <h2>When comes Yoga Your Time</h2>
              <p>Saturday - Sunday: 08:00am -09:00am</p>
              <p>Monday - Tuesday: 08:00am -09:00am</p>
              <p>Wednesday - Friday: 08:00am -09:00am</p>
            </div>
            <div className="images">
              <img src="./public/yoga.jpg" alt="" />
            </div>
          </div>
        );
      } else if (active == "group") {
        return (
          <div className="chosed group">
            <div className="chosed-info">
              <h2>Why are you Group</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                dicta? Sint esse molestiae distinctio consectetur labore veritatis
                impedit numquam aut alias nostrum quisquam facere pariatur, sapiente
                dignissimos reiciendis.
              </p>
              <h2>When comes Group Your Time</h2>
              <p>Saturday - Sunday: 08:00am -09:00am</p>
              <p>Monday - Tuesday: 08:00am -09:00am</p>
              <p>Wednesday - Friday: 08:00am -09:00am</p>
            </div>
            <div className="images">
              <img src="./public/group.webp" alt="" />
            </div>
          </div>
        );
      } else if (active == "solo") {
        return (
          <div className="chosed solo">
            <div className="chosed-info">
              <h2>Why are you Solo</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                dicta? Sint esse molestiae distinctio consectetur labore veritatis
                impedit numquam aut alias nostrum quisquam facere pariatur, sapiente
                dignissimos reiciendis.
              </p>
              <h2>When comes Solo Your Time</h2>
              <p>Saturday - Sunday: 08:00am -09:00am</p>
              <p>Monday - Tuesday: 08:00am -09:00am</p>
              <p>Wednesday - Friday: 08:00am -09:00am</p>
            </div>
            <div className="images">
              <img src="./public/solo.jpg" alt="" />
            </div>
          </div>
        );
      } else if (active == "stretch") {
        return (
          <div className="chosed stretch">
            <div className="chosed-info">
              <h2>Why are you Strech</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                dicta? Sint esse molestiae distinctio consectetur labore veritatis
                impedit numquam aut alias nostrum quisquam facere pariatur, sapiente
                dignissimos reiciendis.
              </p>
              <h2>When comes Strecth Your Time</h2>
              <p>Saturday - Sunday: 08:00am -09:00am</p>
              <p>Monday - Tuesday: 08:00am -09:00am</p>
              <p>Wednesday - Friday: 08:00am -09:00am</p>
            </div>
            <div className="images">
              <img src="./public/stret.webp" alt="" />
            </div>
          </div>
        );
      }

  
  
}

export default Chosed;

/*

*/
