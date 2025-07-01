import { useState } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap/gsap-core";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Cocktails from "./assets/components/cockTails";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
}

export default App;
