import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../css/Product.css"

const Product = () => {
    const [product,setProduct]=useState(null)
    const id=useParams()
    console.log(id)
    useEffect(()=>{
fetch(`https://fakestoreapi.com/products/${id.id}`)
  .then(response => response.json())
  .then(data => setProduct(data));
    },[])

  return (
    <div>
        Your Product
        <div className='outer-product'>
    {product &&
    <div className='product-each'>
        <img src={product.image} alt={product.title}/>
        <h1>{product.title}</h1>
        <h1>{product.price}</h1>
        <p>{product.description}</p>
    </div>
    }</div>
 </div> )
}

export default Product