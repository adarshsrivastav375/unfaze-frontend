import ArrowButton from "../ArrowButton";
import background from "../../assets/NotSureBg.png";
import handshake from "../../assets/notSure.png";

const NotSureNeed = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden sm:px-20 gap-10"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
        <img src={handshake} alt="handshake" className="max-w-full h-auto" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Not sure what you need?
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Finding the right treatment is a key step in your mental health
          journey. Talk to one of our Mental Health Coaches to receive a
          personalised recommendation for your concerns.
        </p>
        <ArrowButton name={"See all Therapists"} />
      </div>
    </div>
  );
};

export default NotSureNeed;
