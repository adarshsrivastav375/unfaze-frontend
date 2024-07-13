import Hero from "../components/home/Hero";
import About from "../components/home/About";
import SessionTypes from "./Services";
import HowWeCanBenefit from "./Process";
import MeetOurTherapists from "./MeatOurTherapy";
import BookSession from "./BookSession";

import Blog from "../components/Blog";
import JoinCommunity from "../components/JoinCommunity";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <SessionTypes />
      <HowWeCanBenefit />
      <MeetOurTherapists />
      <BookSession />
      <Blog />
      <JoinCommunity />
    </div>
  );
}

export default Home;
