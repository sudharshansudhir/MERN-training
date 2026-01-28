import React, { useEffect, useState } from 'react'
import "../css/Product.css"
import { NavLink } from 'react-router-dom'

const Products = () => {
    // const products=[
    //     {name:"p1",price:23,rating:4.5},
    //     {name:"p2",price:24,rating:4.5},
    //     {name:"p3",price:25,rating:4.5},
    //     {name:"p4",price:26,rating:4.5},
    //     {name:"p5",price:27,rating:4.5},
    // ]
    const [products,setProducts]=useState()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data));
    },[])
  return (
    <div>
        <h2>Products</h2>
        <div className='products'>
        {products&&products.map((product)=>{
            return <div className='product-card'>
                <img src={product.image} alt={product.title} className='image-card'/>
                <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            <NavLink to={`/product/${product.id}`}>BUY NOW</NavLink>
            </div>
        })}
        {/* {products} */}
        </div>
    </div>
  )
}

export default Products