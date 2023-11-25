import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

//get
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    let result = await prisma.product.findMany();

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

    const makehash = await bcrypt.hash(data.password, 10);

    let result = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: makehash,
      },
    });

    return NextResponse.json({
      status: true,
      user: result,
    });
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

    const updateData = await prisma.product.update({ where: { id }, data });

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
