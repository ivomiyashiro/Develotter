import { NextApiRequest, NextApiResponse } from 'next';
import { validateJWT } from 'helpers/validateJWT';
import { conn } from 'utils/database';


const favDevit = async (req: NextApiRequest, res: NextApiResponse) => {
  
  const { id } = req.query;
  const { uid }: any = await validateJWT(req, res);

  try {

    const query = 'SELECT * FROM fav WHERE uid = ($1) AND devit_id = ($2)';
    const values = [uid, id];

    const resp = await conn.query(query, values);

    if (resp.rows.length === 0) {
      const query = 'INSERT INTO fav (uid, devit_id) VALUES ($1, $2) RETURNING *';
      const values = [uid, id];
  
      const resp = await conn.query(query, values);
  
      return res.status(200).json({
        ok: true,
        fav: resp.rows[0]
      });
    } else {
      const query = 'DELETE FROM fav WHERE uid = $1 AND devit_id = $2';
      const values = [uid, id];

      await conn.query(query,values);

      return res.status(200).json({
        ok: true,
        msg: 'Devit unfaved.'
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal Servel Error.'
    });
  }
};

export default favDevit;
