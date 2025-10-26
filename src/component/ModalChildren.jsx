const ModalChildren = ({ children, onContinue }) => {
  return (
    <div
      className="bg-black/40 h-[1000px] flex items-center absolute top-0 bottom-0 w-full"
      onClick={onContinue}
    >
      <div
        className="flex flex-col gap-4 w-[516px] mx-auto px-4 py-6 bg-white rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalChildren;
