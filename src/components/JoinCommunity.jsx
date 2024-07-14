import bgImg from "../assets/joinCommunity.png";
import ArrowButton from "./ArrowButton";
const JoinCommunity = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-white">
      <div className="w-full md:w-[60%] p-4 z-20">
        <h1 className="text-orange-500 text-sm font-bold">JOIN OUR COMMUNITY</h1>
        <h2 className="text-6xl font-bold text-black my-4">Together We Can Make Great Progress</h2>
        <ArrowButton name={"Apply Today"} />
      </div>
      <div className="w-full md:[60%] p-4">
        <img
          src={bgImg}
          alt="Woman on laptop"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default JoinCommunity;
