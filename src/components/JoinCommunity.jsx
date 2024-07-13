import img from "../assets/joinCommunity.png";
const JoinCommunity = () => {
  return (
    <div className="flex flex-col justify-center py-16 bg-white px-">
      <h2 className="text-orange-600 text-sm font-bold mb-2 text-start">
        Join Our Community
      </h2>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="max-w-4xl mx-auto text-center flex flex-col justify-start">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            Together We Can Make Great Progress
          </h1>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium shadow-md w-1/2 hover:bg-blue-600 transition duration-300 ease-in-out">
            Apply Today
          </button>
        </div>
        <div className="mt-10 w-[60%]">
          <img src={img} alt="image" className="shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
