import * as Yup from "yup";

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email addresss").required("Required"),
  password: Yup.string().min(4, "password is less than 4 !!").required(),
});
const RegisterSchema = Yup.object({
  firstName: Yup.string()
    .min(4, "first name is too short!")
    .max(50, "first name too long"),
  lastName: Yup.string()
    .min(4, "first name is too short!")
    .max(50, "first name too long"),
  email: Yup.string().email("Invalid email addresss").required("Required"),
  password: Yup.string().min(4, "password is less than 4 !!").required(),
});

export { LoginSchema, RegisterSchema };
