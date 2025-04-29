import React from 'react';
import './food.css';
// import Rating from '@mui/material/Rating';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

const Food = () => {

  const navigate = useNavigate();
    // const foodmenu = () => {
    //     navigate("/homepage"); 
    // }
    // const log = () => {
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

     return (
        <div className='foodhead'>
            <div class="top111">
                <div class="right-menu">
                <div class="icon111" ><MenuIcon/>
               
                <div class="box999">
                <div className='drop-menu'>
                <ul id="menu">

                    <li onClick={redirect22}><p>Home</p></li>
                    <li onClick={redirect23}><p>Places</p></li>
                    <li onClick={redirect24}><p>Food</p></li>
                    <li onClick={redirect25}><p>Accomadation</p></li>
                </ul>
                </div>
                
                </div>
                </div>
                </div>
                <h1 class='hhhh'>triPlanner</h1>
                <div className='gappa'></div>
            {/* <div onClick={log} class="hel">
            <h4 class="lo">Login</h4>
            <div class="icon222" ><AccountCircleIcon/></div>
            </div> */}
            </div>
          <div class="page99">

            <div class="first9">
                <div class="cont1">
                  <div> <img src="image\indianfoodimage.jpg" alt="IndianFood" className='foodpic1'/></div>
                  <p class="hotelstyle">IndianFood</p>
                  <div class="lett69"><ul>
                    <p>Hotel Names</p>
                    <li><a href="https://www.royaltaj.sg" target="_blank" rel="noopener noreferrer">Royal Taj</a></li>
                    <li><a href="https://tiffinroom.com.sg/" target="_blank" rel="noopener noreferrer">Tiffen Room</a></li>
                    <li><a href="https://www.facebook.com/thespiceadda/" target="_blank" rel="noopener noreferrer">Adda</a></li>
                    <li><a href="https://www.anandabhavan.com/" target="_blank" rel="noopener noreferrer">Anandabhavan</a></li>
                    <li><a href="https://shikar.sg/" target="_blank" rel="noopener noreferrer">Shikar</a></li>
                  </ul></div>
                  {/* <Rating name="half-rating" defaultValue={4.5} precision={6.5} /> */}
                </div>
                <div class="cont2">

                <img src="image\chinesefood.jpeg" alt="ChineseFood" className='foodpic2'/>
                <p class="hotelstyle">ChineseFood</p>
                <div class="lett79"><ul>
                <p>Hotel Names</p>
                    <li><a href="https://www.yan.com.sg/" target="_blank" rel="noopener noreferrer">Yan</a></li>
                    <li><a href="https://yellowpot.sg/" target="_blank" rel="noopener noreferrer">Yellow Pot</a></li>
                    <li><a href="https://www.madamefan.sg/" target="_blank" rel="noopener noreferrer">Madame fan</a></li>
                    <li><a href="https://www.yi-restaurant.com.sg/" target="_blank" rel="noopener noreferrer">Yi by Jereme leung</a></li>
                    <li><a href="https://www.thedragonchamber.com/" target="_blank" rel="noopener noreferrer">The Dragon Chamber</a></li>
                  </ul></div>
                </div>
            </div>
            <div class="first99">
                <div class="cont3">
                <img src="image\europianfoods.jpg" alt="Europianfoods" className='foodpic3'/>
                <p class="hotelstyle">Europianfoods</p>
                <div class="lett89">
                  <ul>
                  <p>Hotel Names</p>
                    <li><a href="https://wursthans.sg/" target="_blank" rel="noopener noreferrer">WURSTHANS Switzerland</a></li>
                    <li><a href="https://www.facebook.com/armenor.sg/" target="_blank" rel="noopener noreferrer">Armenor</a></li>
                    <li><a href="https://www.eatcetera.sg/" target="_blank" rel="noopener noreferrer">EAT cetera</a></li>
                 
                  </ul>
                </div>
                </div>
                <div class="cont4">

                <img src="image\multicusine.webp" alt="MulticusineFood" className='foodpic4'/>
                <p class="hotelstyle">MulticusineFood</p>
                <div class="lett99"><ul>
                <p>Hotel Names</p>
                    <li><a href="https://www.hilton.com/en/hotels/sinodci-conrad-singapore-orchard/" target="_blank" rel="noopener noreferrer">Regent Singapore</a></li>
                    <li><a href="https://www.ihg.com/hotelindigo/hotels/us/en/singapore/sinki/hoteldetail" target="_blank" rel="noopener noreferrer">Hotel Indico</a></li>
                    <li><a href="https://www.ihg.com/intercontinental/hotels/us/en/singapore/sinhb/hoteldetail" target="_blank" rel="noopener noreferrer">Inter Continental Singapore</a></li>
                    
                  </ul></div>
                </div>
            </div>
          </div>
        </div>


     )
}
export default Food;









