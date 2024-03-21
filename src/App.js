import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Quote from './section/Quote';
import HeroSection from './section/HeroSection';
import PhoneModel from './section/PhoneModel';

function App() {
  return (
    <>
      <GlobalStyle/> 
      <Quote/>
      <HeroSection/>
      <PhoneModel/>
    </>
  );
}

export default App;
