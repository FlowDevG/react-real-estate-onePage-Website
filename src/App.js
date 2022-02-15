import React, {useState} from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import {SliderData} from './data/SliderData';
import DropDown from './components/DropDown';
import InfoSection from './components/InfoSection';
import { InfoDataOne, InfoDataTwo } from './data/InfoData';
import Footer from './components/Footer';
import Slider from './components/Slider';

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoDataOne}/>
      {/* <InfoSection {...InfoDataTwo}/> */}
      <Slider />
      <Footer />
    </>
  );
}

export default App;
