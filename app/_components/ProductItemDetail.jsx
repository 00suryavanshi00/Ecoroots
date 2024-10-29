"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { addProductToCart } from '../_utils/GlobalApi';
import { toast } from 'sonner';

function ProductItemDetail({ product }) {

  const [quantity, setQuantity] = useState(1);

  const jwt = sessionStorage.getItem('jwt')
  const user = JSON.parse(sessionStorage.getItem('user'))
  const router = useRouter()

  const addToCart=(product)=>{

    if(!jwt){
      router.push('/sign-in')
    }
    const data = {
      quantity: quantity,
      amount: product.price,
      product: product.id,
      users_permissions_users: user.id
    }
    const response = addProductToCart(data, jwt)

    console.log(response)
    toast('Added to Cart')
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <Image
        src={`${product.images[0].url}`}
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
          <Button onClick={()=>addToCart(product)}>Add to Cart <ShoppingBag /></Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItemDetail;
