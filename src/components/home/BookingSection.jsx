import background from "../../assets/Hero-bg.jpg";

const BookingSection = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col items-center justify-center overflow-hidden my-[-5px]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-2/5 mr-auto ml-20">
        <div className="text-center mb-8 ">
          <h1 className="text-4xl font-bold text-left text-white">
            Congratulation! You&apos;re already ahead of 16 crore People
          </h1>
        </div>
        <div className="mb-8">
          <button className="bg-orange-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-110">
            Book Session Now
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4 p-4 bg-white bg-opacity-30 shadow-md rounded-2xl ">
        <input
          type="text"
          placeholder="Name"
          className=" border-white border-b p-1 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
        />
        <input
          type="email"
          placeholder="Email"
          className=" border-white border-b p-1 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
        />
        <input
          type="text"
          placeholder="Service"
          className=" border-white border-b p-1 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
        />
        <button className="bg-orange-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-110 border-b-2 border-transparent hover:border-orange-500">
          Booking Session
        </button>
      </div>
    </div>
  );
};

export default BookingSection;
