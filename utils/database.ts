import { Pool } from 'pg';

let conn: any;

if (!conn) {
  conn = new Pool ({
    user: 'postgres',
    password: 'S8[nBsY%dARyA7fY',
    host: 'localhost',
    port: 5432,
    database: 'develotter'
  });
}

// const connectionString = `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE}`;

// conn = new Pool({
//   connectionString: true ? process.env.DATABASE_URL : connectionString
//   // ssl: {
//   //   rejectUnauthorized: false,
//   // },
// });

export { conn };
