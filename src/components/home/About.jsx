import background from "../../assets/about-bg.jpg";
import background2 from "../../assets/about-img.png";
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
      className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 md:px-10 lg:px-20 gap-6 md:gap-12 py-8 md:py-12"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="text-white py-2 text-center md:text-left">ABOUT US</h1>
        <div className="mb-8 flex flex-col gap-4 md:gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
            Licensed, Professional Therapists That You Can Trust
          </h1>
          <p className="text-gray-800 text-center md:text-left">
            At “Unfazed”, we recognize that not all wounds are visible, and we
            are dedicated to healing the unseen. In today's world, all
            individuals face challenges in their professional and personal
            lives, and we aim to support them by helping them overcome mental
            health challenges.
          </p>
          <div className="container mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {services.map((item, index) => (
                <li key={index} className="flex items-center text-gray-800">
                  <span className="mr-2 text-white">
                    <SiTicktick />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container mx-auto text-center md:text-left">
          <button className="bg-blue-500 text-white text-sm py-3 px-6 rounded-lg transition-transform transform hover:scale-105 flex items-center">
            Get To Know Our Therapists
            <span className="ml-2">
              <FaArrowCircleRight />
            </span>
          </button>
        </div>
      </div>
      <div
        className="overflow-hidden w-full md:w-1/2 h-60 md:h-auto z-10"
        style={{
          backgroundImage: `url(${background2})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        aria-label="About Us Image"
      ></div>
    </div>
  );
};

export default About;
