import React from 'react';
import { useNavigate } from "react-router-dom";
import './homepage.css';
import MenuIcon from '@mui/icons-material/Menu';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImageSlider from "./ImageSlider";
/// import vedio from "./vedio/Homepagevedio.mp4";



const Homepage = () => {
   
    const navigate = useNavigate();
    // const redirect = () => {
    //     navigate("/login");  
    // }
    const redirect22 = () => {
        navigate("/");  
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



    const slides =[
        {url: "http://localhost:3000/image/Singaporeroadways.jpg", title: "Road"},
        {url: "http://localhost:3000/image/Singaporewaterways.webp", title: "Water"},
        {url: "http://localhost:3000/image/air.jfif", title: "Air"}
    ];

    const containerStyles = {
        width: "500px",
        height: "430px",
        margin:"0 auto",
        padding: " 0px 20px 0px 10px",
    };
    
    return (

    <div>

       

            <div className='iii'>
            <div class="top1">
                <div class="right-menu">
                <div class="icon1" ><MenuIcon />
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
                <div>

                <h1 className='hhh'>triPlanner</h1>
                </div>
                <div className='gappag'></div>
                {/* <div onClick={redirect} class="hel">
                <h4 class="logooin">Login</h4>
                <div class="icon2" ><AccountCircleIcon/></div>
                </div> */}
            </div>
    
           </div>
           <div className='home111'>
            <vedio src=""/>
            <div className='home12'>
                <p className='hometext'>

                <span className='singa'>
                    Singapore</span>, officially the Republic of Singapore, is a sovereign island country and city-state in maritime Southeast Asia. 
                    It lies about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, 
                    bordering the Strait of Malacca to the west, the Singapore Strait to the south, the South China Sea to the east, and the Straits of Johor to the north. 
                    The country's territory is composed of one main island, 63 satellite islands and islets, and one outlying islet; 
                    the combined area of these has increased by 25% since the country's independence as a result of extensive land reclamation projects. 
                    It has the third highest population density in the world. With a multicultural population and recognising the need to respect cultural identities of the major ethnic groups within the nation, 
                    Singapore has four official languages: English, Mandarin, Malay, and Tamil. English is the lingua franca and numerous public services are available only in English.
                    Multiracialism is enshrined in the constitution and continues to shape national policies in education, housing, and politics.
                    Singapore's history dates back at least a millennium, having been a maritime emporium known as Temasek and subsequently as a major constituent part of several successive thalassocratic empires.
                    Its contemporary era began in 1819 when Stamford Raffles established Singapore as an entrepôt trading post of the British Empire.
                </p>
            </div>
            <div className='home13'>
            <div>
                <h1 className="mapd">Maps</h1>
           <div style={containerStyles} className="maps12">
           <ImageSlider slides={slides}/>
            </div>
            </div>
            </div>
           </div> 
        </div> 
    );
}
export default Homepage;