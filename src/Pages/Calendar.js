import React from "react";

//Components
import Header from "../Components/Header";
import Container from "../Components/Container";
import Footer from "../Components/Footer";

const Calendar = () => (
  <div>
    <Header homeButton />
    <Container content="calendarView" />
    <Footer />
  </div>
);

export default Calendar;
