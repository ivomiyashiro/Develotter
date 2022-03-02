import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';

const randomUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;

  switch (method) {

  case 'GET':  
    try {
      const query = 'SELECT * FROM dev ORDER BY RANDOM() LIMIT 4';

      const resp = await conn.query(query);

      return res.status(200).json({
        ok: true,
        users: resp.rows
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

export default randomUser;
