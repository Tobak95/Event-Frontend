import { LuCalendarDays } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";

const EventSchedule = ({ children }) => {
  return <div className="flex items-center gap-1">{children}</div>;
};

function EventDetailsHeader({ title, image, date, time, location }) {
  return (
    <div className="mx-w-[1440px] mx-auto">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col lg:flex-row justify-between  items-center gap-2 lg:gap-6 w-full">
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="lg:h-[406px] h-[283.9457092285156px] lg:w-[80%] rounded-[15px] relative z-10 object-cover"
            />
            <div className="absolute lg:w-[80%]  -top-4 left-4 w-full bg-[#004441] h-[406px] hidden lg:block" />
          </div>

          <div className="flex flex-col h-[70%] justify-evenly gap-4">
            <p className="font-bold lg:text-5xl text-2xl text-[#000]">
              {title}
            </p>
            <div className="flex flex-col gap-4 lg:gap-8">
              <EventSchedule>
                <LuCalendarDays />
                <p className="">{date}</p>
              </EventSchedule>
              <EventSchedule>
                <LuClock4 />
                <p className="">{time}</p>
              </EventSchedule>
              <EventSchedule>
                <CiLocationOn />
                <p className="">{location}</p>
              </EventSchedule>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsHeader;
