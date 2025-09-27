import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import product from './data/product.js'




function App() {
  const [theme, setTheme] = useState('light');
 


  return (
    <>
     <div className='container'>
      <Navbar theme={theme} setTheme={setTheme} />
     </div>
    </>
  )

}
export default App
