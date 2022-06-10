import './App.css';
import React, { useState } from 'react'
import Navbar from './components/navbar';
import Products from './components/products';
import Categories from './components/categories';


function App() {
    const [item, setitem] = useState("");
    return ( 
    <div className = "App">
        <Navbar/>
        
        <h4> Products </h4>
        <div className = "Both">
         
        <Categories setitem={setitem}/> 
           
        <Products item={item}/>
        
        </div>
        </div>
    );
}

export default App;
