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
import {BackToTop} from './components/Icon'

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
    }, 4000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader />
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
              <button className={`${backToTop ? "fixed sm:right-[1%] right-2 bottom-[2%] z-30 !cursor-pointer updown_animation shadow-[0px_5px_10px_0px_rgba(255,255,255,2551)] w-[40px] h-[40px] border-white border-2 flex justify-center items-center bg-[#b00000] rounded-[50%]" : "d-none"}`} onClick={() => top()}><BackToTop /></button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
