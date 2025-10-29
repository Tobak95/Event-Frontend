import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid Email Address")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  //.matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must contain at least one letter and one number"),
});

export const signUpSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("First name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid Email Address")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email is invalid"),
  phoneNumber: Yup.string()
    .matches(/^\+?[1-9][0-9]{7,14}$/, "Phone number is not valid")
    .required("Phone number is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  // agreeToTerms: Yup.string().required("Please Agree to terms"),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const adminResetPassword = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email is not valid")
    .required("Email is required"),
});

export const changePasswordSchema = Yup.object().shape({
  oldPass: Yup.string().min(6, "Password must be at least 6 characters"),
  newPass: Yup.string().min(6, "Password must be at least 6 characters"),
  confirmPass: Yup.string()
    .oneOf([Yup.ref("newPass")], "Passwords must match")
    .required("Confirm password is required"),
});

export const contact = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Please Enter a valid email")
    .required("Please enter an email")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email"),

  message: Yup.string().required("Field is Required"),
});

export const createAdminSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email is invalid"),
  phoneNumber: Yup.string()
    .matches(/^\+?[1-9][0-9]{7,14}$/, "Phone number is not valid")
    .required("Phone number is required"),
});
