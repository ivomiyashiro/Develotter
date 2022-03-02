import { validateJWT } from 'helpers/validateJWT';
import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';


const comment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { comment_id } = req.query;
  const method = req.method;

  switch (method) {

  case 'DELETE':
    try {
      await validateJWT(req, res);

      const query = 'DELETE FROM comment WHERE id = $1';
      const values = [comment_id];
      await conn.query(query, values);

      return res.status(200).json({
        ok: true
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

export default comment;
