import { validateJWT } from 'helpers/validateJWT';
import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';

const feed = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;

  switch (method) {
  case 'GET':
    try {
      const { uid }: any = await validateJWT(req, res);

      const query = 'SELECT devit.id, devit.uid, devit.content, devit.img, devit.created_at FROM (SELECT * FROM followers WHERE uid = $1) AS followers INNER JOIN devit ON devit.uid = followers.dev_id UNION SELECT * FROM devit WHERE devit.uid = $1 ORDER BY created_at DESC';
      const values = [uid];

      const resp = await conn.query(query, values);

      return res.status(200).json({
        ok: true,
        feed: resp.rows
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        ok: false,
        msg: 'Internal server error'
      });
    }
  
  default:
    return res.status(405).json({
      ok: false,
      msg: 'Method not allowed.'
    });
  }
};

export default feed;
