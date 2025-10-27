import check from "../assets/tick-circle.png";
import danger from "../assets/danger.png";

const RemoveAdminModal = ({
  remove,
  onContinue,
  h2,
  description,
  onRemove,
}) => {
  return (
    <div
      className="bg-black/40 h-[1000px] flex items-center absolute top-0 bottom-0 w-full"
      onClick={onContinue}
    >
      <div
        className="flex flex-col items-center gap-6 w-[516px] mx-auto px-4 py-6 bg-white rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center">
          <div
            className={`${
              remove === "removeAdmin" ? "bg-[#FBE9E9]" : "bg-[#E5F4ED]"
            } rounded-full p-3`}
          >
            <img src={remove === "removeAdmin" ? danger : check} />
          </div>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-medium text-[#000000]">{h2}</h2>
          <p className="text-[16px] text-[#4B4B4B]">{description}</p>
        </div>
        <div className="px-4 w-full">
          {remove === "removeAdmin" ? (
            <div className="flex gap-2">
              <button
                className="bg-[#F0F0F0] p-3 cursor-pointer rounded-[8px] w-full"
                onClick={onContinue}
              >
                Cancel
              </button>
              <button
                className="bg-[#D42620] p-3 text-white cursor-pointer rounded-[8px] w-full"
                onClick={onRemove}
              >
                Yes, Delete
              </button>
            </div>
          ) : (
            <button
              className="bg-[#006F6A] p-3 text-white cursor-pointer rounded-[8px] w-full"
              onClick={onContinue}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RemoveAdminModal;
