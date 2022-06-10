import React, { useEffect, useState } from 'react'
import axios from 'axios'



const url = "https://fakestoreapi.com/products/categories"
export const Categories = ({setitem}) => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
     axios.get(url).then(res=> setCategories(res.data))
      }, [])
    return ( 
    <div className="categories">
          <li onClick = {()=> setitem("")}> All</li>
          {categories.map((item)=>
          {return (<li onClick = {() => {setitem(item)}} key={item}>{item}</li>)})}
            </div>
    )
}

export default Categories
