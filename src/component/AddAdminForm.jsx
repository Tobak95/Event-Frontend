import { useForm } from "react-hook-form";
import { Buttons, Inputs } from "./AdminChangePassword";
import ModalChildren from "./ModalChildren";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../Utils/formValidator";
import { useState } from "react";

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
  } = useForm({ resolver: yupResolver(resetPasswordSchema) });
  const [showPassword, setShowPassword] = useState(false);
  const submit = (payload) => {
    console.log(payload);
  };

  return (
    <ModalChildren onContinue={onContinue}>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-2">
          <div className="space-y-2 mb-6">
            <h2 className="text-2xl font-bold">Add New Admin</h2>
            <p className="text-base">Update your personal details</p>
          </div>
          <>
            <FormInput
              id="firstName"
              label="First Name"
              register={register}
              placeholder="Martins"
              type="text"
            />
          </>

          <>
            <FormInput
              id="lastName"
              label="Last Name"
              register={register}
              placeholder="Jemima"
              type="text"
            />
          </>

          <>
            <FormInput
              id="email"
              label="Email Address"
              register={register}
              placeholder="martinsjemima@gmail.com"
              type="email"
            />
          </>
          <>
            <label htmlFor="phone" className="text-[18px]">
              Phone Number
            </label>
            <div className="border border-[#777777] rounded-lg px-2 flex items-center gap-1">
              <p>+234</p>
              <input
                type="number"
                id="phone"
                className="py-4 flex-1 outline-none"
              />
            </div>
          </>

          <>
            <Inputs
              showPassword={showPassword}
              setPassword={setShowPassword}
              id="newPassword"
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
          />
        </div>
      </form>
    </ModalChildren>
  );
};

export default AddAdminForm;
