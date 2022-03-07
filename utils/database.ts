import { Pool } from 'pg';

let conn: any;

if (!conn) {
  conn = new Pool ({
    user: 'ejcwirxzqqizsu',
    password: 'df9545fc1e5dfa0215bfc070e235fe6f13092f694874754e290b8441d31aabda',
    host: 'ec2-3-227-195-74.compute-1.amazonaws.com',
    port: 5432,
    database: 'dd7d3pde4q3cvp'
  });
}

export { conn };
