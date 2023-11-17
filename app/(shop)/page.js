import { getProductService } from "@/service/productService";
import useStore from "@/state/store";
import Image from "next/image";

export default async function Home() {
  const data = await getProductService();
  console.log(data);

  return (
    <div className=" ">
      <p>Home products</p>

      <div className="grid   sm:grid-cols-2   md:grid-cols-3   lg:grid-cols-5 gap-3 ">
        {data?.map((item) => {
          return (
            <div className="bg-gray-200 rounded-md shadow-md p-5" key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.stock > 0 ? "In-stock" : "Out-stock"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
