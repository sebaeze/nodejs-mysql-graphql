declare namespace NodeJS {
    export interface ProcessEnv {
        MYSQL_DB_NAME: string;
        MYSQL_USER:    string;
        MYSQL_PASSWORD:string;
        MYSQL_DB_URL:  string;
    }
  }