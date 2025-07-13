import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import gsap from "gsap/gsap-core";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const ismobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    // gsap.set(".video2", {
    //   y: "-200%",
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: "top center",
        end: "center top",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <>
      <div className="relative w-full bg-red-950 h-full">
        <section id="hero" className="bg-red-100 w-full h-screen relative">
          <h1 className="text-3xl text-black">section</h1>
        </section>

        <div
          id="video"
          className="video absolute left-0 top-0 pointer-events-none w-full h-screen overflow-clip"
        >
          <h1 className="text-3xl text-black">video div</h1>
          <div className="w-[50%] h-[50%]  bg-yellow-600 video2">
            <h2 className="text-3xl text-black">hey hey lorem24</h2>
          </div>
        </div>
      </div>

      <div id="extra-div" className="test w-full h-screen bg-blue-600">
        <div className="w-[25%] h-[20%] bg-amber-800 p-10"></div>
        <div className="w-[25%] h-[20%] bg-amber-800 gap-5"></div>
        <div className="w-[25%] h-[20%] bg-amber-800 gap-5"></div>
        <div className="w-[25%] h-[20%] bg-amber-800 gap-5"></div>
      </div>

      <div className="w-full h-screen bg-red-100"></div>
      {/* <div className="w-full h-screen bg-green-600"></div> */}
      {/* <div className="w-full h-screen bg-red-600"></div> */}
      {/* <div className="w-full h-screen bg-red-600"></div> */}
    </>
  );
};

export default Hero;
