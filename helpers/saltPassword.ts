const bcrypt = require('bcryptjs');


export const saltPassword = (password: string) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export const verifyPassword = (userPassword: string, bodyPassword: string) => {
  return bcrypt.compareSync(bodyPassword, userPassword);
};
