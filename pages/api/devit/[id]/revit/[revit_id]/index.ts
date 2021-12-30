import { NextApiRequest, NextApiResponse } from 'next';
import { validateJWT } from 'helpers/validateJWT';
import { conn } from 'utils/database';

const revit = async(req: NextApiRequest, res: NextApiResponse) => {

  const { revit_id } = req.query;
  const method = req.method;

  switch (method) {
  
  case 'DELETE':
    try {
      await validateJWT(req, res);

      const query = 'DELETE FROM revit WHERE id = $1';
      const value = [revit_id];
      await conn.query(query, value);

      return res.status(200).json({
        ok: true,
        msg: 'Revit deleted.'
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

export default revit;
