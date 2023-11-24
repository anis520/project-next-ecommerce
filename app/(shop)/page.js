import AllProduct from "@/components/AllProduct";
import Category from "@/components/Category";
import HeroDiv from "@/components/HeroDiv";
import { getProductService } from "@/service/productService";
import useStore from "@/state/store";
import Image from "next/image";

export default async function Home() {
  return (
    <div className=" ">
      <HeroDiv />
      <Category />
    </div>
  );
}
