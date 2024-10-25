import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductItemDetail from './ProductItemDetail';

function ProductItem({ product, index }) {
  if (!product.images || product.images.length === 0) {
    console.log("This product doesn't have an image", product);
    return null; // Skip this product if images are not available
  }

  return (
    <div className='flex flex-col items-center gap-3 bg-green-100 p-3 rounded-lg shadow-lg cursor-pointer
      hover:scale-110 hover:shadow-md transition-all ease-in-out'
      key={index}>
      <Image
        className='h-[200px] w-[200px] md:h-[250px] md:w-[250px] rounded-2xl object-cover'
        src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${product.images[0].url}`}
        alt='icon'
        width={500}
        height={200}
      />
      <h2 className='text-green-800 text-sm md:text-base'>{product.name}</h2>

     
      <h3 className='flex justify-center w-full align-bottom text-sm md:text-lg'>${product.price}</h3>
      <Dialog>
        <DialogTrigger>
          <Button className='px-4 py-2 md:px-5 md:py-3'>Add to cart</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <ProductItemDetail product={product} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductItem;
