import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Quote from './section/Quote';
import HeroSection from './section/HeroSection';
import PhoneModel from './section/PhoneModel';
import DesignSection from './section/DesignSection';
import DisplaySection from './section/DisplaySection';
import ProcessorSection from './section/ProcessorSection';
import BatterySection from './section/BatterySection';
import ColorSection from './section/ColorSection';

function App() {
  return (
    <>
      <GlobalStyle/> 
      <Quote/>
      <PhoneModel/>
      <HeroSection/>
      <DesignSection/>
      <DisplaySection/>
      <ProcessorSection/>
      <BatterySection/>
      <ColorSection/>
    </>
  );
}

export default App;
