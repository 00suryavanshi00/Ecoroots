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

        <Image src='https://storage.googleapis.com/ecoroots_assets_bucket/Eco_Roots_Sans_deb523bbe8/Eco_Roots_Sans_deb523bbe8.svg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=590516909829-compute%40developer.gserviceaccount.com%2F20241028%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241028T164433Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=3057bfdb5983173f6b54279714c515bd9b8d8e2be93855363d5635770b1f43895ef23f3231892519a51b490a6877f1a52eac4a7e3fcb1b0d296113844a32d47e78f5dbe210adf0d7f417218867749469a2f8d7599b0cc9b5d69561137cba32b52c9f6de4a57ddbe3a734cad9761320f303eecd9f0979457d8e16c119ede379627f4964441180a49a9b964c8a64687a75fb3871fe28a34de79a52ed35da208fadb5af529ce78ee2ee9c81f6ca36c8eb7f0b3150a533f55336939d11b62535256a8bd940ca887eea1aedf8fd50a154c8a9ec6b672b0e17a05c303292afbf6a1a635f8b1ab9ab9aaa7cd389f965c83994daf27c689b5f542306ed81b647fe8ea3f8' alt='logo' width={150} height={150}/>

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
