import {
  checkCookieAdmin,
  checkCookieUser,
  checkCookieauth,
} from "./utils/middlewareUtiity";

const adminPaths = ["/admin/product/add", "/admin"];
const userPaths = ["/account"];
const authPaths = ["/login", "/register"];
export const middleware = (req) => {
  //   console.log(req.nextUrl.pathname.startWit);
  if (adminPaths.includes(req.nextUrl.pathname)) {
    return checkCookieAdmin(req);
  }
  if (userPaths.includes(req.nextUrl.pathname)) {
    return checkCookieUser(req);
  }
  if (authPaths.includes(req.nextUrl.pathname)) {
    return checkCookieauth(req);
  }
};
