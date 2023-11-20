import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//get
export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    const prisma = new PrismaClient();
    console.log(name);
    let result = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: name } },
          { category: { contains: name } },
          { photo: { contains: name } },
        ],
      },
    });

    return NextResponse.json({ status: true, result });
  } catch (error) {
    return NextResponse.json({ status: false, msg: error.message });
  }
}
