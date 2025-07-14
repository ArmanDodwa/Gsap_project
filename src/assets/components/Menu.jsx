import constant from "../constant/index.js";
import { useRef, useState } from "react";

const Menu = () => {
  const contentRef = useRef();

  const { sliderLists } = constant;

  const [currentIndex, setcurrenIndex] = useState(0);

  const totalCocktails = sliderLists.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setcurrenIndex(newIndex);
  };

  const getCockatils = (indexOff) => {
    return sliderLists[
      (currentIndex + indexOff + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktails = getCockatils(0);
  const preCocktails = getCockatils(-1);
  const nextCocktails = getCockatils(1);

  return (
    <section
      className="menu relative w-full md:mt-40 mt-0 2xl:px-0 px-5 py-20 radial-gradient"
      aria-labelledby=""
    >
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
        className="object-contain absolute bottom-60 left-0 md:w-fit w-1/3"
      ></img>
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
        className="object-contain absolute -top-40 right-0 md:w-fit w-1/4"
      ></img>

      <h2 id="menu-heading" className="sr-only">
        Cocktails Menu
      </h2>

      <nav
        className="cocktails-tabs grid md:grid-cols-4 grid-cols-2 w-[80%] -mt-40 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto"
        aria-label="Cocktails Navigation"
      >
        {sliderLists.map((cockTails, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cockTails.id}
              className={`md:text-3xl text-xl pb-2 cursor-pointer hover:text-yellow hover:border-yellow border-b-1 transition-colors font-modern-negra ${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cockTails.name}
            </button>
          );
        })}
      </nav>

      <div className="content  flex flex-col justify-between items-center container mx-auto relative">
        <div className="arrow flex items-center justify-between w-full absolute">
          <button
            className="text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{preCocktails.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            ></img>
          </button>

          <button
            className="w-36 text-white hover:text-yellow cursor-pointer transition-colors z-1 relative"
            onClick={() => {
              console.log("Next clicked");
              goToSlide(currentIndex + 1);
            }}
          >
            <span>{nextCocktails?.name || "Next"}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktails relative min-h-dvh w-full left-90 -mt-20 overflow-hidden">
          <img src={`${currentCocktails.image}`}></img>
        </div>

        <div className="recipe flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-60">
          <div
            ref={contentRef}
            className="info space-y-4 -mt-40 lg:translate-y-20"
          >
            <p>recipe for: </p>
            <p
              id="title "
              className="font-modern-negra md:text-6xl text-3xl  text-yellow max-w-40"
            >
              {currentCocktails.name}
            </p>
          </div>
          <div className="details space-y-5 md:max-w-md text-left">
            <h2 className="md:text-5xl text-3xl font-serif">
              {currentCocktails.title}
            </h2>
            <p className="md:text-lg pe-5">{currentCocktails.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
