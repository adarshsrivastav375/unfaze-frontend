import BookingSection from "../components/home/BookingSection";
import About from "./About";
import SessionTypes from "./Services";
import HowWeCanBenefit from "./Process";
import MeetOurTherapists from "./MeatOur therapists";
import BookSession from "./BookSession";

function Home() {
  return (
    <>
      <BookingSection />
      <About />
      <SessionTypes />
      <HowWeCanBenefit />
      <MeetOurTherapists />
      <BookSession />
    </>
  );
}

export default Home;
