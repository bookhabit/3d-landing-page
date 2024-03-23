import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Quote from './section/Quote';
import HeroSection from './section/HeroSection';
import PhoneModel from './section/PhoneModel';
import DesignSection from './section/DesignSection';
import DisplaySection from './section/DisplaySection';

function App() {
  return (
    <>
      <GlobalStyle/> 
      <Quote/>
      {/* <PhoneModel/> */}
      <HeroSection/>
      <DesignSection/>
      <DisplaySection/>
    </>
  );
}

export default App;
