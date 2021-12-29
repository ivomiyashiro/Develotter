import { validateJWT } from 'helpers/validateJWT';
import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';


const comment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const method = req.method;

  switch (method) {

  case 'GET':
    try {
      const query = 'SELECT * FROM comment WHERE devit_id = $1';
      const values = [id];
      const resp = await conn.query(query, values);
      console.log(resp);

      return res.status(200).json({
        ok: true,
        comments: resp.rows
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        ok: false,
        msg: 'Internal Server Error.'
      });
    }

  case 'POST':
    const { content, img } = req.body;
    try {

      const { uid }: any = await validateJWT(req, res);

      const query = 'INSERT INTO comment (uid, devit_id, content, img) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [uid, id, content, img];
      const resp = await conn.query(query, values);

      return res.status(200).json({
        ok: true,
        comment: resp.rows[0]
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        ok: false,
        msg: 'Internal Server Error'
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
