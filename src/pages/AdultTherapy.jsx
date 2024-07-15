import Hero from "../components/adultTherapy/Hero";
import Hero2 from "../components/adultTherapy/Hero2";
import TherapyApproach from "../components/adultTherapy/TherapyApproach";
import TherapyTypes from "../components/adultTherapy/TherapyTypes";
import MeetOurTherapists from "./MeatOurTherapists";
import Blog from "../components/Blog";
import NotSureNeed from "../components/adultTherapy/NotSureNeed";
import FAQ from "../components/adultTherapy/FAQ";
const AdultTherapy = () => {
  return (
    <div className="mt-10 flex justify-center items-center flex-col">
      <Hero />
      <Hero2 />
      <TherapyTypes />
      <TherapyApproach />
      <MeetOurTherapists />
      <Blog />
      <NotSureNeed />
      <FAQ />
    </div>
  );
};
export default AdultTherapy;
