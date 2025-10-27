import check from "../assets/tick-circle.png";

const ChangePasswordModal = ({ h2, description, onContinue }) => {
  return (
    <div
      className="bg-black/40 h-[1000px] flex items-center absolute top-0 bottom-0 w-full"
      onClick={onContinue}
    >
      <div
        className="flex flex-col items-center gap-4 w-[516px] mx-auto px-4 py-6 bg-white rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center">
          <div className="bg-[#E5F4ED] rounded-full p-3">
            <img src={check} />
          </div>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-medium text-[#000000]">{h2}</h2>
          <p className="text-[16px] text-[#4B4B4B]">{description}</p>
        </div>
        <div className="px-4 w-full">
          <button
            className="bg-[#006F6A] p-3 text-white cursor-pointer rounded-[8px] w-full"
            onClick={onContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
