import React from "react";
import './accomadation.css';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Accomadation = () => {

    const navigate = useNavigate();
    // const acccommenu = () => {
    //     navigate("/homepage"); 
    // }
    // const accomlog = () => {
    //     navigate("/login"); 
    // }
    const redirect22 = () => {
        navigate("/homepage");  
    }
    const redirect23 = () => {
        navigate("/places");  
    }
    const redirect24 = () => {
        navigate("/food");  
    }
    const redirect25 = () => {
        navigate("/accomadation");  
    }
    // const grandpark = () => {
    //     navigate("/grandparkcity");  
    // }

    return(
        <div className="accoma">
            <div class="top11111">
                <div class="right-menu">
                <div class="icon11111"><MenuIcon/>
                
                <div class="box999">
                
                <ul id="menu">

                    <li onClick={redirect22}><p>Home</p></li>
                    <li onClick={redirect23}><p>Places</p></li>
                    <li onClick={redirect24}><p>Food</p></li>
                    <li onClick={redirect25}><p>Accommodation</p></li>
                </ul>
                </div>
                </div>
                </div>
                <h1 class='hhhhhh'>triPlanner</h1>
            <div className='gapgap'></div>
            {/* <div onClick={accomlog} class="hel">
            <h4 class="looo">Login</h4>
            <div class="icon22222" ><AccountCircleIcon/></div></div> */}
            </div>
<div class="page77">
<div class="first7">
    <div class="con1">
      <div> <img src="image\grandparkcitystay.jpg" alt="IndianFood" className='foodpic11'/></div>
      <div class="lett699"></div>
      <button class="card-button" ><a href="https://www.parkhotelgroup.com/grand-park-city-hall" target="_blank" rel="noopener noreferrer">More info</a></button>
      <p className="accompic1234">Grandparkcitystay</p>
    </div>
    <div class="con2">

    <img src="image\holiday inn address singapore.jpg" alt="" className='foodpic22'/>
    <div class="lett799"><p></p></div>
      <button class="card-button"><a href="https://www.ihg.com/holidayinn/hotels/us/en/reservation" target="_blank" rel="noopener noreferrer">More info</a></button>
      <p className="accompic1234">Holiday inn</p>
    </div>
    <div class="con3">

    <img src="image\Grand Copthorne Waterfront.webp" alt="" className='foodpic33'/>
    <div class="lett899"><p></p></div>
      <button class="card-button"><a href="https://www.millenniumhotels.com/en/singapore/grand-copthorne-waterfront/" target="_blank" rel="noopener noreferrer">More info</a></button>
      <p className="accompic1234">Grand Copthorne Waterfront</p>
    </div>
</div>
<div class="first77">
    <div class="con4">
    <img src="image\marinabay.avif" alt="ChineseFood" className='foodpic44'/>
    <div class="lett199">
      <button class="card-button"><a href="https://www.marinabaysands.com/" target="_blank" rel="noopener noreferrer">More info</a></button>
      <p className="accompic1234">Marinabaysands</p>
    </div>
    </div>
    <div class="con5">

    <img src="image\singaporetown.jpg" alt="ChineseFood" className='foodpic55'/>
    <div class="lett299"><p></p></div>
      <button class="card-button"><a href="https://www.stsignature.com/st-signature-chinatown" target="_blank" rel="noopener noreferrer">More info</a></button>
      <p className="accompic1234">ST Signature Chinatown</p>
    </div>
    <div class="con6">

    <img src="image\FuramaRiverFront.jfif" alt="ChineseFood" className='foodpic66'/>
    <div class="lett399"><p></p></div>
      <button class="card-button"><a href="https://www.furama.com/riverfront" target="_blank" rel="noopener noreferrer">More info</a></button>
      <p className="accompic1234">Furama River Front</p>
    </div>
</div>
</div>
</div>
    )
}
export default Accomadation;