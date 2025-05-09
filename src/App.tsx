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
import { Wetsvoorstel } from './pages/Site/SitePages/Wetsvoorstel';
import { Opgericht } from './pages/Site/SitePages/SiteInhoud/Nieuws/Opgericht';





export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      

        <Routes>
          <Route path='/' element={<Home />}/>  
          <Route path='*' element={<Navigate to='/' />}/>
          <Route index element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Over-ons'element={<OverOns />}/>
          <Route path='/Nieuws' element={<Nieuws />}/>
          <Route path='/Wetsvoorstel' element={<Wetsvoorstel />}/>
          <Route path='/Preventieve-gezondheidszorg' element={<PreventieveGezondheidszorg />}/>
          <Route path='/Mentale-gezondheid' element={<MentaleGezondheid />} />
          <Route path='/Subsidies-medische-studies' element={<SubsidiesMedischeStudies />}/>
          <Route path='/Sportprogramma-Ouderen' element={<Stedelijk1 />}/>
          <Route path='/School-Vertrouwenspersoon' element={<Stedelijk2 />}/>
          <Route path='/Stedelijk3'  element={<Stedelijk3 />}/>
          <Route path='/Nieuws/Opgericht' element={<Opgericht />}/>
          {/* laatste 3 moeten nog aangepast worden naar daadwerkelijke titels */}

      </Routes>
      


    </>
  )
}


