import BookingSection from "../components/home/BookingSection";
import About from "./About";
import SessionTypes from "./Services";
import HowWeCanBenefit from "./Process";
import MeetOurTherapists from "./MeatOurTherapists";
import BookSession from "./BookSession";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <BookingSection />
      <About />
      <SessionTypes />
      <HowWeCanBenefit />
      <MeetOurTherapists />
      <BookSession />
      <Footer />
    </>
  );
}

export default Home;
