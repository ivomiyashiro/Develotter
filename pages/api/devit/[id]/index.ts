import { validateJWT } from 'helpers/validateJWT';
import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';


const devit = async (req: NextApiRequest, res: NextApiResponse) => {

  const { id } = req.query;
  const method = req.method;

  switch (method) {
  case 'DELETE':
    try {
      await validateJWT(req, res);

      const query = 'DELETE FROM devit WHERE id = $1';
      const value = [id];

      const resp = await conn.query(query, value);
    
      if (resp.rowCount === 0) {
        return res.status(404).json({
          ok: false,
          msg: 'Devit not found.'
        });
      }
    
      return res.status(200).json({
        ok: true,
        msg: 'Devit deleted.'
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: 'Internal Server Error.'
      });
    }

  default:
    return res.status(405).json({
      ok: false,
      msg: 'Method not allowed.'
    });
  }
}; 

export default devit;
