import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import gsap from "gsap/gsap-core";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const ismobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    const heroSplit = new SplitText("#title", {
      type: "chars, words",
    });
    const paragraphSplit = new SplitText(".subTitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => {
      char.style.background = "linear-gradient(to bottom, #ffffff, #898989)";
      char.style.webkitBackgroundClip = "text"; // for Safari
      char.style.backgroundClip = "text";
      char.style.color = "transparent";
    });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 0.8,
      ease: "expo.Out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 0.8,
      ease: "expo.Out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        0
      )
      .to(
        ".left-leaf",
        {
          y: -200,
        },
        0
      );

    const startValue = ismobile ? "top 50%" : "50% 60%";
    const endValue = ismobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        // markers: true,
        pin: true,
      },
    });


    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        ease: "none",
        duration: videoRef.current.duration,
        // scale: ,
      });
    };
  }, []);

  return (
    <>
      <section id="hero" className="inset-0 size-full">
        <h1
          id="title"
          className=" mt-20 text-8xl md:text-[17vw] leading-none text-center font-modern-negra"
        >
          MOJITI
        </h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left leaf"
          className="left-leaf absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-fit w-1/3"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right leaf"
          className="right-leaf absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit w-24"
        />
        <div className="body relative top-30 left-20 ">
          <div className="content -mt-4">
            <div className="space-y-5 hidden md:block">
              <p className="uppercase tracking-wide text-white opacity-80">
                Cool. Crisp. Classic.
              </p>

              <p className="subTitle font-modern-negra text-5xl text-yellow-200 max-w-xl -mt-5">
                Sip the Spirit <br /> of summer
              </p>
            </div>
          </div>
          <div className="ml-auto space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full text-right relative -top-37 -left-50">
            <p className="subTitle text-white opacity-80">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes - designed to delight your
              senses.
            </p>
            <a
              href="#"
              className="font-semibold opacity-80 2xl:text-start text-center hover:text-yellow"
            >
              View More
            </a>
          </div>
        </div>
      </section>

      <div className="video mix-blend-screen w-full md:h-[80%] h-1/2 absolute bottom-0 left-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full "
        ></video>
      </div>
    </>
  );
};

export default Hero;
