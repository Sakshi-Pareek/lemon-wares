import './App.css';
import { useEffect, useState } from 'react';
import HeaderSec from './components/HeaderSec';
import WebHosting from './components/WebHosting';
import RealStory from './components/RealStory';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import WeServer from './components/WeServer';
import ReadyToGet from './components/ReadyToGet';
import Aos from 'aos';
import "aos/dist/aos.css";
import Preloader from './components/Preloader';
import BackToTop from './assets/images/webp/BackToTop.webp'

function App() {
  // =======================aos============================
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  // ========================back-to-top=======================
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // =======================preloader======================
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader/>
      ) : (
        <>
          <div className='overflow-hidden'>
            <HeaderSec />
            <WebHosting />
            <ReadyToGet />
            <RealStory />
            <WeServer />
            <GetInTouch />
            <Footer />
            <div>
              <img src={BackToTop} alt="BackToTop" className={`${backToTop ? "fixed right-[1%] bottom-[1%] z-30 !cursor-pointer md:w-[50px] w-[30px]" : "d-none"} updown_animation`} onClick={() => top()} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
