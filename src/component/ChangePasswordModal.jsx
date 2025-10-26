import check from "../assets/tick-circle.png";

const ChangePasswordModal = ({ h2, description }) => {
  return (
    <div>
      <div>
        <div className="bg-[#E5F4ED] rounded-full p-4">
          <img src={check} />
        </div>
        <div className="text-center">
          <h2>{h2}</h2>
          <p>{description}</p>
        </div>
        <button className="">Continue</button>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
