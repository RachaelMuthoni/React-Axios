import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './product'
import Categories from './categories';

const url = 'https://fakestoreapi.com/products'

const Products = ({ item }) => {
        const [products, setproducts] = useState(null)


        useEffect(() => {
            axios.get(url).then(res => setproducts(res.data))
        }, [])

        return ( 
        <>
       {
           item===""?
        <div className = 'products'> 
        {products ? products.map(product => (<Product product = { product }
        key = { product.id }/>)): "Loading..."}
        </div>
:
        <div className = 'products'> 
        {products ? products.filter(product=>product.category===item).map(product=>(<Product product={product} key={product.id} />)): "Loading..."}
        </div>
}

        </>  
    )
}

export default Products;
