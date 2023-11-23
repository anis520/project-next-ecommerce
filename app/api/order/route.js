import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//get
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    let result = await prisma.order.findMany({
      include: { User: true, Product: true },
    });

    return NextResponse.json({ status: true, result });
  } catch (error) {
    return NextResponse.json({ status: false, msg: error.message });
  }
}
//post
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();

    const data = await req.json();
    console.log(data);
    let result = await prisma.order.create({
      data: {
        userId: data.userId,
        productid: data.productid,
        amount: parseInt(data.amount),
        count: parseInt(data.count),
        status: data.status,
        type: data.type,
      },
    });

    console.log("heided");
    return NextResponse.json({ status: true, result });
  } catch (error) {
    return NextResponse.json({ status: false, msg: error.message });
  }
}
//put
export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    const data = await req.json();

    const updateData = await prisma.user.update({ where: { id }, data });

    return NextResponse.json({ status: true, updateData });
  } catch (error) {
    return NextResponse.json({ status: false, msg: error.message });
  }
}
//delete
export async function DELETE(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    const deleteData = await prisma.product.delete({ where: { id } });

    return NextResponse.json({ status: true, deleteData });
  } catch (error) {
    return NextResponse.json({ status: false, msg: error.message });
  }
}
