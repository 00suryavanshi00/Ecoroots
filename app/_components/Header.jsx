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
  
import { CircleUserRound, LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { getCategory } from '../_utils/GlobalApi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Header() {


    const router = useRouter()
    const [categorylist, setCategoryList] = useState([]);
    useEffect(()=>{
        getCategoryLIst();
    },[])

    const getCategoryLIst=()=>{
        getCategory().then(response=>{

            setCategoryList(response.data.data)}
        )
    }
    const isLoggedIn = sessionStorage.getItem('jwt')

    function logOut(){

        sessionStorage.clear()
        router.push('/sign-in')

    }

  return (
    <div className='p-4 shadow-sm flex justify-between'>
        <div className='flex items-center gap-10 '>

        <Image src='/ecorootslogo.svg' alt='logo' width={150} height={150}/>

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
  </DropdownMenuContent>
</DropdownMenu>


        <div className='md:flex gap-1 items-center border rounded-full p-2 px-5 hidden'>
            <Search className='h-4 w-4'/>
            <input type="text" placeholder='Search' className='outline-none'/>
        </div>
        

        </div>
        <div className='flex items-center gap-5'>
            <h2 className='flex items-center gap-1'><ShoppingBag/>0</h2>
            {!isLoggedIn 
            ?
            <Link href={'/sign-in'}>
                <Button>Login</Button>
            </Link>
            : 
            <DropdownMenu>
                <DropdownMenuTrigger>

                    <CircleUserRound className='text-primary bg-green-100 rounded-full p-1 h-10 w-10'/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>My Orders</DropdownMenuItem>
    <DropdownMenuItem>

                <Button onClick={()=>logOut()}>Logout</Button>

    </DropdownMenuItem>
  </DropdownMenuContent>
            </DropdownMenu>
            }
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
