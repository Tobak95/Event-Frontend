import { Eye, EyeOff } from "lucide-react";
import ModalChildren from "./ModalChildren";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { adminResetPassword } from "../Utils/formValidator";
import { yupResolver } from "@hookform/resolvers/yup";
import ChangePasswordModal from "./ChangePasswordModal";
import { ClipLoader } from "react-spinners";

export const Inputs = ({ showPassword, setPassword, id, label, register }) => {
  return (
    <>
      <label htmlFor={id} className="text-[18px]">
        {label}
      </label>
      <div className="flex  border border-[#777777] rounded-lg  px-2">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          placeholder="********"
          className="outline-none flex-1 py-4 "
          {...register(id)}
        />
        <button
          type="button"
          className="text-gray-400 hover:text-gray-500 focus:outline-none"
          onClick={setPassword}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      </div>
    </>
  );
};

export const Buttons = ({ cancel, cancelTest, proceedText, submitting }) => {
  return (
    <div className="flex justify-end gap-2 mt-4 ">
      <button
        className="bg-[#E8E8E8] hover:bg-[#d1cece] px-10 py-3 rounded-md cursor-pointer font-medium"
        onClick={cancel}
      >
        {cancelTest}
      </button>
      <button
        className="bg-[#006F6A] hover:bg-[#03534f] text-white px-10 py-3 rounded-md cursor-pointer font-medium"
        type="submit"
        disabled={submitting}
      >
        {submitting ? <ClipLoader size={20} color="#ffffff" /> : proceedText}
      </button>
    </div>
  );
};

const AdminChangePassword = ({ onContinue }) => {
  const [oldPassWord, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const showPass = () => {
    setNewPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(adminResetPassword) });

  const submit = (payload) => {
    setTimeout(() => {
      console.log(payload);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <ChangePasswordModal
        h2="Password Reset Successfully!"
        description="Your password has been reset successfully!"
        onContinue={onContinue}
      />
    );
  }

  return (
    <ModalChildren onContinue={onContinue}>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl mb-6 font-bold">Change Password</h2>
          <>
            <Inputs
              showPassword={oldPassWord}
              setPassword={() => setOldPassword((prev) => !prev)}
              id="oldPassword"
              label="Old Password"
              register={register}
            />
            {errors.oldPassword && (
              <p className="text-red-500 mt-1">{errors.oldPassword.message}</p>
            )}
          </>
          <>
            <Inputs
              showPassword={newPassword}
              setPassword={showPass}
              id="newPassword"
              label="New Password"
              register={register}
            />
            {errors.newPassword && (
              <p className="text-red-500 mt-1">{errors.newPassword.message}</p>
            )}
          </>
          <>
            <Inputs
              showPassword={newPassword}
              setPassword={showPass}
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
            proceedText="Reset"
          />
        </div>
      </form>
    </ModalChildren>
  );
};

export default AdminChangePassword;
