"use client";
import { getProductByPage } from "@/service/productService";
import useStore from "@/state/store";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({ allProduct: null, total: null });

  console.log(data);
  const handlePage = (data) => {
    setPage(data);
  };

  useEffect(() => {
    (async () => {
      setData({ allProduct: null, total: null });
      const get = await getProductByPage({ page, size: 2 }, setData);
    })();
  }, [page]);

  return (
    <div className=" ">
      <p>Shop page</p>

      <div className="grid   sm:grid-cols-2   md:grid-cols-3   lg:grid-cols-5 gap-3 ">
        {!data.allProduct && <p className="my-6">Loding. . . . . .</p>}

        {data.allProduct &&
          data.allProduct.map((item) => {
            return (
              <div
                className="bg-gray-200 rounded-md shadow-md p-5"
                key={item.id}
              >
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.stock > 0 ? "In-stock" : "Out-stock"}</p>
              </div>
            );
          })}
      </div>

      <div>
        <ul className="flex gap-5 m-5">
          <li
            onClick={() => handlePage(0)}
            className={`hover:bg-slate-200 px-2 rounded-md cursor-pointer  ${
              page == 0 && "bg-blue-400 text-white  hover:bg-blue-300"
            }  `}
          >
            1
          </li>
          <li
            onClick={() => handlePage(1)}
            className={`hover:bg-slate-200 px-2 rounded-md cursor-pointer  ${
              page == 1 && "bg-blue-400 text-white hover:bg-blue-300"
            }  `}
          >
            2
          </li>
          <li
            onClick={() => handlePage(2)}
            className={`hover:bg-slate-200 px-2 rounded-md cursor-pointer  ${
              page == 2 && "bg-blue-400 text-white hover:bg-blue-300"
            }  `}
          >
            3
          </li>
          <li
            onClick={() => handlePage(3)}
            className={`hover:bg-slate-200 px-2 rounded-md cursor-pointer  ${
              page == 3 && "bg-blue-400 text-white hover:bg-blue-300"
            }  `}
          >
            4
          </li>
          <li
            onClick={() => handlePage(4)}
            className={`hover:bg-slate-200 px-2 rounded-md cursor-pointer  ${
              page == 4 && "bg-blue-400 text-white hover:bg-blue-300"
            }  `}
          >
            5
          </li>
          <li
            onClick={() => handlePage(5)}
            className={`hover:bg-slate-200 px-2 rounded-md cursor-pointer  ${
              page == 5 && "bg-blue-400 text-white hover:bg-blue-300"
            }  `}
          >
            6
          </li>
        </ul>
      </div>
    </div>
  );
}
