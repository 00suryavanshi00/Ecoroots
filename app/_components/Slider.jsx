import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'
  

function Slider({sliderList}) {
  console.log('this is the slider list', sliderList)

  return (
<Carousel>
  <CarouselContent>
    
  {sliderList.map((slider,index)=>{
    return <CarouselItem key={index}>
    <Image className='w-full h-[200px] md:h-[400px] object-cover rounded-2xl p-10' src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${slider.image[0].url.trimEnd()}`} width={1000} height={300} alt='slider'/>
  </CarouselItem>
  })}

  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  )
}

export default Slider
