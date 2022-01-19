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
// asddsa123
export { conn };
