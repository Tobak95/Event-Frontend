import EventDetailsHeader from "../component/EventDetailsHeader";
import img from "../assets/img1.jpg";
import EventDetailsAbout from "../component/EventDetailsAbout";
import Footer from "../component/layout/Footer";
import NavBar from "../component/layout/NavBar";

const HeaderText = ({ title }) => {
  return (
    <div className="flex flex-col gap-2 flex-wrap lg:items-center lg:flex-row container mx-auto px-4 mt-40">
      <p className="text-[#4A4A4A] lg:text-2xl text-base">
        Discover{" "}
        <span className="text-black text-base lg:text-2xl lg:font-bold">
          / {title}
        </span>
      </p>
    </div>
  );
};

function EventDetails() {
  return (
    <>
      <NavBar />
      <HeaderText title={"Rhythm & Soul Tour: Eternal Vibes"} />
      <div className="detailsBg py-10">
        <EventDetailsHeader
          title={"Rhythm & Soul Tour: Eternal Vibes "}
          image={img}
          date={"Thursday, September 25th 2025"}
          time={"9:00 PM - 12:00PM WAT"}
          location={"Eko Atlantic City (Lagos, Nigeria)"}
        />
      </div>
      <EventDetailsAbout
        paragraph1={`Join us for Rhythm & Soul Live — the ultimate night of music, magic, and movement! 
This year’s theme is “Eternal Vibes” — and we’re turning the volume up on soul, groove, and pure good energy.
Expect an unforgettable evening of smooth vocals, rich instrumentals, and rhythms that move you from your seat to the dance floor. Bring your friends, your partner, or come solo — this is a night for every music lover to connect, sway, and celebrate.`}
        paragraph2={`As a guest, you’ll enjoy exclusive live performances by top soul and R&B artists, a complimentary welcome cocktail or mocktail on arrival, and access to our VIP lounge upgrades with limited availability. Capture the moment at our free photo booth, discover surprise guest performances, and score exciting giveaways throughout the night — everything designed to make this an immersive, one-of-a-kind experience.
Date: Thursday, September 25th 2025
Venue: Eko Atlantic City (Lagos, Nigeria)`}
        price={"$90.00"}
        time={"Sept 25 - 9:00PM WAT"}
        title1={"About this event"}
        title2={"Perks of the Night"}
      />

      <Footer />
    </>
  );
}

export default EventDetails;
