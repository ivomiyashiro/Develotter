import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;

  switch (method) {
  case 'GET':
    const { username } = req.query;
  
    try {
      const query = 'SELECT * FROM dev WHERE username = ($1)';
      const values = [username];

      const resp = await conn.query(query, values);

      return res.status(200).json({
        ok: true,
        user: resp.rows[0]
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        ok: false,
        msg: 'Internal server error'
      });
    }
  
  default:
    return res.status(405).json({
      ok: false,
      msg: 'Method not allowed.'
    });
  }
};

export default user;
