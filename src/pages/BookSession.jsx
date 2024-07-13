import background from "../assets/bookSession.jpeg";
import { FaArrowCircleRight } from "react-icons/fa";

const BookSession = () => {
  return (
    <div className="relative flex items-center min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={background}
          alt="Background"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-12 text-white">
        {/* Text Content */}
        <div className="max-w-md mx-auto text-center md:text-left">
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

        {/* Form */}
        <div className="max-w-md mx-auto mt-8 md:mt-0">
          <form className="bg-white bg-opacity-30 shadow-md rounded-2xl px-8 py-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-white p-2 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mt-4 border-b border-white p-2 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
            />
            <input
              type="text"
              placeholder="Service"
              className="w-full mt-4 border-b border-white p-2 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
            />
            <button
              type="submit"
              className="mt-6 bg-orange-500 text-white text-sm py-2 px-4 rounded-3xl transition-transform transform hover:scale-105 flex items-center"
            >
              Get To Know Our Therapists
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
