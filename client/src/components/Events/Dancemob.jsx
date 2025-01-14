//this mobile responsiveness is incomplete it will be changed
import Background1 from "../../assets/images/iPhone 14 & 15 Pro - 2.png";
import Title2 from '../../assets/images/Name.png'
import subtitle2 from '../../assets/images/Cash Prize.png'
import Topleft1 from '../../assets/images/TopLeftimg.png'
import Topright1 from '../../assets/images/Mobdancediv.png'
import MiddleLeft1 from '../../assets/images/TopRightimg.png'
import MiddleRight1 from '../../assets/images/Pump It Up.png'
import BottomLeft1 from '../../assets/images/MiddleLeftimg.png'
import BottomRight1 from '../../assets/images/BottomRightimg.png'
import Topleftdiv1 from '../../assets/images/Subtext-19.png'
import TopRightdiv1 from '../../assets/images/Subtext-20.png'
import Middleleftdiv1 from '../../assets/images/Subtext-21.png'
import Middlerightdiv1 from '../../assets/images/Cash Prize-2.png'
import Bottomleftdiv1 from '../../assets/images/Subtext-22.png'
import BottomRightdiv1 from '../../assets/images/Subtext-23.png'
import PumpItUp1 from '../../assets/images/Text-7.png'
import Letstangle1 from '../../assets/images/Event Name-2.png'
import mudra1 from '../../assets/images/Event Name-6.png'
import Streetdance1 from '../../assets/images/Event Name.png'
import TalNarang1 from '../../assets/images/Event Name-3.png'
import Razzmataaz1 from '../../assets/images/Event Name-5.png'


