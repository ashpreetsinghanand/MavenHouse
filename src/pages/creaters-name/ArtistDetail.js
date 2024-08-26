import React, { useState, useEffect, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getApiReq } from "../../utils/ApiHandler";
import { Player } from "@livepeer/react";
import { parseArweaveTxId, parseCid } from "livepeer/media";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom";

const ArtistDetail = () => {
  const [locked, setLocked] = useState("pending");
  const [eventData, setEventData] = useState("");
  const { id } = useParams();
  const history = useHistory();
  const [image, setImage] = useState();
  const [teaserPlaybackId, setTeaserPlaybackId] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const teaserPlaybackIdParsed = useMemo(
    () => parseCid(teaserPlaybackId) ?? parseArweaveTxId(teaserPlaybackId),
    [teaserPlaybackId]
  );


  //eventid
let bg, title, profile,eventName,eventDate,eventDescription,eid, TicketZoom;

  useEffect(() => {
    getApiReq("/user/get-events").then((res) => {
      if (res.status) {
        let data = res?.data?.data;
        data?.map((item, index) => {
          return Number(item?.id) === Number(id)
            ? setEventData(item?.contract_address)
            : null;
        });
      }
    });
  }, []);

  useEffect(() => {
    if (eventData) {
      (function (d, s) {
        var js = d.createElement(s),
          sc = d.getElementsByTagName(s)[0];
        js.src =
          "https://paywall.unlock-protocol.com/static/unlock.latest.min.js";
        sc.parentNode.insertBefore(js, sc);
      })(document, "script");
      console.log("eventdata", eventData);
      window.unlockProtocolConfig = {
        locks: {
          [`${eventData}`]: {
            name: "The Unlock Members lock",
            network: 80001,
          },
        },
        icon: "https://unlock-protocol.com/images/svg/unlock-word-mark.svg",
      };
    }
  }, [eventData]);

  const unlockHandler = (e) => {
    console.log("event", e);
    setLocked(e.detail);
  };

  const checkOut = (e) => {
    e.preventDefault();
    window.unlockProtocol && window.unlockProtocol.loadCheckoutModal();
  };

  const openVideoPopup = (id) => {
    getApiReq(`/user/artist/${id}`).then(async (response) => {
      if (response.status) {
        let { data } = response?.data;
        if (data.length > 0) {
          data = data[0];
          console.log(data);
          setShowPopup(true);
          if (data?.teaser_playback) {
            setTeaserPlaybackId(`ipfs://${data?.teaser_playback}`);
          }
        }
      } else {
        console.log(response?.data?.error);
      }
    });
  };
  
  
  // background set
  const setBg = () => {
    
    if (Number(id) === 98) {
      eid = "eventSummary/98"
      profile = "/images/death21/kendricklamar.png";
      bg ="/images/death21/kendricklamar.png"; 
      title = <h1 className="text-4xl tablet:text-[90px] md:text-[100px] font-[400] text-center font-modern">KENDRICK&nbsp;LAMAR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; KENDRICK&nbsp;LAMAR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KENDRICK&nbsp;LAMAR</h1>;
      eventName = "KENDRICK LAMAR MUSIC FEST"
      eventDate = "SEPTEMBER 22ND, 2023 12 PM IST"
      eventDescription = "Multi-Platform, Grammy-award winning artist and co-founder of creative imprint pgLang, Kendrick Lamar, has achieved massive critical and cultural since his debut album good kid, m.A.A.d city released in 2012."
    }
    if (Number(id) === 99) {
      eid = "eventSummary/99"
      profile = "/images/death21/lilnazx.png";
      bg = "/images/death21/lilnazx.png";
      title = <h1 className="text-4xl tablet:text-[90px] md:text-[100px] font-[400] text-center font-modern">LIL NAS X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LIL NAS X &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LIL NAS X</h1>;
      eventName = "THE LONG LIVE MONTERO TOUR"
      eventDate = "NOVEMBER 4TH, 2023 4 PM IST"
      eventDescription = "The Long Live Montero Tour was the debut concert tour by American rapper and singer Lil Nas X, in support of his debut studio album, Montero (2021). The tour spanned across North America and Europe, beginning on September 6, 2022, in Detroit, Michigan, and concluded in Barcelona on November 17, 2022."
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
    }
    if (Number(id) === 101) {
      eid = "eventSummary/101"
      bg ="/images/death21/dojakat.png";
      profile = "/images/death21/dojakat.png";
      title = <h1 className="text-4xl tablet:text-[90px] md:text-[100px] font-[400] text-center font-modern">DOJA CAT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOJA CAT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOJA CAT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOJA CAT</h1>;
      eventName = "THE SCARLET TOUR"
      eventDate = "OCTOBER 30TH, 2023 9 AM IST"
      eventDescription = "The Scarlet Tour is the upcoming second concert tour by Doja Cat. It is the singer's first arena tour, of her upcoming fourth sudio album. The supporting acts are American rappers Ice Spice and Doechii"
    }
    if (Number(id) === 102) {
      eid = "eventSummary/102"
      profile = "/images/death21/emiwaybantai.png";
      bg = '/images/death21/emiwaybantai.png';
      title = <h1 className="text-4xl tablet:text-[90px] md:text-[100px] font-[400] text-center font-modern">EMIWAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EMIWAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EMIWAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EMIWAY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EMIWAY</h1>;
      eventName = "THE LA-LIT BALLROOM"
      eventDate = "OCTOBER 22ND, 2023 5 PM IST"
      eventDescription = "Emiway is an Indian rapper, songwriter, and record producer. started off releasing music in 2013 and turned out to become the biggest Independent musician in India with 3 billion + streams on his catalogue of almost 150+ songs, all Independently."
    }
  };

  setBg();

  useEffect(() => {
    window.addEventListener("unlockProtocol", unlockHandler);
  }, []);

  return (
    <div>
      <div>
      <header
  className={`px-4 h_creater flex bg-cover bg-[75%_17%] bg-no-repeat flex-col place-content-around text-white w-screen`}
  style={{
    backgroundImage: `${
      Number(id) === 101
        ? ``
        : ""
    }url(${bg})`,
    backgroundPosition:
      Number(id) === 98
        ? "center 40%"
        : Number(id) === 99
        ? "center 30%"
        : Number(id) === 100
        ? "center 95%"
        : Number(id) === 101
        ? "center 50%"
        : Number(id) === 102
        ? "center 40%"
        : "",
        backgroundSize:
        Number(id) === 98
        ? "100%" // Adjust the scale value as needed
        : 
        Number(id) === 99
          ? "100%" // Adjust the scale value as needed
          : Number(id) === 100
          ? "100%" // Adjust the scale value as needed
          : Number(id) === 101
          ? "100%" // Adjust the scale value as needed
          : Number(id) === 102
          ? "100%"
          : "cover", // Default value for other cases
    }}
>
          {/* floating name */}
          <div className="header-wrapper">
            <marquee direction="left" scrollamount="12" loop="1">
              {title}
            </marquee>
          </div>

          {/* entire row of get ticket box */}
          <div className="header-wrapper-2 h-fit  relative mt-[20vh] xxl:mt-[35vh] md:flex mr-4 ">

            {/* rectangle  */}
            <div className=" border boder-[2px] border-[#707070]   bg-gray-600 backdrop-blur-lg  md:flex gap-[24px]  rounded-[12px] px-3 py-4 h-fit">
              {/* rounded-image */}
              <div className="rounded-full flex items-center justify-center border border-[#707070] h-[200px] w-[200px] overflow-hidden">
                <img
                  src={bg}
                  alt=""


                  style={{
                    transform:
                      Number(id) === 98
                        ? "scale(1.9) translateX(-3%)"
                        :Number(id) === 99
                        ? "scale(1.9)"
                        : Number(id) === 100
                        ? "scale(1.9) translateY(-1%)"
                        // : profile === '/images/death21/drake.png'
                        // ? "scale(2)" // Adjust the scale value as needed
                        : Number(id) === 101
                        ? "scale(1.9)" // Move the image 30% down
                        : Number(id) === 102
                        ? "scale(1.9) translateX(-3%)" // Move the image 20% up
                        : "none",
                    // Other inline styles as needed
                  }}
                  // not working
                  // className={`scale-[${TicketZoom}%]`}  
                />
              </div>
              {/* written things on the left */}
              <div className="md:w-[24rem] font-bold">
                <div className="flex flex-col items-center">
                  <div className="text-xl">{eventName}</div>
                  <h3>{eventDate}</h3>
                </div>
                <h5 className="font-semibold text-[#FF8D00] text-xl mt-1">About</h5>
                <p className="text-xs mt-1 lg:line-clamp-4 line-clamp-6">{eventDescription}</p>
                <div className='flex gap-2 items-center'>
                  {/* <button className="mt-3  font-bold w-full text-black py-1 px-3 rounded-md bg-white" type="submit" onClick={checkOut}>Buy Ticket Now</button>
                  <button className="mt-3 font-bold w-full text-black py-1 px-3 rounded-md bg-white" type="submit" onClick={() => history.push(`/artist-detail/${id}/live`)}>Join The Event</button> */}
                </div>
                {/* <p className="text-xs mt-1 lg:line-clamp-4 line-clamp-6">
                  Join Dane Cook on October 5th for his latest stand-up comedy
                  event ‘Above It All’ filmed from his front porch overlooking
                  Los Angeles. This all new comedy routine is his third w/
                  director Mart...
                </p> */}
                {/* <div className="flex gap-2 items-center"> */}
                  {/* <button className="mt-3  font-bold w-full text-black py-1 px-3 rounded-md bg-white" type="submit" onClick={checkOut}>Buy Ticket Now</button> */}
                  {/* <button className="mt-3 font-bold w-full text-black py-1 px-3 rounded-md bg-white" type="submit" onClick={() => history.push(`/artist-detail/${id}/live`)}>Join The Event</button> */}
                {/* </div> */}
                {/* <button className="mt-3 font-bold text-black py-1 px-3 rounded-md bg-white" type="submit" onClick={() => history.push(`/artist-detail/${id}/record`)}>Watch the Records</button> */}
                {/* <button className="mt-3 w-full font-bold text-black py-1 px-3 rounded-md bg-yellow-600" type="button" onClick={(e) => openVideoPopup(id)}>Watch the teaser</button> */}
                 <Link to={eid}>
                <div className="font-bold bg-[#FF8D00] hover:text-white px-4 py-1 rounded-lg flex justify-center text-black text-xl my-4 hover:pointer-cursor" >
                   Get Ticket Now
                </div>
                 </Link> 
              </div>
            </div>


            {/* message */}
            {/* <div className="right-side  w-72 mt-16 md:mt-0 md:absolute -bottom-3 right-0">
              <div className="flex gap-2 relative">
                <div className=" w-6 rounded-full absolute bottom-0  h-6 text-[#137B88] flex items-center justify-center  bg-[#A5EFF8] text-xs">
                  j
                </div>
                <div className="w-64 absolute right-0 bottom-0 backdrop-blur-md text-sm rounded-2xl p-2 bg-[#57506928]">
                  <span className="text-[#A5EFF8] font-semibold">just:</span>{" "}
                  Hello everyone,hope everyone's ready for the show!!
                </div>
              </div>
              <div className="relative w-72 py-4 flex items-center">
                <div className="w-6 h-6 bg-[#9B9B9B] rounded-full z-10 text-sm flex justify-center items-center absolute left-1">
                  M
                </div>
                <input
                  className="w-full outline-none focus:border-none border-none backdrop-blur-md pl-8 bg-[#6e658c1c] rounded-3xl placeholder:text-[#808891]"
                  type="text"
                  placeholder="Message"
                  name=""
                  id=""
                />
                <div className="cursor-pointer   w-6 bg-[#E8952F] flex items-center justify-center h-6 rounded-full absolute right-1">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div> */}
          </div>
        </header>
      </div>
      {showPopup && teaserPlaybackIdParsed && (
        <div
          id="backdrop"
          className="fixed top-0 right-0 left-0 z-[1000] grid place-items-center min-h-screen backdrop-blur-[3px] p-[10px]"
        >
          <div
            className="max-w-[450px] bg-white rounded-[15px] shadow4 p-8 w-full"
            style={{ position: "relative", cursor: "pointer" }}
          >
            <div className="w-full flex justify-center">
              <Player
                title="Watch the teaser"
                src={teaserPlaybackId}
                autoPlay
                muted
                autoUrlUpload={{
                  fallback: true,
                  ipfsGateway: "https://w3s.link",
                }}
                showTitle={false}
              />
            </div>
            <div
              style={{ position: "absolute", right: "10px", top: "10px" }}
              className="border-circle"
              onClick={(e) => {
                setShowPopup(false);
                setTeaserPlaybackId("");
              }}
            >
              x
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistDetail;
