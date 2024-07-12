import background from "../assets/bokksessionBg.png";
import { FaArrowCircleRight } from "react-icons/fa";

const BookSession = () => {
  return (
    <div className="relative flex items-center min-h-screen justify-center ">
      <div className="absolute inset-0 transform -rotate-3 w-[105%] ">
        <img
          className="w-full h-full object-cover"
          src={background}
          alt="Background"
        />
      </div>
      <div className=" flex flex-row">
        <div className="relative p-8 max-w-md mx-auto text-white ">
          <h2 className="text-orange-600 text-sm font-bold">
            PSYCHOTHERAPISTS ONLINE
          </h2>
          <h1 className="text-4xl font-semibold my-4">
            Schedule Your Online Session Today
          </h1>
          <p className="mb-6">
            Therapists have a minimum of 7 years experience, are accredited and
            insured to practice privately.
          </p>
        </div>
        <div className="relative p-8 max-w-md mx-auto text-white">
          <form
            action=""
            className="flex flex-col items-center  space-x-4 py-2 bg-white w-60 bg-opacity-30 shadow-md rounded-2xl gap-6  "
          >
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
            <button className="bg-orange-500 text-white text-sm py-1 px-1 rounded-3xl transition-transform transform hover:scale-110 flex items-center">
              Get To Know Our Therapist
              <span className="ml-2">
                <FaArrowCircleRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookSession;
