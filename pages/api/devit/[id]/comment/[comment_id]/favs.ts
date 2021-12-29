import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';

const devitFavs = async (req: NextApiRequest, res: NextApiResponse) => {
  
  const { comment_id } = req.query;

  try {
    const query = 'SELECT * FROM comment_fav WHERE comment_id = $1';
    const values = [comment_id];

    const resp = await conn.query(query, values);

    return res.status(200).json({
      ok: true,
      favs: resp.rows
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal Servel Error.'
    });
  }
};

export default devitFavs;

