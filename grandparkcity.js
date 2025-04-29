import React from "react";
import './grandparkcity.css';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Grandparkcity = () => {

    const navigate = useNavigate();
  
    const accomlog = () => {
        navigate("/login"); 
    }
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

    return(
    <div className="accoma23">
            <div class="top11111234">
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
                <div className="gap"></div>
            <div onClick={accomlog}>
            <h4 class="lo00">Login</h4>
            <div class="ico000" ><AccountCircleIcon/></div>
            </div>
        </div>



            <div className="oooppp">
                <div className="bedroomimg"></div>
            </div>

            <div className="contentofh">
                    
                <div className="dateInput">
                    <label for="date" className="syd">Select Your Date:</label><br/>
                    <input type="date" id="birthday" name="birthday"/>
                </div>

                <div className="data-input">
                <label for="date" className="syd">Gender:</label><br/>
                <div className="gen-der">
                <div className="m--ale"><input id="m-ale" type="radio" name="gender" value="male"/>Male</div>
                <div className="fm--ale"><input id="fm-ale" type="radio" name="gender" value="fmale"/>Female</div>
                </div>
                </div>
            </div>
    </div>
)
}
export default Grandparkcity
