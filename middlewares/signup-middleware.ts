import { validationResult, check } from 'express-validator';
import initMiddleware from 'helpers/init-middleware';
import validateMiddleware from 'helpers/validate-middleware';

const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const signupMiddleware = initMiddleware(
  validateMiddleware([
    check('name', 'Name is required.').not().isEmpty(),
    check('email', 'Email is required.').not().isEmpty(),
    check('email', 'Email is not valid.').isEmail(),
    check('password', 'Password length must be greater than 8 and have at least one capital letter')
      .custom(value => {
        if (!regEx.test(value)) {
          return false;
        } 
        return true;
      }),
    check('birthDate', 'Date is required').not().isEmpty(),
    check('birthDate', 'Date is not valid').custom(value => {
      const dateValue = new Date(value).getFullYear();
      if (isNaN(dateValue)) {
        return false;
      }
      return true;
    }),
    check('birthDate', 'Your age must be greater than 16 years old.').custom(value => {
      const currentYearsOld = new Date().getFullYear() - new Date(value).getFullYear();
      if (currentYearsOld < 15) {
        return false;
      }
      return true;
    })
  ], validationResult)
);
