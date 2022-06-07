import React from 'react'

import BarChart from './components/BarChart'
import Header from './Header/header';
import './App.css'
// import { FiArrowLeft } from "react-icons/fi";
// import { AiOutlineEllipsis } from "react-icons/ai";

const App = () => {
  return (
    <div className="App">
      {/* <FiArrowLeft className='FiArrowLeft' size={30} /> 
      <AiOutlineEllipsis className='AiOutlineEllipsis' size={30} /> */}
        <div className='Scroll'>
          <Header bankName="HDFC" bankNumber="#######6734" rupees="₹77,630"/>
        </div>
        <hr className='solid'></hr>
        <div className='spending'>
            <p>Spending/Income</p>
            <p>₹14502/₹24999</p>
        </div>
        <div id='progressbar'>
            <div></div>
        </div>
        <hr className='solid'></hr>
      <BarChart />
    </div>
  )
}

export default App
