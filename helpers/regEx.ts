export const regEx = {
  name: /^[a-z ,.'-]+$/i,
  email: /^\S+@\S+\.\S+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
};
