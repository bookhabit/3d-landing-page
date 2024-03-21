import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Quote from './section/Quote';
import HeroSection from './section/HeroSection';

function App() {
  return (
    <>
      <GlobalStyle/> 
      <Quote/>
      <HeroSection/>
    </>
  );
}

export default App;
