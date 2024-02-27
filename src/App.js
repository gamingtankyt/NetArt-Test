import React from 'react';
import { Helmet } from 'react-helmet';
import logo from './asserts/logo.png';
import troph from './asserts/1.png';
import people from './asserts/2.png';
import tools from './asserts/3.png';

import './font-awesome/css/font-awesome.min.css'
import './App.css'
const App = () => {
  return (
    <div className='app' style={{ 
      background: "linear-gradient(to bottom, white, #fff8aa )", paddingBottom:"0.1vh" }}>
      <helmet><meta name="viewport" content="width=device-width, initial-scale=1.0" /></helmet>
        <div className="app-header">
        <img src={logo} alt='logo'/>
        </div>
        <div className='text1'>
        <img className='trophy-image' src={troph} />
          <p className='national'>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
          <ul className='list'>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <img className='people-img' src={people} alt='people'/>
          <span className='awarded-line'>Government of India has awarded the 
          <b> "National Energy Conservation Award 2018"</b> . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</span>
          </p>
        </div>
        <p class='mid-line'>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        <img className='tool' src={tools}/>
        <p className='items'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        <hr className='line' />
        <p className='text2'>
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p className='services'>
          <span>CHEMICALS & PROCESS</span><span>POWER WATER & WASTE WATER</span>
          <span>OILS & GAS PHARMA</span><span>SUGARS & DISTILLERIES</span>
          <span>PAPER & PULP</span><span>MARINE & DEFENCE</span>
          <span>METAL & MINING</span><span>FOOD & BEVERAGE</span>
          <span>PETROCHEMICAL & REFINERIES</span><span>SOLAR</span>
          <span>BUILDING</span><span>HVAC</span>
          <span>FIRE FIGHTING</span><span>AGRICULTURE & RESIDENTIAL</span>
        </p>
        <div className='socials'>
          <i class="fa fa-phone-square" aria-hidden="true"><span> Toll Free <b>1800 200 1234</b></span></i>
          <i class="fa fa-facebook" aria-hidden='true'><span>www.facebook.com/cripumps</span></i>
          <i class="fa fa-globe" aria-hidden="true"><span>www.crigroups.com</span></i>
        </div>
    </div> 
  )
}

export default App;