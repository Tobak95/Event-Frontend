import backgroundImage from "../assets/backgroundImage.jpg";
import ContactInfo from "../component/ContactInfo";
import ContactUsForm from "../component/ContactUsForm";
import HeroSectionCard from "../component/HeroSectionCard";


const ContactUs = () => {
  return (
    <>
      
      <HeroSectionCard
        backgroundImage={backgroundImage}
        p={`We’d love to hear from you. Whether it’s about our events,
          partnerships, or media; reach out below.`}
          h2={"Contact Us"}
          />
      <div className="flex flex-col lg:flex-row justify-around items-center px-4 py-6 max-w-[1440px] mx-auto mt-8">
        <ContactUsForm />
        <ContactInfo />
      </div>
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8899119932175!2d3.3634445749201167!3d6.535585093457214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dba7bad97cb%3A0xae0bc176821041e5!2sTech%20Studio%20Academy!5e0!3m2!1sen!2sng!4v1757937615048!5m2!1sen!2sng"
          width="100%"
          height="483"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
