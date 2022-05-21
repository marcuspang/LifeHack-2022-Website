export interface IProcessEnv {
  PORT: number;
  AUTH_AUDIENCE: string;
  AUTH_ISSUER_BASE_URL: string;
}

declare global {
  namespace NodeJS {
    // eslint-disable-next-line
    interface ProcessEnv extends IProcessEnv {}
  }
}
