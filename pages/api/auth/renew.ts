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
