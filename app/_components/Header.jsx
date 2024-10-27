"use client"
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { getCategory } from '../_utils/GlobalApi'

function Header() {

    const [categorylist, setCategoryList] = useState([]);
    useEffect(()=>{
        getCategoryLIst();
    },[])

    const getCategoryLIst=()=>{
        getCategory().then(response=>{

            setCategoryList(response.data.data)}
        )
    }

  return (
    <div className='p-4 shadow-sm flex justify-between'>
        <div className='flex items-center gap-10 '>

        <Image src='https://storage.googleapis.com/ecoroots_assets_bucket/Eco_Roots_Sans_deb523bbe8/Eco_Roots_Sans_deb523bbe8.svg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=590516909829-compute%40developer.gserviceaccount.com%2F20241027%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241027T233353Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=d52ac7d5b3535474b773f32ffe4bad11710bffdf316fbe208f0d03398d139710d1989c42f75a4673c3dba0b14e90650bcab1eb390cd6bc8465e32338656b796468aceab5e3e2e6e1ba1f1ac2b76f5ac5ac884994013a572fc3c2a336ab81290717d2e35690f0b14b45637ba4adad33fd2c3a6176906c9e6dfa1f4cdb13f9c02c141b04802cfeeb970d8266ec56909c8fafb81749690e80928dbd92f8b059fd5012060676783c82af867ad1a4b6b138694c7f6afa909f6b1efbf5bd91730a8075b333c8a16c00889faf20bed0a0bfe847036ea4b52681833ae7975d21413e3c49988ba9d50ab0bc441ffc87df2435d5caba6912d5e76c0bd60f1df6a7638cdf3e' alt='logo' width={150} height={150}/>

            <DropdownMenu>
            <DropdownMenuTrigger className='outline-none'>
            <h2 className='md:flex gap-1 items-center border rounded-full p-2 px-10 text-primary shadow-lg hidden'>
                <LayoutGrid className='h-4 w-4'/>Category
            </h2>

  </DropdownMenuTrigger>
  <DropdownMenuContent>
    {/* <DropdownMenuLabel>Flowering Platn</DropdownMenuLabel> */}
    {/* <DropdownMenuSeparator /> */}
    {categorylist.map((category, index) => {

    return (
        <DropdownMenuItem className='flex gap-4 items-center p-2' key={index}>
            <Image src={`${category?.icon[0].url}`} alt='logo' width={30} height={30}/>
            <h2 className='text-primary text-lg'>{category.name}</h2>
        </DropdownMenuItem>
    );
})}
    {/* <DropdownMenuItem className='text-primary'>Flowering Plants</DropdownMenuItem>
    <DropdownMenuItem className='text-primary'>Non Flowering Plants</DropdownMenuItem>
    <DropdownMenuItem className='text-primary'>Succulents</DropdownMenuItem>
    <DropdownMenuItem className='text-primary'>Trees</DropdownMenuItem>
    <DropdownMenuItem className='text-primary'>Shrubs</DropdownMenuItem>
    <DropdownMenuItem className='text-primary'>Herbs</DropdownMenuItem>    
    <DropdownMenuItem className='text-primary'>Vines</DropdownMenuItem>
    <DropdownMenuItem className='text-primary'>Aquatic</DropdownMenuItem> */}
  </DropdownMenuContent>
</DropdownMenu>


        <div className='md:flex gap-1 items-center border rounded-full p-2 px-5 hidden'>
            <Search className='h-4 w-4'/>
            <input type="text" placeholder='Search' className='outline-none'/>
        </div>
        

        </div>
        <div className='flex items-center gap-5'>
            <h2 className='flex items-center gap-1'><ShoppingBag/> 10</h2>
            <Button>Login</Button>
        </div>
    </div>
  )
}

export default Header




// Flowering Plants (Angiosperms): Plants that produce flowers.

// Examples: Roses, Tulips, Sunflowers
// Non-Flowering Plants: Plants that don't produce flowers.

// Examples: Ferns, Mosses, Liverworts
// Succulents: Plants with thick, fleshy tissues adapted to store water.

// Examples: Aloe Vera, Cacti, Jade Plant
// Trees: Large, woody plants with a single stem (trunk).

// Examples: Oak, Pine, Maple
// Shrubs: Smaller woody plants, often with multiple stems.

// Examples: Hydrangea, Boxwood, Azalea
// Herbs: Non-woody plants, often used for flavoring or medicinal purposes.

// Examples: Basil, Mint, Rosemary
// Vines: Plants that climb or trail along surfaces.

// Examples: Ivy, Grapevine, Wisteria
// Aquatic Plants: Plants that grow in water environments.

// Examples: Water Lily, Lotus, Duckweed
// Grasses: Narrow-leaved, often used in lawns or agriculture.

// Examples: Bermuda Grass, Wheat, Bamboo
// Ferns: Spore-producing plants without seeds or flowers.

// Examples: Boston Fern, Staghorn Fern
// Bulb Plants: Plants that grow from bulbs or tubers.

// Examples: Tulips, Daffodils, Onions
// Ornamental Plants: Grown primarily for decorative purposes.

// Examples: Bonsai, Poinsettia, Marigold
// Carnivorous Plants: Plants that derive nutrients by trapping insects.

// Examples: Venus Flytrap, Pitcher Plant, Sundew
