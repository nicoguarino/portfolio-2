import React from "react"
import { FaLinkedin, FaGithubSquare, FaEnvelope  } from "react-icons/fa";
import "../../../src/index.css"


function Footer() {
    return (
        <menu className='footer'>
        <ul className="footer-content">
          <li>
            <a className='footer-a' href="mailto: nizoworld@gmail.com/" target="_blank"><FaEnvelope/></a>
          </li>

          <li>
            <a className='footer-a' href="https://www.linkedin.com/in/nico-guarino-40243754/" target="_blank"><FaLinkedin/></a>
          </li>

          <li>
            <a className='footer-a' href="https://github.com/nicoguarino" target="_blank"><FaGithubSquare/></a>
          </li>
        </ul>
      </menu>
    )
}

export default Footer;