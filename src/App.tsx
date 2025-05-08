import './App.css'
import Home from './pages/home/home'
import  { OverOns } from './pages/Site/SitePages/OverOns';

import { Routes, Route, Navigate,  } from 'react-router-dom';
import { PreventieveGezondheidszorg } from './pages/Site/SitePages/Landelijk/Landelijk1';
import { MentaleGezondheid } from './pages/Site/SitePages/Landelijk/Landelijk2';
import { SubsidiesMedischeStudies } from './pages/Site/SitePages/Landelijk/Landelijk3';
import { Stedelijk1 } from './pages/Site/SitePages/Stedelijk/Stedelijk1';
import { Stedelijk2 } from './pages/Site/SitePages/Stedelijk/Stedelijk2';
import { Stedelijk3 } from './pages/Site/SitePages/Stedelijk/Stedelijk3';
import { Nieuws } from './pages/Site/SitePages/Nieuws';





export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      

        <Routes>
          <Route path='/' element={<Home />}/>  
          <Route path='*' element={<Navigate to='/' />}/>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/over-ons'element={<OverOns />}/>
          <Route path='/nieuws' element={<Nieuws />}/>
          <Route path='/preventieve-gezondheidszorg' element={<PreventieveGezondheidszorg />}/>
          <Route path='/mentale-gezondheid' element={<MentaleGezondheid />} />
          <Route path='/subsidies-medische-studies' element={<SubsidiesMedischeStudies />}/>
          <Route path='/Stedelijk1' element={<Stedelijk1 />}/>
          <Route path='/Stedelijk2' element={<Stedelijk2 />}/>
          <Route path='/Stedelijk3'  element={<Stedelijk3 />}/>
          {/* laatste 3 moeten nog aangepast worden naar daadwerkelijke titels */}

      </Routes>
      


    </>
  )
}


