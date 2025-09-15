import backgroundImage from "../assets/backgroundImage.jpg";
import ContactUsForm from "../component/ContactUsForm";
const ContactUs = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#00000073",
          height: "557px",
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-[#00000073]" />
        <div className="flex flex-col items-center justify-center h-[557px] px-4 relative z-10 max-w-[1440px] mx-auto">
          <h2 className="text-4xl font-bold text-[#FEFCFB]">Contact Us</h2>
          <p className="text-[#F6EEE8] text-[20px] text-center lg:w-[40%] leading-[100%]">
            We’d love to hear from you. Whether it’s about our events,
            partnerships, or media; reach out below.
          </p>
        </div>
      </div>
      <div className="flex px-4 py-6">
        <ContactUsForm />
        <div>contact us </div>
      </div>
    </>
  );
};

export default ContactUs;
