import React from "react";
import constant from "../constant/index.js";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Art = () => {
  const { goodLists, featureLists } = constant;

  const ismobile = useMediaQuery({width: 767});

  useGSAP(()=>{
    const start = ismobile ? "top 20%" : "top top";
    
    const maskTimeLine = gsap.timeline({
      scrollTrigger:{
        trigger:"#Art",
        start: start,
        end:"bottom center",
        scrub:1.5,
        pin:true,
        markers:true
      }
    })

    maskTimeLine.to(".will-fade",{opacity:0,stagger:0.2,ease:'power1.inOut'})
    .to(".masked-img",{ scale:1.3, maskPosition:"center", maskSize:"400%", duration:1, ease:"power1.inOut"})
  })


  return (
    <div id="Art" className="w-full h-full relative bg-black pointer-events-none">
      <div className="container mx-auto h-full pt-20 ">
        <h2
          className="text-[35vh] font-extrabold leading-none text-transparent bg-clip-text bg-center bg-cover font-modern-negra text-center mb-10 "
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url('/images/noise.png')`,
          }}
        >
          The Art
        </h2>

        <div className="container text-2xl flex flex-row justify-between p-15">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feaute, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check"></img>
                <p>{feaute}</p>
              </li>
            ))}
          </ul>

          {/* <div className="cocktails-img md:w-[60vw] w-full h-[50vh] md:h-[70vh] rounded-4xl overflow-hidden absolute top-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2"> */}
          <div className="cocktails-img md:w-[60vw] w-full h-[50vh] md:h-[70vh] rounded-4xl overflow-hidden absolute top-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2">
            <img
              src="/images/under-img.jpg"
              alt="cocktails"
              className="abs-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 masked-img  size-full object-contain"
            ></img>
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feaute, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check"></img>
                <p className="md:w-fit w-60">{feaute}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container opacity-0 md:px-0 px-5 space-y-5 absolute md:bottom-5 bottom-52 left-1/2 -translate-x-1/2">
          <h2 className="will-fade text-4xl md:text-5xl font-modern-negra text-center mb-10 text-white mt-32">
            Sip-Worthy Perfection
          </h2>
          <div className="masked-container opacity-0 md:px-0 px-5 space-y-5 absolute md:bottom-5 bottom-52 left-1/2 -translate-x-1/2">
            <h2 className="md:text-5xl text-2xl text-center font-serif md:w-full w-80 text-white">
              Made with Craft, Poured with Passion
            </h2>
            <p className="text-lg text-center">
              This isn't just a drink. It's a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
