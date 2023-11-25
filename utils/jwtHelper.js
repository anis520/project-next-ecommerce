import { SignJWT, jwtVerify } from "jose";

export const createToken = async (data) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const token = await new SignJWT(data)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION)
    .sign(secret);

  return token;
};
export const verifyToken = async (token) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  let verifiedToken = await jwtVerify(token, secret);
  return verifiedToken["payload"];
};
