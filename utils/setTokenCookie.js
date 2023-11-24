import { createToken } from "./jwtHelper";

export const setToken = async (email, role) => {
  let token = await createToken(email, role);
  return {
    "Set-Cookie": `token=${token}; Max-Age=1d; Secure; HttpOnly; Path=/; SameSite=Strict`,
  };
};
