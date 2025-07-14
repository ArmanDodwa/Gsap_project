import { useState } from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Cocktails from "./assets/components/cockTails";
import About from "./assets/components/About";
import Test from "./assets/components/test";
import Art from "./assets/components/Art";
import Test2 from "./assets/components/test2";
import Menu from "./assets/components/Menu";



function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About/>
      <Art />
      <Menu/>
    </main>
  );
}

export default App;
