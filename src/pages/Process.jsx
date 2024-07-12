const benefits = [
  {
    title: "Get Your Therapist",
    description:
      "Take the first step towards a better perspective. Choose from the list of our mental health professionals, each equipped with the expertise to provide you with the support and guidance you need.",
    icon: "🧑‍⚕️", // Placeholder for the actual icon
  },
  {
    title: "Get Your Personal Stylist",
    description:
      "Wish you had someone who could understand your unique style and help you look and feel your best every day, just as those celebs do? Elevate your style with a personal stylist today!",
    icon: "💇‍♀️", // Placeholder for the actual icon
  },
  {
    title: "Talk It Out!",
    description:
      "Ever felt the need to let go of pent-up emotions? Our experts understand and provide you with the space to experience a profound release that brings clarity and relief. Just talk it out, for FREE!",
    icon: "🗣️", // Placeholder for the actual icon
  },
];

const HowWeCanBenefit = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-200">
      <h3 className="text-center text-orange-500 font-body uppercase tracking-widest mb-2">
        The Process
      </h3>
      <h2 className="text-center text-3xl font-display font-medium mb-6">
        How We Can Benefit You!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="relative">
            <div className="text-center p-6 flex flex-col items-center z-10 relative">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-display font-medium mb-2">
                {benefit.title}
              </h3>
              <p className="font-body text-gray-700">{benefit.description}</p>
            </div>
            {index < benefits.length - 1 && (
              <div className="absolute bg-slate-300 h-px w-[12rem] z-20 top-[3rem]  right-0 -mr-[7rem]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeCanBenefit;
