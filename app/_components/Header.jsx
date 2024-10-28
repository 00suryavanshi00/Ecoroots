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

        <Image src='https://storage.googleapis.com/ecoroots_assets_bucket/Eco_Roots_Sans_deb523bbe8/Eco_Roots_Sans_deb523bbe8.svg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=590516909829-compute%40developer.gserviceaccount.com%2F20241028%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241028T173847Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=684635be0ac45639834cc00cea49114f689d4a4a6f0449e86a4adc4ef433863982ce848eb04721bb15d05449257ffa25518710742be18dfdb375dc71ea15e0a9a7617ce905a3c65a874515117c8ee085962031f8a26258ac35b127968f81b2c0ed3a2a90812ba099f6a364d29c920a973ea4aea0657f3c550a18400e0dc9c2bed9d95c3e7b5471b700002fdd0cda760a720bbf61f62463dd9dacc5172b02140e22690786853e48eaa0fd9e994dde890fb5597a816795e1045dc285af3f0e374e5d1a40d932bfe5484530be04809c1be7547dd3b63998513c133676ec26251ac096ba7dc93dd2b189f1775e5fe031125b4516c2e5b85481c0d38a303e6e59e214' alt='logo' width={150} height={150}/>

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
        <Link href={'/products-categories/' + category.name}>
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
            <h2 className='flex items-center gap-1'><ShoppingBag/>0</h2>
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
