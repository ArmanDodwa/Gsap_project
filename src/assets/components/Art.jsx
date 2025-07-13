import React from "react";
import constant from "../constant/index.js";

const Art = () => {

  const { goodLists, featureLists } = constant;

  return (
    <div id="Art" className="w-full h-full relative">
      <div className="container mx-auto h-full pt-20 bg-red-300">
        <h2 className="text-9xl md:text-5xl font-modern-negra text-center mb-10 text-white mt-32 will-fade">The Art</h2>

        <div className="container">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feaute , index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check"></img>
                <p>{feaute}</p>
              </li>
            ))}
          </ul>

          {/* <div className="cocktails-img">
            <img src="/images/under-img.jpg" alt="cocktails" className="abs-center masked-img size-full object-contain"></img>
          </div> */}

          <ul className="space-y-4 will-fade">
            {featureLists.map((feaute , index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check"></img>
                <p className="md:w-fit w-60">{feaute}</p>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Art;
