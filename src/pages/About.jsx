import background from "../assets/about-bg.jpg";
import background2 from "../assets/about-img.png";
const About = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-row items-center justify-center overflow-hidden px-40"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-1/2 ">
        <div className="text-center mb-8 ">
          <h1 className="text-4xl font-bold text-left text-white font-sans">
          Licensed, Professional Therapists That You Can Trust
          </h1>
        </div>
        <div className="mb-8">
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-110">
            Booking Session Now
          </button>
        </div>
      </div>
      <div className="overflow-hidden w-1/2 h-[85vh] z-10"
      style={{
        backgroundImage: `url(${background2})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      </div>
    </div>
  );
};

export default About;
