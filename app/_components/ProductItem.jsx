import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'

function ProductItem({product, index}) {
    if (!product.images || product.images.length === 0) {
        console.log("this product is doesn't have image",product)
        return null; // Skip this product if images are not available
      }

      return (
        <div className='flex flex-col items-center gap-3 bg-green-100 p-3 rounded-lg shadow-lg cursor-pointer
        hover:scale-110 hover:shadow-md transition-all ease-in-out
        ' key={index}>
          <Image
            className='h-[200px] w-[200px] rounded-2xl'
            src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${product.images[0].url}`}
            alt='icon'
            width={500}
            height={200}
          />
          <h2 className='text-green-800 text-sm '>{product.name}</h2>
          <h3 className='flex justify-center w-full align-bottom'>${product.price}</h3>
          <Button className='px-5 py-3'>Add to cart</Button>
          {/* <Button className=' md:px- py-3'>Add to cart</Button> */}

        </div>
      );
}

export default ProductItem
