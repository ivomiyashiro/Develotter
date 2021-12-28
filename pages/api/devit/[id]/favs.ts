import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';

const devitFavs = async (req: NextApiRequest, res: NextApiResponse) => {
  
  const { id } = req.query;

  try {
    const query = 'SELECT * FROM fav WHERE devit_id = $1';
    const values = [id];

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
