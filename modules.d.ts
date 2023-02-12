declare namespace NodeJS {
    export interface ProcessEnv {
        DEBUG:         string;
        MYSQL_DB_NAME: string;
        MYSQL_CONNECTION_USER:    string;
        MYSQL_PASSWORD:string;
        MYSQL_DB_URL:  string;
    }
  }