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

      <img src='https://storage.googleapis.com/ecoroots_assets_bucket/Eco_Roots_Sans_2_c64427f922/Eco_Roots_Sans_2_c64427f922.svg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=590516909829-compute%40developer.gserviceaccount.com%2F20241028%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241028T215437Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=dc4506267aef0c924427911a1a201396a86f7334afe317c677dd4c65e7d91576e27873be98e7d1ceffabe791cd3f00323198914a99225deadfcddfc4a7e345fd63b5e7ee6bc9dd520ba5a77a3c36efea16267bec55946df3f8ccadd3926f931ddef050f7395b17591bd4ec944c08bdaed9a0ae11812c060959b969456eddfd68853c085d89ce99232111a9273fd6a558e665ae034bbd13f3f3a9e9a91f61c46160c2dcf3559c5514f89bc2b4f4e7fd64147ad8c6ed1a71d91c7e129833cf76a22cc26186fcc4785783945b34c89b4b4dc88e6ddf74375e55f4b47992e22a96583eef1b7ef78f09758a18fdce6539a275a012ee1386c0acd25db43a74747383ef' width={1000} className="w-full py-2 md:py-10 h-[400px] object-contain" height={300} alt="banner"/>

      <Footer />
    </div>
  );
}
