import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(3, 'Should be from 3 to 30 letters or symbols(space, -, ")')
    .max(30, 'Should be from 3 to 30 letters or symbols(space, -, ")')
    .matches(
      /^[a-zA-Z\s'-]+$/,
      'Should be from 3 to 30 letters or symbols(space, -, ")',
    )
    .required('First name is required'),
  lastname: yup
    .string()
    .min(3, 'Should be from 3 to 30 letters or symbols(space, -, ")')
    .max(30, 'Should be from 3 to 30 letters or symbols(space, -, ")')
    .matches(
      /^[a-zA-Z\s'-]+$/,
      'Should be from 3 to 30 letters or symbols(space, -, ")',
    )
    .required('Last name is required'),
  username: yup
    .string()
    .min(
      3,
      'Should be unique and from 3 to 30 alphanumeric characters or symbols(space, -, ")',
    )
    .max(
      30,
      'Should be unique and from 3 to 30 alphanumeric characters or symbols(space, -, ")',
    )
    .matches(
      /^[0-9a-zA-Z\s'-]+$/,
      'Should be unique and from 3 to 30 alphanumeric characters or symbols(space, -, ")',
    )
    .required('Username is required'),
  email: yup
    .string()
    .email('Should be unique, alphanumeric cahracters, dots, "@"')
    .required('Email is required'),
  password: yup
    .string()
    .min(4, 'Should be from 3 to 30 aplhanumeric characters')
    .max(30, 'Should be from 3 to 30 aplhanumeric characters')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required('Password is required'),
});
