import image1 from "./src/assets/image1.jpg";
import image2 from "./src/assets/image2.jpg";
import image3 from "./src/assets/image3.jpg";
import image4 from "./src/assets/image4.jpg";
import image5 from "./src/assets/image5.jpg";
import image6 from "./src/assets/image6.jpg";

export const events = [
  {
    image: image1,
    title: "Toolkits for a Successful Marriage",
    location: "University of Ibadan Main Hall, Ibadan",
    date: "Sept 20, 2025",
    time: "10:00 PM - 11:00PM",
    price: "$500.00",
    getTickets: "Get Tickets",
  },
  {
    image: image2,
    title: "Lagos Business Summit: Networking for Growth",
    location: "Teslim Balogun Stadium (Lagos, Nigeria)",
    date: "Sept 20, 2025",
    time: "10:00 PM - 11:00PM",
    price: "$290.00",
    getTickets: "Get Tickets",
  },
  {
    image: image3,
    title: "Film Under the Stars: Outdoor Cinema",
    location: "International Conference Centre, Abuja",
    date: "Sept 20, 2025",
    time: "10:00 PM - 11:00PM",
    price: "$60.00",
    getTickets: "Get Tickets",
  },
  {
    image: image4,
    title: "Tech Innovators: Shaping Africa’s Future",
    location: "Michael Okpara Square, Enugu",
    date: "Sept 20, 2025",
    time: "10:00 PM - 11:00PM",
    price: "$520.00",
    getTickets: "Get Tickets",
  },
  {
    image: image5,
    title: "Taste and Toast: Wine and Culinary Adventure",
    location: "Ahmadu Bello Stadium, Kaduna",
    date: "Sept 20, 2025",
    time: "10:00 PM - 11:00PM",
    price: "$99.0",
    getTickets: "Get Tickets",
  },
  {
    image: image6,
    title: "Cultural Rhythms : Drums and Dance",
    location: "Rwang Pam Township Stadium, Jos",
    date: "Sept 20, 2025",
    time: "10:00 PM - 11:00PM",
    price: "$1400.00",
    getTickets: "Get Tickets",
  },
];

import bag from "./src/assets/bag.png";
import football from "./src/assets/football.png";
import festival from "./src/assets/festival.png";
import cutleries from "./src/assets/cutleries.png";
import chatBox from "./src/assets/chatBox.png";
import gaming from "./src/assets/gaming.png";

export const Categories = [
  {
    image: bag,
    eventName: "Business",
  },
  {
    image: football,
    eventName: "Sports",
  },
  {
    image: festival,
    eventName: "Festival",
  },
  {
    image: cutleries,
    eventName: "Food & Drinks",
  },
  {
    image: chatBox,
    eventName: "Dating",
  },
  {
    image: gaming,
    eventName: "Hobbies",
  },
];



//Dashboard Mapped data's

import dashboardDate from "./src/assets/dashboardDate.png"
import dashboardPrice from "./src/assets/dashboardPrice.png"
import dashboardTicket from "./src/assets/dashboardTicket.png"
import dashboardUsers from "./src/assets/dashboardUsers.png"


export const menu = [
  {
    image: dashboardDate,
    header: "Total Events",
    value: 12,
    previousMonthData: "+2 from last month",
  },
  {
    image: dashboardTicket,
    header: "Ticket Sales",
    value: 1241,
    previousMonthData: "+18% from last month",
  },
  {
    image: dashboardPrice,
    header: "Total Revenue",
    value: 42500,
    previousMonthData: "28% from last month",
  },
  {
    image: dashboardUsers,
    header: "Active Users",
    value: 120,
    previousMonthData: "+32 from week",
  },
];



import ticket from "./src/assets/ticket.png"
import error from "./src/assets/error.png"
import calenderActivity from "./src/assets/calenderActivity.png"

export const recentActivity = [
  {
    image: ticket,
    notify: "New ticket purchased for Rhythm & Soul Tour: Eternal Vibes",
    time: "5 Minutes ago",
  },
  {
    image: calenderActivity,
    notify: "Event ‘ Gospel Vibe Tour: Praise on the Nile’ has been updated",
    time: "1 hour ago",
  },
  {
    image: ticket,
    notify: "10 New tickets sold for Rhythm & Soul Tour: Eternal Vibes ticket",
    time: "2 hour ago",
  },
  {
    image: error,
    notify: "Refund processed for order #63738",
    time: "5 hour ago",
  },
];