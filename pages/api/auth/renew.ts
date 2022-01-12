import { NextApiRequest, NextApiResponse } from 'next';
import generateJWT from 'helpers/generateJWT';
import { validateJWT } from 'helpers/validateJWT';
import { conn } from 'utils/database';

const renewUser = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const { uid, name: tokenName }: any = await validateJWT(req, res);
    const token = await generateJWT(uid, tokenName);
    
    const query = 'SELECT * FROM dev WHERE id = ($1)';
    const values = [uid];

    const resp = await conn.query(query, values);
    const {id, username, email, name, bio, profile_picture, cover_picture, birth_date, created_at, first_edit} = resp.rows[0];

    return res.json({
      ok: true,
      user: {
        id,
        username,
        email,
        name,
        bio,
        profile_picture,
        cover_picture,
        birth_date,
        created_at,
        first_edit
      },
      token
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

export default renewUser;
