import { NextApiRequest, NextApiResponse } from 'next';
import { randomUsername } from 'helpers/randomUsername';
import { saltPassword } from 'helpers/saltPassword';
import { conn } from 'utils/database';


const createUser = async (req: NextApiRequest, res: NextApiResponse) => {

  const { body } = req;
  const { name, email, password, birth_date } = body;
  const username = randomUsername(name);
  const newPassword = saltPassword(password);

  const UNIQUE_VIOLATION = '23505';

  try {
    const query = 'INSERT INTO dev (name, username, email, password, birth_date) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [name, username, email, newPassword, birth_date];
  
    await conn.query(query, values);

    return res.status(200).json({
      ok: true,
      msg: 'Account successfully created.'
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
