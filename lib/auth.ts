import jwt from 'jsonwebtoken';

let ACCESS_TOKEN_SECRET = "86dd4cc439198c80fee1aa54d751b999e621058a56473c4cfc137bfd06bcb761240f541f5fab37c15701e13c024fef0c79a6d8d1a18f321a15f9c995cfc11711"
let REFERESH_TOKEN_SECRET = "28fa843e1cd3952413513df9237e627da4ebfa84067306590771d2c5ddafbc12010be7e4dda1782e2bedb85a88e35dc3ec5d509dd9809657909ea49ee6666ee7"

// Generate Access Token
export const signAccessToken = (payload: object) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15m' });
};

// Generate Refresh Token
export const signRefreshToken = (payload: object) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '7d' });
};

// Verify Access Token
export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
};

// Verify Refresh Token
export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!);
};
