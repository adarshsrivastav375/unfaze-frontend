import background from "../../assets/ATWelcomeBackground.png";
import welcomeImg from "../../assets/aultTherapyWelcome.png";

const Hero2 = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden px-4 sm:px-20 gap-10"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:space-x-8">
        <div className="w-full md:w-[40%] flex justify-center md:justify-start mb-4 md:mb-0">
          <img src={welcomeImg} alt="handshake" className="max-w-full h-auto" />
        </div>
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-end text-center md:text-right px-4 md:px-0 md:ml-20 md:p-10">
          <h1 className="text-3xl md:text-6xl mb-4 font-heading">
            Welcome to <br />
            <span className="text-white">Adult therapy</span>
          </h1>
          <p className="text-sm mb-6 font-poppins md:mt-8 text-white md:ml-32">
            At Adult Therapy, we understand the complexities of adult life and
            the challenges that come with it. Our mission is to provide a safe
            and supportive space where you can explore your thoughts and
            feelings, gain insights, and work towards a more fulfilling life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
