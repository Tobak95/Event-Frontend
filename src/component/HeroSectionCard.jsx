import NavBar from "../component/layout/NavBar";
import Nav from "../component/layout/NavBar"


function HeroSectionCard({ backgroundImage, h2, p }) {
  return (
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
      <Nav/>
      <div className="absolute inset-0 bg-[#00000073]" />
      <div
        className={`flex flex-col items-center justify-center 
          h-[557px]
         px-4 relative z-10 max-w-[1440px] mx-auto gap-[25px]`}
      >
        <h2 className="text-[64px] font-bold text-[#FEFCFB]">{h2}</h2>
        <p className="text-[#F6EEE8] text-[24px] text-center lg:w-[50%] leading-[100%]">
          {p}
        </p>
      </div>
    </div>
  );
}

export default HeroSectionCard;
