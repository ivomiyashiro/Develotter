import generateJWT from 'helpers/generateJWT';
import { verifyPassword } from 'helpers/saltPassword';
import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from 'utils/database';


const signin = async (req: NextApiRequest, res: NextApiResponse) => {
  
  const { email: reqEmail, password: reqPassword } = req.body;
  
  try {
    const query = 'SELECT * FROM dev WHERE email = $1';
    const values = [reqEmail];
    const resp = await conn.query(query, values);
    
    if (resp.rows.length === 0) {
      return res.status(400).json({
        ok: false,
        msg: 'Incorrect email or password.'
      });
    }

    const {id, username, email, name, password, bio, profile_picture, cover_picture, birth_date, created_at, first_edit} = resp.rows[0];

    const validPassword = verifyPassword(password, reqPassword);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Incorrect email or password.'
      });
    }

    const token = await generateJWT(id, name);

    return res.status(200).json({
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
      token,
    });

  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      msg: 'Internal database error.'
    });
  }
};

export default signin;
