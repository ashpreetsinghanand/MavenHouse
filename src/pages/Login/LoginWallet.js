// import Navbar from '@components/layout/Navbar';
import React from "react";
import { useEffect } from "react";
import { NavLink, useHistory, useLocation, useParams } from "react-router-dom";
import { singerImage } from "@utils/constants";
import Cookies from "js-cookie";
import GoLive from "../go-live/GoLive";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LoginWallet = () => {
  const [popup, setPopup] = useState(false);
  const history = useHistory();
  const { id } = useParams();
  const { pathname } = useLocation();
  let user = Cookies.get("user-data");
  // useEffect(()=>{
  //    if(pathname==='/creator' || pathname==='/go-live'){
  //     setPopup(true)
  //    }

  // },[pathname])

  useEffect(() => {
    const $ = window.$;
    try {
      $(".owl-carousel").owlCarousel({
        // loop: true,
        // autoplay: true,
        // autoplayTimeout: 5000,
        margin: 10,
        responsiveClass: true,
        dots: false,
        navText: [
          "<i class='fa fa-arrow-left'></i>",
          "<i class='fa fa-arrow-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1000: {
            items: 3,
          },
          1240: {
            items: 5,
          },
        },
      });
    } catch (e) {
      console.log("Rendering error", e);
    }
  }, []);

  const goNextPage = (index) => {
    if (index == 0) {
      history.push("/kendrick");
    }
    if (index == 1) {
      history.push("/lil-nas-x");
    }
    if (index == 2) {
      history.push("/drake");
    }
    if (index == 3) {
      history.push("/doja-cat");
    }
    if (index == 4) {
      history.push("/emiway");
    }
  };
  useEffect(() => {
    Cookies.remove("user-type");
  }, []);
  return (
    <>
      <div className="mt-6">
        <header className="px-4 text-white login-header">
          <div className="owl-carousel owl-theme relative ">
            {singerImage.map((item, index) => (
                <Link to={`/artist-detail/${item.id}`}>
                
              <div
                key={index}
                className="item"
                // onClick={() => window.open(`/artist-detail/${item.id}`)}
              >
                {/* rectangles */}
                <div className="slider-wrapper ">

                  
                  <img src={item?.imgpath} alt="" 
                  
                  style = {{
                    transform:
                        item.id == 98
                      ? "scale(1.14) translateX(-6.8%) translateY(3%)"
                      :item.id === 99
                      ? "scale(1.3) translateY(12%) translateX(11%)"
                      : item.id === 100
                      ? "scale(1.2) translateY(-4%)"
                      // : profile === '/images/death21/drake.png'
                      // ? "scale(2)" // Adjust the scale value as needed
                      : item.id === 101
                      ? "scale(1.2) translateY(6%)" // Move the image 30% down
                      : item.id === 102
                      ? "scale(1.3) translateY(10%) translateX(-2%)" // Move the image 20% up
                      : "none"
                    
                }}
                  
                  
                  />

                  <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                    <h2
                      className={`artfont leading-10 ${
                        index === 0
                          ? `font-think`
                          : index === 1
                          ? `font-hey`
                          : index === 2
                          ? `font-viner`
                          : index === 3
                          ? "font-gloucester"
                          : `font-hey`
                      }`}
                    >
                      {item.name}
                    </h2>
                    <div className="min-h-[196px]">
                      <p className="text-white mb-2">{item.paragraph}</p>
                      <div className="font-bold ">{item.data}</div>
                    </div>
                    <Link to={`/artist-detail/${item.id}`}>
                    <button
                      type="submit"
                      className="bg-black px-2 min-w-[140px] flex-shrink-0 w-fit py-2 rounded-xl hover:bg-[#06060691]  text-[16px]"
                      >
                      Get Tickets
                    </button>
                        </Link>
                  </div>
                </div>
              </div>
              </Link>
            ))
        }
          </div>
          <div className="mt-8 ">
            <Link
              to="#"
              className="flex items-center justify-center w-28 mx-auto"
            >
              See More
            </Link>
          </div>
        </header>
      </div>

      {/* {popup&&<GoLive setPopup={popup}/>} */}
    </>
  );
};

export default LoginWallet;
