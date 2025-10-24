import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEventContext } from "../Hooks/useEventContext";
import EventDetailsHeader from "../component/EventDetailsHeader";
import EventDetailsAbout from "../component/EventDetailsAbout";
import Footer from "../component/layout/Footer";
import NavBar from "../component/layout/NavBar";
import logo2 from ".././assets/logo2.png";
import icon2 from ".././assets/icon2.png";

// const HeaderText = ({ title }) => {
//   return (
//     <div className="flex flex-col gap-2 flex-wrap lg:items-center lg:flex-row container mx-auto px-4 mt-40">
//       {" "}
//       <p className="text-[#4A4A4A] lg:text-2xl text-base">
//         {" "}
//         Discover{" "}
//         <span className="text-black text-base lg:text-2xl lg:font-bold">
//           {" "}
//           / {title}{" "}
//         </span>{" "}
//       </p>{" "}
//     </div>
//   );
// };

function EventDetails() {
  const { id } = useParams();
  const { getSingleEvent, singleEvent } = useEventContext();
  const redirect = useNavigate();

  useEffect(() => {
    if (id) {
      getSingleEvent(id);
    }
  }, [id]);

  return (
    <>
      <NavBar
        bgColor="bg-[#ffffff]"
        logoSrc={logo2}
        textColor="text-[#1b1b1b]"
        menuColor="black"
        iconLogo={icon2}
      />
      {/* <HeaderText title={singleEvent?.title} /> */}
      <div className="flex flex-col gap-2 flex-wrap lg:items-center lg:flex-row container mx-auto px-4 mt-40 mb-10">
        <p
          className="text-[#777777] lg:text-[24px] text-[14px] cursor-pointer"
          onClick={() => redirect("/discover")}
        >
          Discover{" "}
          <span className="text-[#000000] lg:text-[24px] text-[14px]  font-medium">
            / {singleEvent?.title}{" "}
          </span>
        </p>
      </div>
      <div className="detailsBg py-10 layout">
        <EventDetailsHeader
          title={singleEvent?.title}
          image={singleEvent?.image}
          date={
            singleEvent?.startDate &&
            new Date(singleEvent.startDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }
          time={`${new Date(
            `1970-01-01T${singleEvent.startTime}`
          ).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
                      -
                      ${new Date(
                        `1970-01-01T${singleEvent.endTime}`
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })} WAT`}
          location={singleEvent?.address}
        />
      </div>
      <EventDetailsAbout
        paragraph1={singleEvent?.description}
        paragraph2={singleEvent?.perks}
        time={`${new Date(singleEvent.startDate).toLocaleDateString("en-us", {
          day: "2-digit",
          month: "short",
        })} - ${new Date(
          `1970-01-01T${singleEvent.startTime}`
        ).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })} WAT`}
        price={`$${singleEvent?.tickets?.[0]?.price ?? "N/A"}`}
        title1="About this event"
        title2="Key Highlights"
      />
      <Footer />
    </>
  );
}

export default EventDetails;
