import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


function CategoryList({ categoryList }) {
  return (

      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-5'>
        {categoryList.map((category, index) => {
          return (
            <Link href = {'/products-categories/'+category.name} className='flex flex-col items-center gap-2 bg-green-100 p-3 rounded-lg shadow-lg cursor-pointer group' key={index}>
              <Image
                className='transition-transform duration-200 ease-in-out group-hover:scale-125'
                src={`${category?.icon[0]?.url}`}
                alt='icon'
                width={30}
                height={30}
              />
              <h2 className='text-green-800'>{category.name}</h2>
            </Link>
          );
        })}

    </div>
  );
}

export default CategoryList;
