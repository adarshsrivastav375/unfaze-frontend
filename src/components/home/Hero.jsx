import background from "../../assets/Hero-bg.jpg";

const Hero = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col items-center justify-center overflow-hidden sm:px-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col  w-full md:w-1/2 mr-auto ml-20">
        <div className="text-center mb-8 mt-10 pt-10">
          <h1 className="text-2xl md:text-6xl xl:text-6xl  font-bold text-left text-white">
            Congratulation! You&apos;re already ahead of 16 crore People
          </h1>
        </div>
        <div className=" hidden lg:flex mb-8">
          <button className="bg-orange-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-110">
            Book Session Now
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 bg-white bg-opacity-30 shadow-md rounded-2xl mb-3">
        <input
          type="text"
          placeholder="Name"
          className="border-white border-b p-1 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
          aria-label="Name"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-white border-b p-1 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
          aria-label="Email"
        />
        <input
          type="text"
          placeholder="Service"
          className="border-white border-b p-1 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
          aria-label="Service"
        />
        <button className="bg-orange-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-110 border-b-2 border-transparent hover:border-orange-500">
          Book Session
        </button>
      </div>
    </div>
  );
};

export default Hero;
