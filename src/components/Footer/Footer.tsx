import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
const Footer: React.FC=()  => {
  return (
    <div className='footer'>
<div className='footer-icons'>
<BsYoutube/>
<BsTwitter/>
<BsFacebook/>
<BsInstagram/>
</div>
<div className='footer-paragraphs'>
@Playcine Media Direct.All rights reserved
</div>
<div className='footer-options'>
    <p>privacy</p>
    <p>Help</p>
    <p>Term</p>
    <p>Devices</p>
</div>
<div className='footer-options'>
    <p>Media Centres</p>
    <p>Gift-cards</p>
    <p>Legacy-Notices</p>
    <p>Account</p>
</div>

</div>


  )

}
export default Footer;