import Background1 from '../../assets/images/ExcitingBg.png'
import title1 from '../../assets/images/Title3.png'
import topleft1 from '../../assets/images/Prom Night.png'
import topright1 from '../../assets/images/Silent Disco.png'
import bottomright1 from '../../assets/images/Jamming Night.png'
import bottomleft1 from '../../assets/images/Stage Spectrum.png'
import Texttopleft1 from '../../assets/images/TopLeft.png'
import Texttopright1 from '../../assets/images/TopRightText.png'
import Textbottomleft1 from '../../assets/images/BottomLeftt.png'
import Textbottomright1 from '../../assets/images/BottomRightt.png'
import Subbottomright1 from '../../assets/images/Excitingsubdivbottomright.png'
import Subbottomleft1 from '../../assets/images/Exitingsubdivbottom.png'
import Subtopleft1 from '../../assets/images/Existing_subtext.png'
import Subtopright1 from '../../assets/images/Excitingsubtextdivtopright.png'

import Background from '../../assets/images/iPhone 14 & 15 Pro - 11.png'
import title from '../../assets/images/Name-3.png'
import topleft from '../../assets/images/Prom Night-2.png'
import topright from '../../assets/images/Silent Disco-2.png'
import bottomright from '../../assets/images/Image Box.png'
import bottomleft from '../../assets/images/Stage Spectrum-2.png'
import Texttopleft from '../../assets/images/Event Name-4.png'
import Texttopright from '../../assets/images/Text-2.png'
import Textbottomleft from '../../assets/images/Text-3.png'
import Textbottomright from '../../assets/images/Text-4.png'
import Subbottomright from '../../assets/images/Subtext-12.png'
import Subbottomleft from '../../assets/images/Subtext-11.png'
import Subtopleft from '../../assets/images/Subtext-9.png'
import Subtopright from '../../assets/images/Subtext-10.png'

