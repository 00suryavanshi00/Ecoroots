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

      <Image src="https://storage.googleapis.com/ecoroots_assets_bucket/Eco_Roots_Sans_2_c64427f922/Eco_Roots_Sans_2_c64427f922.svg" className="w-full py-2 md:py-10 h-[400px] object-contain" height={300} width={1000} alt="banner"/>

      <Footer />
    </div>
  );
}
