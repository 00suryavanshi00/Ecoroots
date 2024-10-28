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

      <Image src='https://storage.googleapis.com/ecoroots_assets_bucket/Eco_Roots_Sans_2_c64427f922/Eco_Roots_Sans_2_c64427f922.svg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=590516909829-compute%40developer.gserviceaccount.com%2F20241028%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241028T173847Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=92297df1b1644cb417bfcb2b7a9423918193b725bc3270ed727eeb9a55f14c2a8e2c2ea61d925ce65e721c4610a7d8cc7e5f8efa5ba5e7aa4efeb00d33b201a8445e1de2cdd69635536aa710f4661d001d937d30432e8d32cbe775d27d65401d7085dac5b0d0bce4d4ce3b2e954a26d2a31d8ae3d840a4274dc2e3e07a547bbbea5b9b00c6ad41179bcb4bf678cf290e03d1903d976a03f0799c9594eb7bb373a92f2f4c070b175e2ab19b335875c75786025e8196bfa919c89d1d648ede26c427e07176522da24c2abb812f0ed7cbb8f3f31a6c94db07d4bac3f0f76b913302ccc5d5992c45d4d57aae6cd63d6cb863bda45d7c1e401b8879c3f4738f930911' width={1000} className="w-full py-2 md:py-10 h-[400px] object-contain" height={300} alt="banner"/>

      <Footer />
    </div>
  );
}
