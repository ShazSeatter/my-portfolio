import { useState } from 'react';
import Navbar from './components/Navbar';
import Heropage from './container/Heropage';



function App() {

  return (
    <>
      <div>
      <Navbar />
      </div>
      <div>
        <Heropage />
      </div>
    </>
  )
}

export default App
