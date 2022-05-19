import { auth } from 'express-oauth2-jwt-bearer';

const checkJWT = auth({
  audience: process.env.AUTH_AUDIENCE,
  issuerBaseURL: process.env.AUTH_ISSUER_BASE_URL,
});

export default checkJWT;
