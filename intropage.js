import React from 'react';
import { useNavigate } from "react-router-dom";
import vedio from "./vedio/Intropagevedio.mp4";
import './intropage.css'


const Intropage = () => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate("/homepage");  

    }
    const redirect1 = () => {
        navigate("/dummy");  

    }
  
    
    return (
        <div>
        <div className='hero'>
            <div class="overlay"></div>
            <video src={vedio} autoPlay loop muted/>
            <h1 className='intro'>triPlanner</h1>
            <h3 className='trip'>A Trip To Singapore</h3>
           <div className='viss'>
            <p  className='vis' onClick={redirect} >VisitSite.......</p>
            <p  className='visr' onClick={redirect1} >VisitSite.......</p>

           </div>
        </div>
        </div>
    );
}

export default Intropage;