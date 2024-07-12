import background from "../assets/about-bg.jpg";
import background2 from "../assets/about-img.png";
import { SiTicktick } from "react-icons/si";
import { FaArrowCircleRight } from "react-icons/fa";
const About = () => {
  const services = [
    "Individual Therapy",
    "Free Consultations",
    "Couples Therapy",
    "Online Counseling",
  ];
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-row items-center justify-center overflow-hidden px-40 gap-20 py-9"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-1/2 ">
        <h1 className="text-white py-2">ABOUT US</h1>
        <div className="mb-8 flex flex-col gap-5 ">
          <h1 className="text-4xl font-bold text-left">
            Licensed, Professional Therapists That You Can Trust
          </h1>
          <p className="text-black font-sans">
            At “Unfazed”, we recognize that not all wounds are visible, and we
            are dedicated to healing the unseen. In today &aposs world, all
            individuals face challenges in their professional and personal
            lives, and we aim to support them by helping them overcome mental
            health challenges.
          </p>
          <div className="container mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 ">
              {services.map((item, index) => (
                <li key={index} className="p-1 text-sm flex items-center">
                  <span className=" mr-2 text-white">
                    <SiTicktick />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container mx-auto">
          <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded transition-transform transform hover:scale-110 flex items-center">
            Get To Know Our Therapist
            <span className="ml-2">
              <FaArrowCircleRight />
            </span>
          </button>
        </div>
      </div>
      <div
        className="overflow-hidden w-1/2 h-[85vh] z-10"
        style={{
          backgroundImage: `url(${background2})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default About;
