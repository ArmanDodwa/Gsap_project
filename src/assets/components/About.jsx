import React, { use } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#about h2", {
      type: "words",
    });

    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "400px top ",
        // end: "bottom top",
        // scrub: true,
        markers: true,
      },
    });

    scrollTimeLine.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.02,
    });
  });

  return (
    <div id="about" className="h-full w-full ">
      <div className="absolute -bottom-[205%] w-full h-full mb-16 md:px-0 px-5 ">
        <div className="flex flex-row w-full justify-between p-20">
          <div className="md:col-span-8 w-[40%]">
            <p className="inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-medium mb-8">
              Best Cocktails
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Where every detail <br />
              matter <span className="text-white"> - </span>
              from muddle
              <br /> to garnish
            </h2>
          </div>
          <div className="w-[30%] md:col-span-4 gap-5">
            <p className="text-[15px] text-white-100 mb-10">
              Every cocktail we serve is a reflection of our obsession with
              detail - from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More then +1200 customers
              </p>
            </div>
          </div>
        </div>

        <div className="top-gird grid grid-cols-1 xl:grid-cols-12 gap-5 mb-5 md:px-0 px-5 mr-20 ml-20">
          {/* Image 1 - col-span-3 */}
          <div className="xl:col-span-3 object-cover">
            <div className="noisy inset-0 w-full h-full  bg-[url(/images/noise.png)]">
              <img
                src="/images/abt1.png"
                alt="grid-img-1"
                className="inset-0 w-[500px] h-[285px]"
              />
            </div>
          </div>

          {/* Image 2 - col-span-3 */}
          <div className="xl:col-span-6">
            <div className="noisy inset-0 w-full h-full min-h-[100px] overflow-hidden bg-[url(/images/noise.png)]">
              <img src="/images/abt2.png" alt="grid-img-2" />
            </div>
          </div>

          {/* Image 3 - col-span-6 */}
          <div className="xl:col-span-3 ">
            <div className="noisy inset-0 w-full h-full min-h-[5px] overflow-hidden bg-[url(/images/noise.png)] object-cover">
              <img src="/images/abt5.png" alt="grid-img-3" />
            </div>
          </div>

          {/* Image 4 - col-span-8 */}
          <div className="xl:col-span-6">
            <div className="noisy inset-0 w-full h-1/2 bg-[url(/images/noise.png)]">
              <img src="/images/abt3.png" alt="grid-img-4" />
            </div>
          </div>

          {/* Image 5 - col-span-4 */}
          <div className="xl:col-span-4">
            <div className="noisy inset-0 w-[370px] h-full bg-[url(/images/noise.png)]">
              <img src="/images/abt4.png" alt="grid-img-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
