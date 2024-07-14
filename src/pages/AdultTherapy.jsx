import Hero from "../components/adultTherapy/Hero";
import Hero2 from "../components/adultTherapy/Hero2";
import TherapyApproach from "../components/adultTherapy/TherapyApproach";
import TherapyTypes from "../components/adultTherapy/TherapyTypes";
import MeetOurTherapists from "./MeatOurTherapists"
const AdultTherapy = () => {
  return (
    <div className="mt-5 p-5 flex justify-center items-center flex-col">
      <Hero />
      <Hero2 />
      <TherapyTypes />
      <TherapyApproach />
      <MeetOurTherapists />
      <Hero />
      <Hero />
    </div>
  );
};
export default AdultTherapy;
