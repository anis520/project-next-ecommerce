import { headers } from "@/next.config";
import { createToken } from "@/utils/jwtHelper";
import { setToken } from "@/utils/setTokenCookie";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  let email = data.email;
  console.log(data);
  let password = data.password;

  let cookie = await setToken(email, "user");
  return NextResponse.json(
    { status: true, cookie },
    { status: 200, headers: cookie }
  );
}

export async function GET(req, res) {
  cookies().delete("token");
  return NextResponse.json({ status: true, message: "logout success" });
}
