import React from 'react'

function SectionEl4() {
  return (
    <div className="white">
      <div className="trainers container" id="contactus">
        <h2>CONTACT US</h2>
        <hr />
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod eaque
          dicta sapiente <br />
          minus dignissimos repellendus.
        </p>

        <div className="contact">
          <div className="inputs">
            <div className="contact-info">
              <div>
                <p>Mobile Number</p>
                <p>+135 773 321 44 42</p>
              </div>
              <div>
                <p>Email Adress</p>
                <p>demo@demo.com</p>
              </div>
            </div>
            <form className="contact-inputs">
              <h3>Make an Appoinment</h3>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            </form>
          </div>
          <div className="maps">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionEl4