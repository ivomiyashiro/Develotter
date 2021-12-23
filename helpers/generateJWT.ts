import { sign } from 'jsonwebtoken';

const generateJWT = (uid: string, name: string) => {

  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    sign(payload, process.env.SECRET_JWT_SEED as string, {
      expiresIn: '12h'
    }, (err, token) => {

      if (err) {
        console.log(err);
        reject('Can not generate the token.');
      }

      resolve(token);
    });
  });
};

export default generateJWT;
