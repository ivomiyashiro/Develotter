import { NextApiRequest, NextApiResponse } from 'next';
import { randomUsername } from 'helpers/randomUsername';
import { saltPassword } from 'helpers/saltPassword';
import { conn } from 'utils/database';
import generateJWT from 'helpers/generateJWT';

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {

  const { body } = req;
  const { name: reqName, email: reqEmail, password, birth_date: reqBirth_date } = body;
  const newUsername = randomUsername(reqName);
  const newPassword = saltPassword(password);

  const UNIQUE_VIOLATION = '23505';

  try {
    const query = 'INSERT INTO dev (name, username, email, password, birth_date) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [reqName, newUsername, reqEmail, newPassword, reqBirth_date];

    const resp = await conn.query(query, values);
    const {id, username, name, bio, email, profile_picture, cover_picture, birth_date, website, location, created_at, first_edit} = resp.rows[0];
    
    const token = await generateJWT(id, name);

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

  } catch (error: any) {
    console.log(error);

    if (error.code === UNIQUE_VIOLATION) {
      return res.status(400).json({
        ok: false,
        msg: 'Email is already in use.'
      });
    }

    return res.status(500).json({
      ok: false,
      msg: 'Internal server error.'
    });
  }
};

export default createUser;
