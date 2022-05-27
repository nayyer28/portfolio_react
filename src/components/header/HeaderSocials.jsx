import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="linkedin.com/in/saahil-nayyer" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/nayyer28" target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials