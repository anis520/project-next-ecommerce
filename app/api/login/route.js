import { headers } from "@/next.config";
import { createToken } from "@/utils/jwtHelper";
import { setToken } from "@/utils/setTokenCookie";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();

    const data = await req.json();
    let email = data.email;
    // get user data
    const user = await prisma.user.findUnique({ where: { email: data.email } });

    if (!user) {
      return NextResponse.json(
        { status: false, message: "not found" },
        { status: 404 }
      );
    }
    const passverify = await bcrypt.compare(data.password, user.password);
    if (!passverify) {
      return NextResponse.json(
        { status: false, message: "password not match" },
        { status: 404 }
      );
    }

    let cookie = await setToken({ email: user.email, role: user.role });
    return NextResponse.json(
      { status: true, message: "login successfull", user },
      { status: 200, headers: cookie }
    );
  } catch (error) {
    return NextResponse.json({ status: false, message: error.message });
  }
}

export async function GET(req, res) {
  cookies().delete("token");
  console.log("logout");
  return NextResponse.json({ status: true, message: "logout success" });
}
