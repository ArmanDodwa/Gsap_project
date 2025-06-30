import { useState } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap/gsap-core";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-screen bg-black"></div>
    </main>
  );
}

export default App;
