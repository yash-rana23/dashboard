
import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Dash from './components/Dash'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
 

  return (

    <div className='w-full h-full flex'>
    
      <Navbar />
      <div className='bg-[#FAFAFA] w-[20%] '>
        <Profile/>
      </div>
      <Dash/>
      <Form/>

    </div>
  )
}

export default App
