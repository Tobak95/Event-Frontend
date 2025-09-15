function ContactInput({ label, type, name, placeHolder }) {
  return (
    <div className="flex gap-2 flex-col w-full ">
      <label
        htmlFor={label}
        className="text-[#000000] text-[20px] font-semibold"
      >
        {name}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeHolder}
        className="outline-none py-2 px-2 border border-[#979797] rounded-sm"
        required
      />
    </div>
  );
}

export default ContactInput;
