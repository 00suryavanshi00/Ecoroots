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

      <Image src='https://storage.googleapis.com/ecoroots_assets_bucket/Eco_Roots_Sans_2_c64427f922/Eco_Roots_Sans_2_c64427f922.svg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=590516909829-compute%40developer.gserviceaccount.com%2F20241028%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241028T211052Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=4bafbfd1d0f9b2d6f1bd1dfc55e9415cbaa10fc3b0a55e960604e405353bc4c9181e2322e9ee77b7a407bc312c19eb17f1c3eef0bf2e5c122067c3a8af97eac2fe7c95e7f32a73d966a89974651f5520c5142628fc1efc3cf6c67b276458c30100a795cfad8aaf07f4b8961d3b294cfedc8f26083aa3ed8b1ed89d9ba8e6963c86f8969fe8dfa712ef111e816e841ce41f9f6b68d28e96a3b2c525d04009eeb6049788617f65a9b5399cb1456c91b9581047fae67dbc26b2d214d6228bd912aaaf8e45c73c238608574b7aebb4ed3a34ba0aa4ec3319dc41202af250b19c5a55a89fdfbf2308a025287eadeb10fe88d95119e266caf89e54c79ea492c0aa969a' width={1000} className="w-full py-2 md:py-10 h-[400px] object-contain" height={300} alt="banner"/>

      <Footer />
    </div>
  );
}
