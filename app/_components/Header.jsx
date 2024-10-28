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
import Link from 'next/link'

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

        <img src='https://storage.googleapis.com/ecoroots_assets_bucket/Eco_Roots_Sans_deb523bbe8/Eco_Roots_Sans_deb523bbe8.svg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=590516909829-compute%40developer.gserviceaccount.com%2F20241028%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241028T211052Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=df6968cb63e243e7215db0a64f9d1e91a5142c7373dd86e9c555d676a55bb05a1b422c455b71bae1745efdd3b72156eec6dc856f49e194a7b3f868050f04ab818dd7b59e56ec8bf25a1af88193893dc934bee09c9c39a7c05c0121bd88f733189bfc56fb2c1b3b578194f89293e1db34d8bd1e185dcc27b2bf09702bcd0675f86a60075ccc59581075fa53d0203304a7903d744d53d1d36402ea9c7205adca0bf95eaeb7f1a6e245b6c6c06d7966df9147cc54bc73d7ebda51e705b6549395808903bac76d554459e8fa75f70992ab55abd7573c3a6291b2398373ccb5ace6f2b81c1996abcebbcb65174f3df62f279aa19bf5f2f5c924cfc1dd480d0c6ea24d' alt='logo' width={150} height={150}/>

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
        <Link href={'/products-categories/' + category.name} key={index}>
        <DropdownMenuItem className='flex gap-4 items-center p-2' key={index}>
            <Image src={`${category?.icon[0].url}`} alt='logo' width={30} height={30}/>
            <h2 className='text-primary text-lg'>{category.name}</h2>
        </DropdownMenuItem></Link>
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
            <h2 className='flex items-center gap-1'><ShoppingBag/>1</h2>
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
