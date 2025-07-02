import { useState } from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Cocktails from "./assets/components/cockTails";
import About from "./assets/components/About";
import Test from "./assets/components/test";



function App() {
  return (
    <main>

   
      <Navbar />
      <Hero />
      <Cocktails />
      <About/>
    </main>
  );
}

export default App;
