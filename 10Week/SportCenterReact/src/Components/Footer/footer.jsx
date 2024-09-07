import React from 'react'
import Logo from './logo';
import Text from './text';
import Foot from './foot'
import "./footstyle.css"


function Footer() {
  return (
    <footer>
        <div className='container' id="footer">
        <Logo />
        <Text />
        <Foot />
        </div>
    </footer>
  )
}

export default Footer;