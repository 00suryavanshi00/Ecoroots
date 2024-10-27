import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

function ProductItemDetail({ product }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <Image
        src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${product.images[0].url}`}
        alt='image'
        width={300}
        height={300}
        className='rounded-2xl object-contain'
      />
      <div className='flex flex-col gap-5'>
        <div>

        <h2 className='text-xl md:text-2xl text-primary'>{product.name}</h2>
        {product.categories != null && <h3 className='text-sm'>{product.categories.name}</h3>}
        </div>
        <h2 className='text-sm md:text-base'>{product.description}</h2>
        <div className='flex gap-2 mt-4'>
          <h2 className='text-sm font-bold'>Soil Type :</h2>
          <h2 className='text-sm'>{product.soilType}</h2>
        </div>
        <div className='flex gap-2 mt-3 align-middle'>
          <h2 className='text-2xl font-semibold'>${product.price}</h2>
        </div>
        <div className='flex gap-2 items-center'>
          <h2 className='font-bold'>Quantity</h2>
          <div className='flex gap-2'>
            <Button>-</Button>
            <Button>1</Button>
            <Button>+</Button>
          </div>
        </div>
        <div className='mt-3 flex justify-end'>
          <Button>Add to Cart <ShoppingBag /></Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItemDetail;
