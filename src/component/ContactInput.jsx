function ContactInput({ id, labelText, type, name, placeHolder, ...rest }) {
  return (
    <div className="flex gap-2 flex-col w-full ">
      <label
        htmlFor={name}
        className="text-[#000000] text-[20px] font-semibold"
      >
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeHolder}
        className="outline-none py-3 px-2 border border-[#979797] rounded-sm"
        {...rest}
      />
    </div>
  );
}

export default ContactInput;
