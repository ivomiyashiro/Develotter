import { Pool } from 'pg';

let conn: any;

if (!conn) {
  conn = new Pool ({
    user: 'ejcwirxzqqizsu',
    password: process.env.DATABASE_PASSWORD,
    host: 'ec2-3-227-195-74.compute-1.amazonaws.com',
    port: 5432,
    database: 'dd7d3pde4q3cvp'
  });
}

export { conn };
