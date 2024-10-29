'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { logInUser } from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'


function SignIn() {

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const router = useRouter()

    useEffect(()=>{
        const jwt = sessionStorage.getItem('jwt');

        if(jwt){
            toast("You are already logged in!")
            router.push('/')
        }
    },[])

    const onSignIn= async (email, pass)=>{

        try{
            console.log('right here')
            const res = await logInUser(email, pass)
    
    
            sessionStorage.setItem('user', JSON.stringify(res.user))
            sessionStorage.setItem('jwt',res.jwt)
            toast("Logged In Successfully!")
            router.push('/')
        }
        catch(e){
            toast("Oopsieeee!")
        }
    }


    return (
        <div className='flex items-baseline justify-center align-middle my-10'>
          <div className='flex flex-col items-center justify-center p-10 bg-green-100 bg-opacity-30 '>
          <Image style={{
                  color: undefined, // This is required to prevent the inline style of `next/image`
                }} src='/ecorootslogo.svg' alt='logo' width={150} height={150}/>
            <h2 className='text-bold text-3xl pt-3'>Sign In To Your Account</h2>
            <h2 className='text-gray-600 pt-2 sm:text-xs md:text-sm'>Enter email and password to create an account</h2>
          <div className='flex flex-col w-3/4 gap-3 mt-20'>

          <Input placeholder='Email : johndoe@ecoroots.com'onChange={
            (e)=>setEmail(e.target.value)
          }/>
          <Input placeholder='Password : mygirl_name_password' type='password' onChange={
            (e)=>setPassword(e.target.value)
          }/>
          <Button onClick={()=>onSignIn(email, password)} disabled={!(email || password)}>Sign In</Button>
      <p>First time trying us out? 
        <Link href={"/sign-in"} className='text-blue-500'>Create your account</Link>
          </p>
    
          </div>
          </div>
    
        </div>
      )
}

export default SignIn
