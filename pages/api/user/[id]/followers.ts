import { validateJWT } from 'helpers/validateJWT';
import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';

const followers = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const { id }: any = req.query;

  switch (method) {
    
  case 'GET':
    try {
      const query_1 = 'SELECT dev_id AS dev_following_id FROM followers WHERE uid = ($1)';
      const values_1 = [id];
      const resp_1 = await conn.query(query_1, values_1);

      const query_2 = 'SELECT uid AS dev_follower_id FROM followers WHERE dev_id = ($1)';
      const values_2 = [id];
      const resp_2 = await conn.query(query_2, values_2);

      return res.status(200).json({
        ok: true,
        followins: resp_1.rows,
        followers: resp_2.rows
      });

    } catch (error) {
      console.log(error);

      return res.status(500).json({
        ok: false,
        msg: 'Internal server error'
      });
    }

  case 'POST':
    try {
      const { uid }: any = await validateJWT(req, res);
      const query = 'INSERT INTO followers (uid, dev_id) VALUES ($1, $2)';
      const values = [uid, id];
      await conn.query(query, values);

      return res.status(200).json({
        ok: true,
        followed: {
          dev_following_id: id
        }
      });

    } catch (error) {
      console.log(error);

      return res.status(500).json({
        ok: false,
        msg: 'Internal server error'
      });
    }

  case 'DELETE':
    try {
      await validateJWT(req, res);
      const query = 'DELETE FROM followers WHERE dev_id = ($1)';
      const value = [id];
      await conn.query(query, value);

      return res.status(200).json({
        ok: true,
        msg: 'Dev unfollwed.'
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

export default followers;