function Page1() {
    return (
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center"
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%", 
          aspectRatio: "393/ 1617", 
          position: "relative", 
        }}
      >
         {/* Title */}
         <div
                     style={{
                        
                            position: "absolute",
                            width: "77.71%", 
                            aspectRatio: "305/ 68.68",
                            left: "11.23%", 
                            top:'2.35%',
                            backgroundImage: `url(${Title2})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    > 
            </div>  
            {/* SubTitle */}
                       
                        <div  style={{
                        
                        position: "absolute",
                        width: "69.73%", 
                        aspectRatio: "261.98 /25",
                        left: "13.53%",
                        top:'5.71%' ,
                        backgroundImage: `url(${subtitle2})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2'
    
                 }}>
                    <p className="font-rfabb text-[1.5rem] sm:text-[1.4rem] xs:text-[1.0rem] xxs:text-[0.85rem] xxxs:text-[0.65rem] 270:text-[0.50rem] text-center overflow-hidden"> 1 lakh cash prize + 1.5 lakh worth prizes</p>
                    </div>
                
                 

        {/*FIRST*/}
        <div className=" " style={{
            position: "absolute",
            backgroundImage:`url(${Topleft1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width:'93.45%',
            aspectRatio:'358.07/204.46',
            top:'9%'
        }} >
            {/* Title  */}
            <div
                     style={{
                        
                            position: "absolute",
                            width: "40.43%", 
                            aspectRatio: "146/33.52", 
                            top:'64.12%',
                            left:'2%',
                            backgroundImage: `url(${Streetdance1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div> 
                    
                    <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "91.39%", 
                        aspectRatio: "329/27",
                        left: "3.53%",
                        top:'79.5%' ,
                        backgroundImage: `url(${Topleftdiv1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb md:text-[0.8rem] sm:text-[0.78rem] xs:text-[.73rem] xxs:text-[0.6rem] xxxs:text-[0.4rem] 270:text-[0.35rem] text-start ">Let the streets bear witness to electrifying<br></br> performances and exhilarating beats. Let your spirits<br></br> soar with street dance! </p>
            </div>
        </div>

        {/*SECOND*/}
        <div className=" " style={{
            position: "absolute",
            backgroundImage:`url(${Topright1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width:'93.45%',
            aspectRatio:'358.07/204.46',
            top:'23.2%'
        }} >
            {/* Title  */}
            <div
                     style={{
                        
                            position: "absolute",
                            width: "40.43%", 
                            aspectRatio: "146/33.52", 
                            top:'64.12%',
                            left:'2%',
                            backgroundImage: `url(${Letstangle1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div> 
                    
                    <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "91.39%", 
                        aspectRatio: "329/39",
                        left: "3.53%",
                        top:'77.5%' ,
                        backgroundImage: `url(${TopRightdiv1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb md:text-[0.8rem] sm:text-[0.78rem] xs:text-[.73rem] xxs:text-[0.6rem] xxxs:text-[0.4rem] 270:text-[0.35rem] text-start ">The classic Steve Harvey show! Come and be a witness<br/> to the recreation of one of the most popular reality<br/> shows of all time, at Family Feud: the game show!</p>
            </div>
        </div>


        {/*THIRD*/}
        <div className=" " style={{
            position: "absolute",
            backgroundImage:`url(${MiddleLeft1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width:'93.45%',
            aspectRatio:'358.07/204.46',
            top:'37.4%'
        }} >
            {/* Title  */}
            <div
                     style={{
                        
                            position: "absolute",
                            width: "40.43%", 
                            aspectRatio: "146/33.52", 
                            top:'64.12%',
                            left:'2%',
                            backgroundImage: `url(${TalNarang1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div> 
                    
                    <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "91.39%", 
                        aspectRatio: "329/39",
                        left: "3.53%",
                        top:'77.5%' ,
                        backgroundImage: `url(${Middleleftdiv1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb md:text-[0.8rem] sm:text-[0.78rem] xs:text-[.73rem] xxs:text-[0.6rem] xxxs:text-[0.4rem] 270:text-[0.35rem] text-start ">Duet with a partner as your symphonies collide against<br></br> each other in this competition of melodies.</p>
            </div>
        </div>

        {/*FOURTH*/}
        <div className=" " style={{
            position: "absolute",
            backgroundImage:`url(${MiddleRight1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width:'93.45%',
            aspectRatio:'358.07/204.46',
            top:'51.8%'
        }} >
            {/* Title  */}
            <div
                     style={{
                        
                            position: "absolute",
                            width: "40.43%", 
                            aspectRatio: "146/33.56", 
                            top:'64.12%',
                            left:'2%',
                            backgroundImage: `url(${PumpItUp1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div> 
                    
                    <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "81.39%", 
                        aspectRatio: "329/39",
                        left: "3.53%",
                        top:'77.5%' ,
                        backgroundImage: `url(${Middlerightdiv1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className=" font-rfabb md:text-[0.8rem] sm:text-[0.78rem] xs:text-[.73rem] xxs:text-[0.6rem] xxxs:text-[0.4rem] 270:text-[0.35rem] text-start ">Let the beats flow and your body move! Engage<br/> yourself in solo western performances where rhythm<br/> is everything.</p>
            </div>
        </div>


                 {/*FIFTH*/}
        <div className=" " style={{
            position: "absolute",
            backgroundImage:`url(${BottomLeft1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width:'93.45%',
            aspectRatio:'358.07/204.46',
            top:'66%'
        }} >
            {/* Title  */}
            <div
                     style={{
                        
                            position: "absolute",
                            width: "40.43%", 
                            aspectRatio: "146/33.56", 
                            top:'64.12%',
                            left:'2%',
                            backgroundImage: `url(${Razzmataaz1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div> 
                    
                    <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "91.39%", 
                        aspectRatio: "329/28",
                        left: "3.53%",
                        top:'76.5%' ,
                        backgroundImage: `url(${Bottomleftdiv1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb md:text-[0.8rem] sm:text-[0.78rem] xs:text-[.73rem] xxs:text-[0.6rem] xxxs:text-[0.4rem] 270:text-[0.35rem] text-start ">Set the stage on fire as you unleash the rhythm and<br/> showcase your choreography in this dance battle.</p>
            </div>
        </div>


                 {/*SIXTH*/}
                 <div className=" " style={{
            position: "absolute",
            backgroundImage:`url(${BottomRight1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width:'93.45%',
            aspectRatio:'358.07/204.46',
            top:'80.24%'
        }} >
            {/* Title  */}
            <div
                     style={{
                        
                            position: "absolute",
                            width: "40.43%", 
                            aspectRatio: "105/33.53", 
                            top:'50.12%',
                            left:'2%',
                            backgroundImage: `url(${mudra1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div> 
                    
                    <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "91.39%", 
                        aspectRatio: "329/39",
                        left: "3.53%",
                        top:'69.5%' ,
                        backgroundImage: `url(${BottomRightdiv1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb md:text-[0.8rem] sm:text-[0.78rem] xs:text-[.73rem] xxs:text-[0.6rem] xxxs:text-[0.4rem] 270:text-[0.35rem] text-start ">Explore the allure of the classical arts! Let light <br/>descend onto the stage as you enamor yourself in<br/> elegant styles and witness the roots of dance itself!</p>
            </div>
        </div>

            </div>
    )}


    export default Page1;