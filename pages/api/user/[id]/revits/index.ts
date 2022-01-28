import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';

const revits = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  const { id }: any = req.query;
  
  switch (method) {
    
  case 'GET':
    try {
      const query = 'SELECT devit.id, devit.uid, devit.content, devit.img, devit.created_at FROM revit JOIN devit ON devit.id = revit.devit_id WHERE devit.uid = $1 ORDER BY devit.created_at DESC;';
      const value = [id];
      const resp = await conn.query(query, value);

      return res.status(200).json({
        ok: true,
        revits: resp.rows
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

export default revits;
