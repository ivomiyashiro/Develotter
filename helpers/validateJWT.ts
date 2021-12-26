import { NextApiRequest, NextApiResponse,  } from 'next';
import jwt from 'jsonwebtoken';

export const validateJWT = async(req: NextApiRequest, res: NextApiResponse) => {

  const headers = req.headers;
  const token = headers['x-token'];

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No token in the request'
    });
  }

  try {
    const { uid, name }: any = jwt.verify(
      token as string,
      process.env.SECRET_JWT_SEED as string
    );

    return { uid, name };

  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token is not valid'
    });
  };
};
