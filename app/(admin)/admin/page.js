import AddProdut from "@/components/AddProdut";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <h1>admin here</h1>

      <AddProdut />
    </>
  );
}
