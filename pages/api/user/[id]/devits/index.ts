import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;

  switch (method) {
  case 'GET':
    const { id: reqId } = req.query;

    try {
      const query = 'SELECT devit.id, devit.uid, devit.content, devit.img, devit.created_at FROM devit JOIN dev ON devit.uid = dev.id WHERE dev.username = ($1) ORDER BY devit.created_at DESC;';
      const values = [reqId];
      const resp = await conn.query(query, values);

      return res.status(200).json({
        ok: true,
        devits: resp.rows
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

export default user;
