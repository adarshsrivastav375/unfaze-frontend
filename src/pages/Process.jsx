import icon1 from "../assets/process1.png";
import icon2 from "../assets/process2.png";
import icon3 from "../assets/process3.png";

const benefits = [
  {
    title: "Get Your Therapist",
    description:
      "Take the first step towards a better perspective. Choose from the list of our mental health professionals, each equipped with the expertise to provide you with the support and guidance you need.",
    icon: icon1,
  },
  {
    title: "Get Your Personal Stylist",
    description:
      "Wish you had someone who could understand your unique style and help you look and feel your best every day, just as those celebs do? Elevate your style with a personal stylist today!",
    icon: icon2,
  },
  {
    title: "Talk It Out!",
    description:
      "Ever felt the need to let go of pent-up emotions? Our experts understand and provide you with the space to experience a profound release that brings clarity and relief. Just talk it out, for FREE!",
    icon: icon3,
  },
];

const HowWeCanBenefit = () => {
  return (
    <div className="flex flex-col px-4 py-8 bg-gray-200 w-full">
      <h3 className="text-center text-orange-500 font-body uppercase tracking-widest mb-2">
        The Process
      </h3>
      <h2 className="text-center text-3xl font-display font-medium mb-6">
        How We Can Benefit You!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="relative px-5">
            <div className="text-center p-6 flex flex-col items-center z-10 relative">
              <img src={benefit.icon} alt={benefit.title} className="text-1xl mb-4 w-28 h-24" />
              <h3 className="text-xl font-display font-medium mb-2">
                {benefit.title}
              </h3>
              <p className="font-body text-gray-700">{benefit.description}</p>
            </div>
            {index < benefits.length - 1 && (
              <div className="absolute bg-slate-300 h-px w-[12rem] z-20 top-[3rem] right-0 -mr-[7rem]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeCanBenefit;
