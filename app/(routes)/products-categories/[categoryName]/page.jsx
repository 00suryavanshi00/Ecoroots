import { getCategoryList, getProdFromCategory } from '@/app/_utils/GlobalApi'
import React from 'react'
import TopCategory from './_components/TopCategory';
import ProductList from '@/app/_components/ProductList';

async function ProductCategory({ params }) {
    const productListFromCat = await getProdFromCategory(params.categoryName)
    const categoryList = await getCategoryList();
    console.log("#$%^&*(eight here")
    console.log(productListFromCat)
  return (
    <div>
        <div className='flex w-full justify-center mt-3'>
        <h2 className='p-4 bg-primary text-white font-bold text-3xl text-center w-1/2 rounded-full'>
               {params.categoryName}
            </h2>
            </div>
            <TopCategory categoryList={categoryList}/>
            <div className='p-5 md:p-10 '>

            <ProductList productList={productListFromCat}/>
            </div>
    </div>
  )
}

export default ProductCategory
