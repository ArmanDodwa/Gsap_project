import React from "react";
import constant from "../constant/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger); // ✅ Register ScrollTrigger

const cockTails = () => {
  const { cocktailLists } = constant;
  const { mockTailLists } = constant;

  useGSAP(() => {
    const parallexTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktail",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
        // markers: true,
      },
    });

    parallexTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
        duration: 1,
        ease: "power2.out",
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
        duration: 1,
        ease: "power2.out",
      });
  });

  return (
    <section id="cocktail" className="absolute w-full h-full">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="l-leaf"
        id="c-left-leaf"
        className="absolute left-0 bottom-0"
      ></img>
      <img
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
        id="c-right-leaf"
        className="absolute right-0 bottom-0"
      ></img>

      <div className="w-full p-25 -mt-15 flex flex-row justify-between ">
        <div className="popular space-y-8 w-full md:w-fit gap-15">
          <h2 className="text-[20px]">Most popular cocktails:</h2>

          <ul className="gap-4">
            {mockTailLists.map((drink) => (
              <li key={drink.name} className="flex pb-3">
                <div className="md:me-28">
                  <h3 className="text-[20px] text-amber-200 pb-1">
                    {drink.name}
                  </h3>
                  <p className="text-[14px] ">
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span className="absolute left-[25%]">- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="popular space-y-8 w-full md:w-fit gap-15">
          <h2 className="text-[20px]">Most loved mockTailLists:</h2>

          <ul className="gap-4">
            {cocktailLists.map((drink) => (
              <li key={drink.name} className="flex pb-5">
                <div className="md:me-28">
                  <h3 className="text-[20px] text-amber-200 pb-1">
                    {drink.name}
                  </h3>
                  <p className="text-[14px] ">
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span className="absolute right-10">- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default cockTails;
