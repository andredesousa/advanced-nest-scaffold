declare namespace NodeJS {
  export interface ProcessEnv {
    DB_HOST: string;
    DB_NAME: string;
    DB_PORT: string;
    DB_USER: string;
    DB_PASSWORD: string;
    JWT_SECRET: string;
  }
}
