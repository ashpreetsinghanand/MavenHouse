import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
//import {BsFillPlusCircleFill} from 'react-icons/bs'
import {AiFillMinusCircle,AiFillPlusCircle} from "react-icons/ai";

function EventSummary() {
    // // let bg, title, profile,eventName,eventDate,eventDescription,eid;//eventid
    // eventName = "DRAKE: IT'S ALL A BLUR TOUR"
    // eventDate = "OCTOBER 6TH, 2023 6:30 AM IST"
    // eventDescription = "Drake heads out on the It's all A Blur Tour in July 2023. Drake's first North America arena tour in five years will kick off in Chicaho, illnais, and cover much of North America"
    const { id } = useParams();

let bg, title, profile,eventName,eventDate,eventDescription,eid, TicketZoom,bgColor;
    
// paste
const setBg = () => {
    
    if (Number(id) === 98) {
      eid = "eventSummary/98"
      profile = "/images/death21/kendricklamar.png";
      bg ="/images/death21/kendricklamar.png"; 
      title = <h1 className="text-4xl tablet:text-[90px] md:text-[100px] font-[400] text-center font-modern">KENDRICK&nbsp;LAMAR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; KENDRICK&nbsp;LAMAR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KENDRICK&nbsp;LAMAR</h1>;
      eventName = "KENDRICK LAMAR MUSIC FEST"
      eventDate = "SEPTEMBER 22ND, 2023 12 PM IST"
      eventDescription = "Multi-Platform, Grammy-award winning artist and co-founder of creative imprint pgLang, Kendrick Lamar, has achieved massive critical and cultural since his debut album good kid, m.A.A.d city released in 2012."
      bgColor= "#e7e3e2"
    }
    if (Number(id) === 99) {
      eid = "eventSummary/99"
      profile = "/images/death21/lilnazx.png";
      bg = "/images/death21/lilnazx.png";
      title = <h1 className="text-4xl tablet:text-[90px] md:text-[100px] font-[400] text-center font-modern">LIL NAS X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LIL NAS X &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LIL NAS X</h1>;
      eventName = "THE LONG LIVE MONTERO TOUR"
      eventDate = "NOVEMBER 4TH, 2023 4 PM IST"
      eventDescription = "The Long Live Montero Tour was the debut concert tour by American rapper and singer Lil Nas X, in support of his debut studio album, Montero (2021). The tour spanned across North America and Europe, beginning on September 6, 2022, in Detroit, Michigan, and concluded in Barcelona on November 17, 2022."
      bgColor = "#513e30"
    }
    if (Number(id) === 100) {
      eid = "eventSummary/100"
      // profile = "/images/creators/drake.jpg";
      profile = '/images/death21/drake.png'
      // bg = '/images/creaters-name/drake.webp';
      bg='/images/death21/drake.png'
      title = <h1 className="text-4xl tablet:text-[90px] md:text-[100px] font-[400] text-center font-modern">DRAKE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DRAKE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  DRAKE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DRAKE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DRAKE</h1>;
      eventName = "DRAKE: IT'S ALL A BLUR TOUR"
      eventDate = "OCTOBER 6TH, 2023 6:30 AM IST"
      eventDescription = "Drake heads out on the It's all A Blur Tour in July 2023. Drake's first North America arena tour in five years will kick off in Chicaho, illnais, and cover much of North America"
      TicketZoom = 220
      bgColor="#1a2129"
    }
    if (Number(id) === 101) {
      eid = "eventSummary/101"
      bg ="/images/death21/dojakat.png";
      profile = "/images/death21/dojakat.png";
      title = <h1 className="text-4xl tablet:text-[90px] md:text-[100px] font-[400] text-center font-modern">DOJA CAT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOJA CAT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOJA CAT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOJA CAT</h1>;
      eventName = "THE SCARLET TOUR"
      eventDate = "OCTOBER 30TH, 2023 9 AM IST"
      eventDescription = "The Scarlet Tour is the upcoming second concert tour by Doja Cat. It is the singer's first arena tour, of her upcoming fourth sudio album. The supporting acts are American rappers Ice Spice and Doechii"
      bgColor="#ffc3d2"
    }
    if (Number(id) === 102) {
      eid = "eventSummary/102"
      profile = "/images/death21/emiwaybantai.png";
      bg = '/images/death21/emiwaybantai.png';
      title = <h1 className="text-4xl tablet:text-[90px] md:text-[100px] font-[400] text-center font-modern">EMIWAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EMIWAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EMIWAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EMIWAY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EMIWAY</h1>;
      eventName = "THE LA-LIT BALLROOM"
      eventDate = "OCTOBER 22ND, 2023 5 PM IST"
      eventDescription = "Emiway is an Indian rapper, songwriter, and record producer. started off releasing music in 2013 and turned out to become the biggest Independent musician in India with 3 billion + streams on his catalogue of almost 150+ songs, all Independently."
      bgColor="#e0a45e"
    }
  };

  setBg();



  return (
    
    <div className='overflow-x-hidden'>

        {/* page */}
        <div className='  h-screen' style={{ backgroundColor: `${bgColor}` }}>
            {/* for all 4 */}
            <div className='pt-[5%] flex  flex-col justify-center items-center scale-105'>
                {/* for 2 on top */}
                <div className='flex justify-center w-[45%]'>
                    {/* left div */}
                    <div className='w-1/2  bg-[#1a2129] rounded-l-lg h-[38vh] border-l-2 border-t-2 border-b-2 border-gray-400 flex justify-center items-center overflow-hidden'>
                    <img src={bg} alt=""  className='' style={{transform:"scale(1.7)"}} />
                    </div>
                    {/* right div */}
                    <div className='w-1/2 bg-[#181a20] rounded-r-lg border-2 border-gray-400 text-white flex flex-col justify-center px-4' >
                        {/* heading */}
                        <div className='flex flex-col justify-center w-full text-center pb-2'>
                            {/* 1 */}
                            <div className='font-bold text-xl'>{eventName}</div>
                            {/* 2 date */}
                            <div className='font-semibold text-lg'>{eventDate}</div>
                        </div>
                        <div>
                            {/* about */}
                            <div className='text-lg font-bold pb-2 text-[#ffffff] '>About</div>
                        </div>
                        <div className='text-sm'> 
                            {/* desc */}
                            <div>{eventDescription}</div>
                        </div>
                    </div>

                </div>
                <div className={`w-[45%] font-bold text-xl py-3 pl-1 ${Number(id) === 100 ? 'text-white' : ''}`}>
                    Summary
                </div>
                {/* 2 on bottom */}
                <div className='flex w-[45%] justify-between'>
                    {/* left box */}
                    <div className='bg-[#181a20] w-[44%] h-[9vh] rounded-lg border-2 border-gray-400'>
                        <div className='flex text-white font-semibold py-2 px-4 h-full items-center '>
                            {/* image */}
                            <div className=' bg-[#181a20]  rounded-sm mr-3 flex items-center justify-center overflow-hidden w-[6vh] h-[6vh]'>
                               <img src={bg} alt="drake" className='rounded-sm' style={{transform:"scale(1.5) "}} />
                            </div >
                            {/* content */}
                            <div className='flex w-full justify-between '> 
                                <div className='flex flex-col justify-between'>
                                    <p className=''>Ticket</p>
                                    <p className=''>Date</p>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className=''>$500</p>
                                    <div className='flex items-center justify-center'>
                                    <center className='cursor-pointer p-1 text-gray-400'>
                                    <AiFillMinusCircle/>
                                        {/* <div className='cursor-pointer text-black w-[12px] h-[12px] rounded-[100%] flex justify-center items-center text-[16px]  text center bg-gray-400'>
                                        <BsFillPlusCircleFill/>
                                        </div> */}
                                    </center>
                                    {/* ⊖ ⊕ */}
                                        <p className=''>  &nbsp;1&nbsp;</p>
                                    <center className='cursor-pointer p-1 text-gray-400'>
                                    <AiFillPlusCircle/>
                                        {/* <div className='cursor-pointer text-black text-center p-1 w-[12px] h-[12px] rounded-[100%]  text-[16px] flex justify-center  items-center text center bg-gray-400'>+</div> */}
                                    </center>
                                    </div>
                                    {/* , */}
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className='bg-[#181a20] w-1/2 h-[20vh] rounded-lg border-2 border-gray-400'>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default EventSummary 