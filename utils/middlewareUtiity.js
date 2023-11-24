import { NextResponse } from "next/server";
import { verifyToken } from "./jwtHelper";

export const checkCookieAdmin = async (req) => {
  try {
    let token = req.cookies.get("token");
    let payload = await verifyToken(token["value"]);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", payload["email"]);

    if (payload["role"] == "admin") {
      return NextResponse.next({ request: { headers: requestHeaders } });
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/", req.url));
  }
};

export const checkCookieUser = async (req) => {
  try {
    let token = req.cookies.get("token");
    let payload = await verifyToken(token["value"]);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", payload["email"]);

    if (payload["role"] == "user" || payload["role"] == "admin") {
      return NextResponse.next({ request: { headers: requestHeaders } });
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};
export const checkCookieauth = async (req) => {
  try {
    let token = req.cookies.get("token");
    let payload = await verifyToken(token["value"]);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", payload["email"]);

    if (payload["role"] == "user" || payload["role"] == "admin") {
      return NextResponse.redirect(new URL("/account", req.url));
    }
  } catch (error) {
    return NextResponse.next();
  }
};
