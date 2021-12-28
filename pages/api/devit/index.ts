import { NextApiRequest, NextApiResponse } from 'next';
import { validateJWT } from 'helpers/validateJWT';
import { conn } from 'utils/database';

const devit = async (req: NextApiRequest, res: NextApiResponse) => {

  const method = req.method;
  const { uid }: any = await validateJWT(req, res);
  
  switch (method) {
  case 'GET':
    try {
      const query = 'SELECT * FROM devit ORDER BY created_at DESC';
      const resp = await conn.query(query);
      
      return res.status(200).json({
        ok: true,
        devits: resp.rows
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: 'Internal server error.'
      });
    }

  case 'POST':
    const { content, img } = req.body;

    try {
      const query = 'INSERT INTO devit (uid, content, img) VALUES ($1, $2, $3) RETURNING *';
      const values = [uid, content, img];

      const resp = await conn.query(query, values);
      const {id, content: respContent, img: respImg, created_at} = resp.rows[0];

      return res.status(200).json({
        ok: true,
        devit: {
          id,
          uid,
          content: respContent,
          img: respImg,
          created_at
        }
      });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: 'Internal server error.'
      });
    }
  
  default:
    return res.status(405).json({
      success: false,
      msg: 'Method not allowed.'
    });
  }
};

export default devit;
