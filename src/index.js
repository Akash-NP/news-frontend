import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import { EmptyLayout } from './components/EmptyLayout';
import { WithNav } from './components/WithNav';
import { SingleNewsLayout } from './components/SingleNewsLayout';
import { KeralaCategoryNews } from './components/KeralaCategoryNews';
import { NationalCategoryNews } from './components/NationalCategoryNews';
import  FilesUploadComponent  from './components/FilesUploadComponent';
import { GalleryCategory } from './components/GalleryCategory';
import { YoutubeCategory } from './components/YoutubeCategory';
import { InterNationalCategory } from './components/InterNationalCategory';
import { CrimeCategory } from './components/CrimeCategory';
import { InterViewCategory } from './components/InterviewCategory';
import { VellithiraCategory } from './components/VellithiraCategory';
import Epaper from './components/EPaperCategory';
import { YoutubeSingleNews } from './components/YoutubeSIngleContentComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
            <Route element={<WithNav />}>
        <Route path='/' element={<EmptyLayout />}>
          <Route index element={<Home/>}/>
            <Route path='details' element={<SingleNewsLayout />}></Route>
            <Route path='videoDetails' element={<YoutubeSingleNews />}></Route>

            <Route path='keralaNews' element={<KeralaCategoryNews />}></Route>
            <Route path='nationalNews' element={<NationalCategoryNews />}></Route>
            <Route path='internationalNews' element={<InterNationalCategory />}></Route>
            <Route path='crime' element={<CrimeCategory />}></Route>
            <Route path='interviews' element={<InterViewCategory />}></Route>
            <Route path='vellithira' element={<VellithiraCategory />}></Route>
            <Route path='addPost' element={<FilesUploadComponent />}></Route>
            <Route path='gallery' element={<GalleryCategory />}></Route>
            <Route path='youtube' element={<YoutubeCategory />}></Route>
            <Route path='epaper' element={<Epaper />}></Route>
          </Route>
          </Route>


  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
