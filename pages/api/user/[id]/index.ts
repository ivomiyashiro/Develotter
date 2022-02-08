import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';

const user = async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;

  switch (method) {
  case 'GET':
    const { id: reqId }: any = req.query;
    try {
      const query = 'SELECT * FROM dev WHERE id = ($1)';
      const values = [reqId];
      const resp = await conn.query(query, values);
      const {id, username, name, bio, email, profile_picture, cover_picture, birth_date, website, location, created_at, first_edit} = resp.rows[0];
      return res.status(200).json({
        ok: true,
        user: {
          id,
          username,
          name,
          email,
          bio,
          profile_picture,
          cover_picture,
          birth_date,
          website,
          location,
          created_at,
          first_edit
        },
      });

    } catch (error) {
      console.log(error);

      return res.status(500).json({
        ok: false,
        msg: 'Internal server error'
      });
    }
    
  case 'PUT':
    const { id } = req.query;
    const { name, profile_picture, cover_picture, username, bio, website, location, first_edit } = req.body;

    const query = 'UPDATE dev SET name = ($1), profile_picture = ($2), cover_picture = ($3), username = ($4), bio = ($5), website = ($6), location = ($7), first_edit = ($8) WHERE id = ($9) RETURNING *';
    const values = [name, profile_picture, cover_picture, username, bio, website, location, first_edit, id];
    try {
      const resp = await conn.query(query, values);
      const {id, username, name, bio, email, profile_picture, cover_picture, birth_date, website, location, created_at, first_edit} = resp.rows[0];

      return res.status(200).json({
        ok: true,
        user: {
          id,
          username,
          name,
          email,
          bio,
          profile_picture,
          cover_picture,
          birth_date,
          website,
          location,
          created_at,
          first_edit
        },
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
