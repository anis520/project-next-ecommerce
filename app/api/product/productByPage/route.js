import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//get
export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page"));
    const size = parseInt(searchParams.get("size"));
    const prisma = new PrismaClient();

    let total = await prisma.product.count();
    let result = await prisma.product.findMany({
      take: size,
      skip: page * size,
    });

    return NextResponse.json({ status: true, result: { data: result, total } });
  } catch (error) {
    return NextResponse.json({ status: false, msg: error.message });
  }
}
