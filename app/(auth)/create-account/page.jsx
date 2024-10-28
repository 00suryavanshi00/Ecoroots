'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { registerUser } from '@/app/_utils/GlobalApi'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'



function CreateAccount() {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const router = useRouter()



    const onCreateAccount= async ()=>{

        try{

            const res = await registerUser(username,email, password)
    
    
            sessionStorage.setItem('user', JSON.stringify(res.user))
            sessionStorage.setItem('jwt',res.jwt)
            toast("Account Created Successfully!")
            router.push('/')
        }
        catch(e){
            toast("Oopsieeee!")
        }
    }

  return (
    <div className='flex items-baseline justify-center align-middle my-10'>
      <div className='flex flex-col items-center justify-center p-10 bg-green-100 bg-opacity-30 '>
      <Image src='https://storage.googleapis.com/ecoroots_assets_bucket/Eco_Roots_Sans_deb523bbe8/Eco_Roots_Sans_deb523bbe8.svg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=590516909829-compute%40developer.gserviceaccount.com%2F20241028%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241028T211052Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=df6968cb63e243e7215db0a64f9d1e91a5142c7373dd86e9c555d676a55bb05a1b422c455b71bae1745efdd3b72156eec6dc856f49e194a7b3f868050f04ab818dd7b59e56ec8bf25a1af88193893dc934bee09c9c39a7c05c0121bd88f733189bfc56fb2c1b3b578194f89293e1db34d8bd1e185dcc27b2bf09702bcd0675f86a60075ccc59581075fa53d0203304a7903d744d53d1d36402ea9c7205adca0bf95eaeb7f1a6e245b6c6c06d7966df9147cc54bc73d7ebda51e705b6549395808903bac76d554459e8fa75f70992ab55abd7573c3a6291b2398373ccb5ace6f2b81c1996abcebbcb65174f3df62f279aa19bf5f2f5c924cfc1dd480d0c6ea24d' alt='logo' width={150} height={150}/>
        <h2 className='text-bold text-3xl pt-3'>Create Account</h2>
        <h2 className='text-gray-600 pt-2 sm:text-xs md:text-sm'>Enter email and password to create an account</h2>
      <div className='flex flex-col w-3/4 gap-3 mt-20'>
      <Input placeholder='Username' onChange={
        (e)=>setUserName(e.target.value)
      }/>
      <Input placeholder='Email : johndoe@ecoroots.com'onChange={
        (e)=>setEmail(e.target.value)
      }/>
      <Input placeholder='Password : mygirl_name_password' type='password' onChange={
        (e)=>setPassword(e.target.value)
      }/>
      <Button onClick={()=>onCreateAccount()} disabled={!(username || email || password)}>Lets Create My Garden</Button>
      <p>We are buddies already? 
        <Link href={"/sign-in"} className='text-blue-500'>Which account we know you from?</Link>
      </p>

      </div>
      </div>

    </div>
  )
}

export default CreateAccount
