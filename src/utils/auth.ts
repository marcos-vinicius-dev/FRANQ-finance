import CryptoJS from "crypto-js";
const SESSION_TIME = 10 * 60 * 1000;

export const hashPassword = (password: string) => {
  return CryptoJS.SHA256(password).toString();
};

export const generateToken = (username: string) => {
  const token = {
    username,
    expiry: Date.now() + SESSION_TIME,
  };
  return btoa(JSON.stringify(token));
};

export const verifyToken = (token: string) => {
  try {
    const decoded = JSON.parse(atob(token));
    return decoded.expiry > Date.now() ? decoded : null;
  } catch (error) {
    return null;
  }
};
