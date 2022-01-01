import { NextApiRequest, NextApiResponse } from 'next';
import { validateJWT } from 'helpers/validateJWT';
import { conn } from 'utils/database';

const quoteRevit = async(req: NextApiRequest, res: NextApiResponse) => {

  const { id } = req.query;
  const { content, img } = req.body;
  const method = req.method;

  switch (method) {
  
  case 'GET':
    try {
      const query = 'SELECT * FROM quote_revit WHERE devit_id = $1';
      const values = [id];
      const resp = await conn.query(query, values);

      return res.status(200).json({
        ok: true,
        quote_revits: resp.rows
      });
    } catch (error) {
      console.log(error);
  
      return res.status(500).json({
        ok: false,
        msg: 'Internal server error.'
      });
    }

  case 'POST':
    try {
      const { uid }: any = await validateJWT(req, res);

      const query = 'INSERT INTO quote_revit (uid, devit_id, content, img) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [uid, id, content, img];
      const resp = await conn.query(query, values);

      return res.status(200).json({
        ok: true,
        quote_revit: resp.rows[0]
      });

    } catch (error) {
      console.log(error);
  
      return res.status(500).json({
        ok: false,
        msg: 'Internal server error.'
      });
    }
  
  default:
    return res.status(405).json({
      ok: false,
      msg: 'Method not allowed.'
    });
  }
};

export default quoteRevit;
