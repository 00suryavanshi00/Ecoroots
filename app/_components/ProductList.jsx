import Image from 'next/image'
import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-2xl py-5 cursor-default'> Our Popular Products</h2>
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-7  mt-5'>
            {productList.map((product, index)=>{
              if (index <= 10){

                return <ProductItem product={product} index={index}/>
              }
            })}
        </div>
    </div>
  )
}

export default ProductList
