import Link from "next/link";
import React from "react";

const Accout = () => {
  return (
    <div className="px-5 md:px-10">
      <p className="my-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ullam
        veniam reprehenderit suscipit qui cum voluptate eaque vero officiis
        dolores!
      </p>
      <Link href={"/admin"}>
        <button className="bg-indigo-400 text-white font-semibold rounded-md mb-5 p-2">
          Go to Admin panel
        </button>
      </Link>
    </div>
  );
};

export default Accout;
