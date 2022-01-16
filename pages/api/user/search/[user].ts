import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = req.query;

  try {
    const query = 'SELECT * FROM dev WHERE username LIKE $1 OR name LIKE $1';
    const value = [`%${user}%`];

    const resp = await conn.query(query, value);
    return res.status(200).json({
      ok: true,
      user: resp.rows
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error'
    });
  }
};

export default search;
