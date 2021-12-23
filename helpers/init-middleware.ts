import { Result } from 'express-validator';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function initMiddleware(middleware: any) {

  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: Result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}
