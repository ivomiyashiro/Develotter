import { Pool } from 'pg';

let conn: any;

if (!conn) {
  conn = new Pool ({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: 5432,
    database: process.env.DATABASE
  }); 
}

export { conn };
