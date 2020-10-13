import React from 'react';

import {Link} from 'react-router-dom'

import {FiArrowRight} from 'react-icons/fi';
import logoImg from  '../images/Logo.svg';

import '../styles/pages/landing.css';


function Landing() {
  return (
    <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="Happy"/>

      <main>
        <h1>Bring happiness to the world</h1>
        <p>
        Visit orphanages and change the day
        of many children.
        </p>
      </main>

      <div className="location">
        <strong>Chapeco</strong>
        <span>Santa Catarina</span>
      </div>

      <Link to="/app" className="enter-app"> 
        <FiArrowRight size={26} color="rgba(0,0,0, 0.6" />
      </Link>
    </div>
  </div>
  );
}

export default Landing;