import ContactInput from "./ContactInput";

function ContactUsForm() {
  return (
    <div className="bg-[#F8F6F6] py-6 px-6 mt-8 rounded-sm">
      <h3 className="text-[#000000] text-[48px] font-bold">Send a Message</h3>
      <p className="text-[#3F3F3F] text-[20px]">
        Fill out the form and we’ll get back to you.
      </p>
      <form className="mt-4">
        <div className="flex flex-col gap-2">
          <ContactInput
            label={"name"}
            name={"Name"}
            placeHolder={"Enter your name"}
            type={"text"}
          />
          <ContactInput
            label={"email"}
            name={"Email Address"}
            placeHolder={"Enter your email address "}
            type={"email"}
          />
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
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#006F6A] px-4 py-4 rounded-[8px] text-[#FFFFFF] mt-4 w-full flex cursor-pointer justify-center"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;
