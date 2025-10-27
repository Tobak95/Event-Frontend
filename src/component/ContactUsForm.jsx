import ContactInput from "./ContactInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { contact } from "../Utils/formValidator";
import { toast } from "react-toastify";
import { axiosInstance } from "../Utils/axiosInstance";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

function ContactUsForm() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contact),
  });

  const handleFormSubmit = async (data) => {
    console.log(data);

    setSubmitting(true);
    try {
      const response = await axiosInstance.post("/contact/", data);
      if (response.status === 200) {
        return toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8F6F6] py-6 px-4 lg:px-12 rounded-sm flex w-full  flex-col lg:w-[48%]">
      <h3 className="text-[#000000] lg:text-[48px] text-2xl font-bold">
        Send a Message
      </h3>
      <p className="text-[#3F3F3F] lg:text-[20px] text-[16px]">
        Fill out the form and we’ll get back to you.
      </p>
      <form className="mt-4 w-full" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-col gap-2 ">
          <label
            htmlFor="name"
            className="text-[#000000] text-[20px] font-semibold"
          >
            Enter Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            className="outline-none py-3 px-2 border border-[#979797] rounded-sm"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-[#EC5E5E] font-[400] text-[14px] mt-1">
              {errors.name.message}
            </p>
          )}
          <label
            htmlFor="email"
            className="text-[#000000] text-[20px] font-semibold"
          >
            Enter Your Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            id="email"
            className="outline-none py-3 px-2 border border-[#979797] rounded-sm"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-[#EC5E5E] font-[400] text-[14px] mt-1">
              {errors.email.message}
            </p>
          )}
          <div className="w-full flex flex-col gap-2 mt-2 ">
            <label
              htmlFor="message"
              className="text-[#000000] text-[20px] font-semibold"
            >
              Comment or message
            </label>
            <textarea
              id="message"
              className="border border-[#979797] rounded-sm p-2 h-[100px] max-h-[300px] outline-none"
              placeholder="Leave a message"
              {...register("message")}
            ></textarea>
            {errors.message && (
              <p className="text-[#EC5E5E] font-[400] text-[14px] mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="bg-[#006F6A] px-4 py-4 rounded-[8px] text-[#FFFFFF] mt-8 w-full flex cursor-pointer justify-center"
        >
          {submitting ? (
            <ClipLoader size={20} color="#ffffff" />
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;
