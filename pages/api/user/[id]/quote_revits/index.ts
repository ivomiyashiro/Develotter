import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';

const favs = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const { id }: any = req.query;

  switch (method) {
    
  case 'GET':
    try {
      const query = 'SELECT * FROM quote_revit WHERE uid = $1';
      const value = [id];
      const resp = await conn.query(query, value);

      return res.status(200).json({
        ok: true,
        quote_revits: resp.rows
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

export default favs;