function Exciting(){
    return(
<>
       <div className='md:block hidden'>
        <div className="min-h-screen bg-cover bg-center flex flex-col items-center"
        style={{
          backgroundImage: `url(${Background1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%", 
          aspectRatio: "1280/1706", 
          position: "relative", 
        }}>
            <div style={{
                            position: "absolute",
                            width: "62.89%", 
                            aspectRatio: "805/140",
                            left: "18.63%", 
                            top:'4.42%',
                            backgroundImage: `url(${title1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}/> 

                     {/*TOP LEFT*/}
              <div  style={{
                        position: "absolute",
                        width: "49.93%", 
                        aspectRatio: "632/354",
                        top:'17.69%' ,
                        left:'1.39%',
                        backgroundImage: `url(${topleft1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'1'
                }}>
                    <div
                     style={{
                        
                            position: "absolute",
                            width: "25.43%", 
                            aspectRatio: "161 /54.75",
                            left: "2.60%", 
                            top:'64.52%',
                            backgroundImage: `url(${Texttopleft1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                /> 
                {/* SubTitle */}
                <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "64.69%", 
                        aspectRatio: "421/58",
                        left: "4.58%",
                        top:'77.5%' ,
                        backgroundImage: `url(${Subtopleft1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb 1280:text-[0.78rem] lg:text-[0.60rem] md:text-[0.45rem] 1400:text-[0.85rem] 1500:text-[0.91rem] 1600:text-[0.98rem] 1980:text-[1.2rem] 2100:text-[1.3rem] text-start ">Dress to impress and dance the night away, as you<br/> sway to music with your special someone at our <br/>official Prom Night! </p>
            </div>
       </div>

                  {/*TOP RIGHT*/}
              <div  style={{
                        position: "absolute",
                        width: "42.26%", 
                        aspectRatio: "541/353",
                        top:'17.69%' ,
                        left:'54.69%',
                        backgroundImage: `url(${topright1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'1'
                }}>
                    <div
                     style={{
                        
                            position: "absolute",
                            width: "37.43%", 
                            aspectRatio: "203 /55.19",
                            left: "59.60%", 
                            top:'68.52%',
                            backgroundImage: `url(${Texttopright1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                /> 
                {/* SubTitle */}
                <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "82.43%", 
                        aspectRatio: "446/44",
                        left: "10.58%",
                        top:'81.5%' ,
                        backgroundImage: `url(${Subtopright1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb 1280:text-[0.78rem] lg:text-[0.60rem] md:text-[0.45rem] 1400:text-[0.85rem] 1500:text-[0.91rem] 1600:text-[0.98rem] 1980:text-[1.2rem] 2100:text-[1.3rem] text-start ">Let the beats flow directly into your years and vibe to<br/> the otherworldly experience of a silent disco! </p>
            </div>
       </div>
                  {/*BOTTOM LEFT*/}
              <div  style={{
                        position: "absolute",
                        width: "43.9%", 
                        aspectRatio: "562/354",
                        top:'40.49%' ,
                        left:'3.39%',
                        backgroundImage: `url(${bottomleft1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'1'
                }}>
                    <div
                     style={{
                        
                            position: "absolute",
                            width: "41.10%", 
                            aspectRatio: "231 /54.75",
                            left: "3.03%", 
                            top:'66.82%',
                            backgroundImage: `url(${Textbottomleft1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                /> 
                {/* SubTitle */}
                <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "67.69%", 
                        aspectRatio: "381/49",
                        left: "5.85%",
                        top:'79.5%' ,
                        backgroundImage: `url(${Subbottomleft1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb 1280:text-[0.78rem] lg:text-[0.8rem] md:text-[0.56rem] 1400:text-[0.85rem] 1500:text-[1rem] 1600:text-[1.2rem] 1980:text-[1.3rem] 2100:text-[1.3rem] text-start ">A Kaleidoscope of Infinite Possibilities Show<br/> the world what you can do at our open mic! </p>
            </div>
       </div>

                   {/*BOTTOM  RIGHT*/}
              <div  style={{
                        position: "absolute",
                        width: "47.26%", 
                        aspectRatio: "612/354",
                        top:'40.69%' ,
                        left:'49.69%',
                        backgroundImage: `url(${topright1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'1'
                }}>
                    <div
                     style={{
                        
                            position: "absolute",
                            width: "37.43%", 
                            aspectRatio: "203 /55.19",
                            left: "59.60%", 
                            top:'68.52%',
                            backgroundImage: `url(${Texttopright1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                /> 
                {/* SubTitle */}
                <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "73.43%", 
                        aspectRatio: "451/60",
                        left: "20.58%",
                        top:'81.98%' ,
                        backgroundImage: `url(${Subtopright1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb 1280:text-[0.78rem] lg:text-[0.60rem] md:text-[0.45rem] 1400:text-[0.85rem] 1500:text-[0.91rem] 1600:text-[0.98rem] 1980:text-[1.2rem] 2100:text-[1.3rem] text-start ">A night of music and camaradderie! Join us, as we<br/> gather around a campfire with the people we adore, and<br/> the music we love. A night to never be forgotten! </p>
            </div>
       </div>
        </div>
        </div>

        <div className='md:hidden block'>
              <div className="min-h-screen bg-cover bg-center flex flex-col items-center"
              style={{
                     backgroundImage: `url(${Background})`,
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     width: "100%", 
                     aspectRatio: "393/1574", 
                     position: "relative", 
        }}>

                     <div style={{
                            position: "absolute",
                            width: "81.89%", 
                            aspectRatio: "361/69",
                            left: "10.5%", 
                            top:'4.42%',
                            backgroundImage: `url(${title})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}/> 

                      {/*FIRST*/}
        <div className=" " style={{
            position: "absolute",
            backgroundImage:`url(${topleft})`,
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
                            backgroundImage: `url(${Texttopleft})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div> 
                    
                    <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "91.8%", 
                        aspectRatio: "329/39",
                        left: "3.53%",
                        top:'78.5%' ,
                        backgroundImage: `url(${Subtopleft})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb md:text-[0.8rem] sm:text-[0.87rem] xs:text-[.73rem] xxs:text-[0.6rem] xxxs:text-[0.4rem] 270:text-[0.35rem] text-start ">Dress to impress and dance the night away, as you<br/> sway to music with your special someone at our <br/>official Prom Night!  </p>
            </div>
        </div>
                 {/*SECOND*/}
        <div className=" " style={{
            position: "absolute",
            backgroundImage:`url(${topright})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width:'93.45%',
            aspectRatio:'358.07/204.46',
            top:'23.6%'
        }} >
            {/* Title  */}
            <div
                     style={{
                        
                            position: "absolute",
                            width: "40.43%", 
                            aspectRatio: "146/33.52", 
                            top:'64.12%',
                            left:'2%',
                            backgroundImage: `url(${Texttopright})`,
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
                        backgroundImage: `url(${Subtopright})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb md:text-[0.8rem] sm:text-[0.78rem] xs:text-[.73rem] xxs:text-[0.6rem] xxxs:text-[0.4rem] 270:text-[0.35rem] text-start ">Let the beats flow directly into your years and vibe to<br/> the otherworldly experience of a silent disco! </p>
            </div>
        </div>

                     {/*THIRD*/}
        <div className=" " style={{
            position: "absolute",
            backgroundImage:`url(${bottomleft})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width:'93.45%',
            aspectRatio:'358.07/204.46',
            top:'38.6%'
        }} >
            {/* Title  */}
            <div
                     style={{
                        
                            position: "absolute",
                            width: "47.43%", 
                            aspectRatio: "170/33.52", 
                            top:'64.12%',
                            left:'2%',
                            backgroundImage: `url(${Textbottomleft})`,
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
                        backgroundImage: `url(${Subbottomleft})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb md:text-[0.8rem] sm:text-[0.78rem] xs:text-[.73rem] xxs:text-[0.6rem] xxxs:text-[0.4rem] 270:text-[0.35rem] text-start ">A Kaleidoscope of Infinite Possibilities Show<br/> the world what you can do at our open mic! </p>
            </div>
        </div>

                 {/*FOURTH*/}
        <div className=" " style={{
            position: "absolute",
            backgroundImage:`url(${bottomright})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width:'93.45%',
            aspectRatio:'358.07/204.46',
            top:'53.6%'
        }} >
            {/* Title  */}
            <div
                     style={{
                        
                            position: "absolute",
                            width: "42.73%", 
                            aspectRatio: "153/33.52", 
                            top:'58.12%',
                            left:'2%',
                            backgroundImage: `url(${Textbottomright})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            zIndex:'1'
        
                     }}
                    >  </div> 
                    
                    <div className="px-4" style={{
                        
                        position: "absolute",
                        width: "87.39%", 
                        aspectRatio: "314/53",
                        left: "3.53%",
                        top:'72.5%' ,
                        backgroundImage: `url(${Subbottomright})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex:'2',
                        overflow:'hidden',
                       
    
                 }}>
                    <p className="font-rfabb md:text-[0.9rem] sm:text-[0.9rem] xs:text-[.83rem] xxs:text-[0.68rem] xxxs:text-[0.48rem] 270:text-[0.4rem] text-start ">A night of music and camaradderie! Join us, as we<br/> gather around a campfire with the people we adore, and<br/> the music we love. A night to never be forgotten! </p>
            </div>
        </div>



              </div>


        </div>
        </>
    )
}

export default Exciting;