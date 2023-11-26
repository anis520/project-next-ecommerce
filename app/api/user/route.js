import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

//get
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    if (id) {
      let result = await prisma.user.findUnique({ where: { id } });

      return NextResponse.json({ status: true, result });
    } else {
      let result = await prisma.user.findMany();

      return NextResponse.json({ status: true, result });
    }
  } catch (error) {
    return NextResponse.json({ status: false, message: error.message });
  }
}
//post
export async function PUT(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    const data = await req.json();

    const result = await prisma.user.update({ where: { id }, data });

    return NextResponse.json({
      status: true,
      result,
      message: result.name + " update successfull",
    });
  } catch (error) {
    return NextResponse.json({ status: false, message: error.message });
  }
}

//delete
export async function DELETE(req, res) {
  try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));

    const deleteData = await prisma.user.delete({ where: { id } });

    return NextResponse.json({ status: true, deleteData });
  } catch (error) {
    return NextResponse.json({ status: false, message: error.message });
  }
}
