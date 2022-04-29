import React from 'react'
import Myprofile from './Myprofile';
import Settings from './Settings';
import Logout from './Logout';
import { Routes,Route } from 'react-router-dom'
import "./Content.css"

const Content = () => {
  return (
   <div className='main'>
   <Routes>
     <Route path="/Myprofile" element={<Myprofile/>} />
     <Route path="/Settings" element={<Settings/>}/>
     <Route path="/Logout" element={<Logout/>}/>
   </Routes>
   </div>
  )
}
export default Content