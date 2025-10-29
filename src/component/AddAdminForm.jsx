import { useForm } from "react-hook-form";
import { Buttons, Inputs } from "./AdminChangePassword";
import ModalChildren from "./ModalChildren";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../Utils/formValidator";
import { useState } from "react";
import { axiosInstance } from "../Utils/axiosInstance";
import { useAppContext } from "../Hooks/useAppContext";
import { toast } from "react-toastify";

const FormInput = ({ id, label, register, placeholder, type }) => {
  return (
    <>
      <label htmlFor={id} className="text-[18px]">
        {label}
      </label>
      <input
        type={type}
        className="border border-[#777777] rounded-lg px-2 py-4 outline-none"
        placeholder={placeholder}
        {...register(id)}
      />
    </>
  );
};

const AddAdminForm = ({ onContinue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { token } = useAppContext();

  const createAdmin = async (data) => {
    setSubmitting(true);
    try {
      const response = await axiosInstance.post("/auth/create-admin", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(response.data);
      toast.success("Admin created successfully");
      onContinue();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ModalChildren onContinue={onContinue}>
      <form onSubmit={handleSubmit(createAdmin)}>
        <div className="flex flex-col gap-2">
          <div className="space-y-2 mb-6">
            <h2 className="text-2xl font-bold">Add New Admin</h2>
            <p className="text-base">Update your personal details</p>
          </div>
          <>
            <FormInput
              id="firstname"
              label="First Name"
              register={register}
              placeholder="Martins"
              type="text"
            />
            {errors.firstname && (
              <p className="text-red-500 mt-1">{errors.firstname.message}</p>
            )}
          </>

          <>
            <FormInput
              id="lastname"
              label="Last Name"
              register={register}
              placeholder="Jemima"
              type="text"
            />
            {errors.lastname && (
              <p className="text-red-500 mt-1">{errors.lastname.message}</p>
            )}
          </>

          <>
            <FormInput
              id="email"
              label="Email Address"
              register={register}
              placeholder="martinsjemima@gmail.com"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </>
          <>
            <label htmlFor="phoneNumber" className="text-[18px]">
              Phone Number
            </label>
            <div className="border border-[#777777] rounded-lg px-2 flex items-center gap-1">
              <p>+234</p>
              <input
                type="number"
                id="phoneNumber"
                className="py-4 flex-1 outline-none"
                {...register("phoneNumber")}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 mt-1">{errors.phoneNumber.message}</p>
            )}
          </>

          <>
            <Inputs
              showPassword={showPassword}
              setPassword={setShowPassword}
              id="password"
              label="New Password"
              register={register}
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </>
          <>
            <Inputs
              showPassword={showPassword}
              setPassword={setShowPassword}
              id="confirmPassword"
              label="Confirm Password"
              register={register}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </>

          <Buttons
            cancel={onContinue}
            cancelTest="Cancel"
            proceedText="Add Admin"
            submitting={submitting}
          />
        </div>
      </form>
    </ModalChildren>
  );
};

export default AddAdminForm;
