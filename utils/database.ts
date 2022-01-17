import { Pool } from 'pg';

let conn: any;

if (!conn) {
  conn = new Pool ({
    user: 'postgres',
    password: 'asddsa123',
    host: 'localhost',
    port: 5432,
    database: 'develotter'
  });
}
// S8[nBsY%dARyA7fY
export { conn };
