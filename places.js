import React from 'react';
import './places.css'
import MenuIcon from '@mui/icons-material/Menu';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import vedio1 from "./vedio/SentosaIsland.mp4";
import vedio2 from "./vedio/singaporetownvedio.mp4";
import vedio3 from "./vedio/JewelchanjiAirportvedio.mp4";
import vedio4 from "./vedio/SEA.Aquariumvedio.mp4";
import vedio5 from "./vedio/Marinabaysvedio.mp4";
import vedio6 from "./vedio/Merlionparkvedio.mp4";
const Place = () => {


    const navigate = useNavigate();
    // const redirect = () => {
    //     navigate("/homepage"); 
    // }

   
    // const redirect1 = () => {
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

    return (
        <div className='place1233'>
             <div class="top11">
             
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
                <h1 className='hhhfff'>triPlanner</h1>
                <div className='gappla'></div>
                {/* <div onClick={redirect1} class="hel">
            
                <h4 class="log">Login</h4>
                <div class="icon22" ><AccountCircleIcon/></div>
                </div>  */}
            </div>
            <div class="img99">
            <div class="first1">
                <div class="contain1">
                    <video src={vedio1} autoPlay loop muted  className='img111'/>
                    <p class="text456">Sentosa Island</p>
                    <div class="contentbox1">
                    <p class="text" >Sentosa Island, known mononymously as Sentosa, and formerly Pulau Belakang Mati, is an island located off the southern coast of Singapore's main island. The island is separated from the main island of Singapore by a channel of water, the Keppel Harbour, and is adjacent to Pulau Brani, a smaller island wedged between Sentosa and the main island.
Formerly used as a British military base and afterwards as a Japanese prisoner-of-war camp, the island was renamed Sentosa and was planned to be a popular tourist destination. It is now home to a popular resort that receives more than twenty million visitors per year.</p>
                     </div>

                </div>
                <div class="contain2">
                <video src={vedio2} autoPlay loop muted className='img222'/>
                <p class="text456">Chinatown</p>
                <div class="contentbox2">
                    <p class="text">Chinatown's maze of narrow roads includes Chinatown Food Street, with its restaurants serving traditional fare like Hainanese chicken rice, noodles and satay. Souvenir shops and indie boutiques dot the area, offering clothes, crafts and antiques, while Club Street is full of trendy wine bars.
                    Chinatown  is a subzone and ethnic enclave located within the Outram district in the Central Area of Singapore. Featuring distinctly Chinese cultural elements, Chinatown has had a historically concentrated ethnic Chinese population.Chinatown is considerably less of an enclave than it once was.
                    <>ReadMore...</>
                    </p>
                     </div>
                </div>
                <div class="contain3">
                <video src={vedio3} autoPlay loop muted className='img333'/> 
                <p class="text456">Jewel Changi Airport</p>
                <div class="contentbox3">
                    <p class="text">Jewel Changi Airport is a nature-themed entertainment and retail complex surrounded by and linked to Changi Airport, Singapore, linked to one of its passenger terminals. Its centrepiece is the world's tallest indoor waterfall, the Rain Vortex, that is surrounded by a terraced forest setting.
                    Jewel includes gardens, attractions, a hotel, about 300 retail and dining outlets, as well as early baggage check-in aviation facilities. It covers a total gross floor area of 135,700 m2 (1,461,000 sq ft), spanning 10 storeys – five above-ground and five basement levels.</p>
                     </div>
                </div>
            </div>
            <div class="first2">
                <div class="contain4">
            
                <video src={vedio4} autoPlay loop muted className='img444'/> 
                <p class="text456">S.E.A. Aquarium</p>
                <div class="contentbox4">
                    <p class="text">The S.E.A. Aquarium (South East Asia Aquarium) was the world's largest aquarium by total water volume until overtaken by Chimelong Ocean Kingdom in Hengqin, China.It contains a total of 45,000,000 litres (9,900,000 imp gal; 12,000,000 US gal) of water for more than 100,000 marine animals of over 800 species. 
                     The centerpiece of the aquarium is the Open Ocean tank with more than 18,000,000 L (4,000,000 imp gal; 4,800,000 US gal) and 50,000 animals. Until 2014 when eclipsed by China's Chimelong Ocean Kingdom, it had the world's largest viewing panel, 36-metre (118 ft) wide and 8.3-metre (27 ft) tall, which is intended to give visitors the feeling of being on the ocean floor. </p>
                     </div>
                </div>
                <div class="contain5">

                <video src={vedio5} autoPlay loop muted className='img555'/> 
                <p class="text456">Marinabays</p>
                <div class="contentbox5">
                    <p class="text">Luxuriate in the ultimate lifestyle with unparalleled views and unforgettable experiences. Indulge in the best at Marina Bay Sands – home to the world’s largest Infinity Pool.
                    Marina Bay Sands was originally set to open in 2009, but its construction faced delays caused by escalating costs of material and labour shortages from the outset. The global financial crisis also pressured the owners, Las Vegas Sands, to delay its projects elsewhere to complete the integrated resort. Its owner decided to open the integrated resort in stages, and it was approved by the Singapore authorities. World-Class Dining. High-Speed Wi-Fi. Access to Infinity Pool</p>
                     </div>
                </div>
                <div class="contain6">
                <video src={vedio6} autoPlay loop muted className='img666'/>
                <p class="text456">Merlion Park</p> 
                <div class="contentbox6">
                    <p class="text">Merlion Park  is a famous Singapore landmark and a major tourist attraction, located at One Fullerton, Singapore, near the Central Business District (CBD). The Merlion is a mythical creature with a lion's head and the body of a fish that is widely used as a mascot and national personification of Singapore. Two Merlion statues are located at the park. 
                    The original Merlion structure measures 8.6 meters tall and spouts water from its mouth. It has subsequently been joined by a Merlion cub, which is located near the original statue and measures just 2 metres tall.</p>
                     </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Place;