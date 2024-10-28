import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function TopCategory({ categoryList }) {
    return (
        <div className="mx-7 md:mx:20 overflow-x-auto p-2 mt-5 flex justify-center">
            <div className="flex md:grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-5 min-w-full md:min-w-0">
                {categoryList.map((category, index) => (
                    <Link 
                        href={'/products-categories/' + category.name}
                        className="flex flex-col items-center gap-2 bg-green-100 p-3 rounded-lg shadow-lg cursor-pointer group w-[150px] min-w-[100px]"
                        key={index}
                    >
                        <Image
                            className="transition-transform duration-200 ease-in-out group-hover:scale-125"
                            src={`${category?.icon[0]?.url}`}
                            alt="icon"
                            width={30}
                            height={30}
                        />
                        <h2 className="text-green-800">{category.name.replace("%20"," ")}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TopCategory;
