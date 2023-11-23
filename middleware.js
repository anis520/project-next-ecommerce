import { checkCookieAdmin, checkCookieUser } from "./utils/middlewareUtiity";

const adminPaths = ["/admin/product/add", "/admin"];
const userPaths = ["/account"];
export const middleware = (req) => {
  //   console.log(req.nextUrl.pathname.startWit);
  if (adminPaths.includes(req.nextUrl.pathname)) {
    return checkCookieAdmin(req);
  }
  if (userPaths.includes(req.nextUrl.pathname)) {
    return checkCookieUser(req);
  }
};
