import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Card = ({ title, pTag, link, icon: Icon }) => {
  return (
    <div className="w-[322px] flex flex-col justify-center items-center">
      <Icon color="#006F6A" size={30} />
      <h2 className="text-2xl text-[#000000] font-semibold mt-2">{title}</h2>
      <p className="text-center text-base mt-4">{pTag}</p>
      <p className="text-[20px] text-[#006F6A] font-semibold">{link}</p>
    </div>
  );
};

function ContactInfo() {
  const data = [
    {
      icon: MdEmail,
      title: "Email Us",
      pTag: `Send us a mail anytime, we’ll get back within 24 hours`,
      link: "info@yourorg.com",
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      pTag: `Prefer to talk directly? Reach out during our office hours (Mon-Fri, 9AM-5PM)`,
      link: "+234 XX XXX XXXX",
    },
    {
      icon: FaLocationDot,
      title: "Visit Us",
      pTag: `Stop by our office to make physical inquiries; we’d ;love to meet you.`,
      link: "12th Street, Lagos, Nigeria",
    },
  ];
  return (
    <div className="flex flex-col gap-[39px]">
      {data.map((value) => (
        <Card
          link={value.link}
          pTag={value.pTag}
          title={value.title}
          key={value.title}
          icon={value.icon}
        />
      ))}
    </div>
  );
}

export default ContactInfo;
