import { NextApiRequest, NextApiResponse } from 'next';
import { validateJWT } from 'helpers/validateJWT';
import { conn } from 'utils/database';


const favComment = async (req: NextApiRequest, res: NextApiResponse) => {
  
  const { comment_id, id } = req.query;
  const { uid }: any = await validateJWT(req, res);

  try {
    const query = 'SELECT * FROM comment_fav WHERE uid = $1 AND comment_id = $2';
    const values = [uid, comment_id];

    const resp = await conn.query(query, values);

    if (resp.rows.length === 0) {
      const query = 'INSERT INTO comment_fav (uid, comment_id, devit_id) VALUES ($1, $2, $3) RETURNING *';
      const values = [uid, comment_id, id];
  
      const resp = await conn.query(query, values);
  
      return res.status(200).json({
        ok: true,
        fav: resp.rows[0]
      });
    } else {
      const query = 'DELETE FROM comment_fav WHERE uid = $1 AND comment_id = $2';
      const values = [uid, comment_id];

      await conn.query(query,values);

      return res.status(200).json({
        ok: true,
        msg: 'Comment unfaved.'
      });
    }
  } catch (error: any) {
    console.log(error);

    if (error.code === '23503') {
      return res.status(404).json({
        ok: false,
        msg: 'Devit or comment not found.'
      });
    }

    return res.status(500).json({
      ok: false,
      msg: 'Internal Servel Error.'
    });
  }
};

export default favComment;
