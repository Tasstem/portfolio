import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Preloader from "../src/components/Preloader"
import MainPageContainer from './containers/MainPageContainer';
import NavContainer from './containers/NavContainer';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import About from './components/About';
import Contacts from './components/Contacts';
import Preloader from './components/Preloader';



const App = () => {
  //для preloader
  const [progress, setProgress] = useState(0);
//заполнить до 100% и убрать preloader
  const fillProgress = async () => {
    var preloader = document.getElementById("preloader")
    preloader.style.opacity=0;
    // preloader.style.height=0;
    preloader.style.visibility="hidden";
    setProgress(100)


      }

//заполнять preloader до 95% каждые 50 млсек, после подождать события загрузки страницы после заполнить до 100% и убрать preloader
//метод костыльный и не уверен, что правильный))
  useEffect(() => {
    const interval = setInterval(() => {
    setProgress((oldProgress) => {
    const newProgress = oldProgress + 1
     if(newProgress === 95) {
      window.addEventListener('load', fillProgress());
       clearInterval(interval)
     }
     return newProgress
    })
    }, 50)
      }, []);
  
   

  return (
      
    <div>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>
          <Preloader progress={progress}/>
        <NavContainer/>
        <MainPageContainer location="main"/>

        
    
            </div>} />
          <Route path="favorites" element={<div>
            <NavContainer/>
          <MainPageContainer location="favorites"/>
          </div>}
          />
          <Route path="about" element={<About/>} />
          <Route path="contacts" element={<Contacts/>} />
        </Routes>
      </BrowserRouter>
      <NotificationContainer/>
    </div>

      

  )
}

export default App