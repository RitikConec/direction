import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Productlist from './components/productlist.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import ProductForm from './components/form.jsx'
import AddProduct from './pages/addProduct.jsx'



function App() {

  

  const [theme, setTheme] = useState('light');
 
  return(
    <Router>
      <div className='container'>
        <Navbar theme={theme} setTheme={setTheme}/>

        <Routes>
          <Route path='/' element={
            <>
          <Home/>
          <Productlist/>
          </>
        }/>
          <Route path='/About' element={<About/>}/>
          <Route path='/form' element={<ProductForm/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          

        </Routes>

      </div>
    </Router>
  )

}
export default App
