import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

function Slider({sliderList}) {
  return (
    <Carousel>
    <CarouselContent>
      
      {sliderList.map((slider, index)=>{
        return <CarouselItem key={index}>
          <Image 
                className="w-full h-[400px] object-cover"
                src={`${slider?.image[0]?.url.trim()}`}
                width={1920}
                height={1080}
                alt="slider"
                priority={index === 0}
              />
        </CarouselItem>
})}

    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  
  );
}

export default Slider;









// import React from 'react';
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from 'next/image';

// function Slider({sliderList}) {
//   return (
//     <div className="w-full -ml-0 p-0">
//       <Carousel className="w-full -ml-0 p-0">
//         <CarouselContent className="-ml-0 p-0">
//           {sliderList.map((slider,index) => (
//             <CarouselItem key={index} className="relative pl-0 -ml-0 p-0">
//               <Image 
//                 className="w-full object-fit rounded-2xl bg-slate-300 -ml-0 p-0"
//                 src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${slider.image[0].url.trim()}`}
//                 width={1920}
//                 height={1080}
//                 alt="slider"
//                 priority={index === 0}
//               />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="left-2" />
//         <CarouselNext className="right-2" />
//       </Carousel>
//     </div>
//   );
// }

// export default Slider;