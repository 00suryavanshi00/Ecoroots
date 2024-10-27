import Image from "next/image";
import { Button } from "@/components/ui/button"
import Slider from "./_components/Slider";
import { getCategoryList, getSliders, getproducts } from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Footer from "./_components/Footer";

export default async function Home() {

  const sliderList = await getSliders();
  const categoryList = await getCategoryList();
  const productList = await getproducts();
  return (
    <div className="p-5 md:p-10 ">
      <Slider sliderList={sliderList}/>
      <CategoryList classname= '' categoryList={categoryList}/>

      <ProductList productList={productList}/>

      <Image src='https://storage.googleapis.com/ecoroots_assets_bucket/Eco_Roots_Sans_2_c64427f922/Eco_Roots_Sans_2_c64427f922.svg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=590516909829-compute%40developer.gserviceaccount.com%2F20241027%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241027T232951Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=c35203c0055670ad6c8ba51d9016e74d51bba35fbe94ef336a74c5af2bf6c45798196bdca18e7d4e52c712672808b259ed612195e681d52d302dfb951eeec51b9da18984818430e88f694880a5bab531eb9a1223816354a979a9869b06abd08d0b4795b36108922701acdb6d73bbb0ba9428535e3972e8d7ebfbae2dd128ac18b87a09d928169263a8aa4fa245fe44d011ec5100c4d3ee4e2955170a871a0b654cd7dfc6ab13dc5c3f1d7a9c8662bfd8e56e8528c3caee432df5543e557569d9b12b5a205104b525389c6b30c9fa506ba7effc28067c2ca27e3115e1bebceb1675a3336cdb018079989ceeadfee7079fffbb323fc25432c6bbe57c79c0f3cf1b' width={1000} className="w-full py-2 md:py-10 h-[400px] object-contain" height={300} alt="banner"/>

      <Footer />
    </div>
  );
}
