

// eslint-disable-next-line react/prop-types
const ApproachItem = ({ imageSrc, title, description }) => (
  <div className="flex flex-col items-center mt-2 max-md:mt-10">
    <img loading="lazy" src={imageSrc} alt={`${title} icon`} className="max-w-full aspect-[1.49] w-[209px]" />
    <h3 className="mt-5 text-4xl text-zinc-800">{title}</h3>
    <p className="self-stretch mt-5 text-2xl leading-9 text-center text-black text-opacity-70">{description}</p>
  </div>
);

const Approach = () => {
  const approaches = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3777812e3705488365e63ed3224b7db818d044a554bfe331677408f215db3fab?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      title: "Client-Centered",
      description: "We prioritize your comfort and well-being in every session."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/70996929ae5bfa83b413ef35d2f18462454376ed761c93cfcc6022bc94a8adc1?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      title: "Confidential",
      description: "We maintain strict confidentiality to ensure your privacy and trust."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5757285e36b53584ff008b08e3c3e0d59a1447128f849b03c65847517dee4e4b?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      title: "Holistic",
      description: "We consider all aspects of your life, including physical, emotional, and mental health."
    }
  ];

  return (
    <section className="flex flex-col items-center self-stretch p-20 mt-28 w-full bg-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-2xl font-bold text-orange-500 uppercase tracking-[2.8px]">Our Approach</h2>
      <h3 className="mt-5 text-7xl text-black leading-[76.3px] tracking-[2px] max-md:max-w-full max-md:text-4xl">Tailored Therapy for Every Individual</h3>
      <div className="mt-16 mb-12 w-full max-w-[1648px] max-md:my-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {approaches.map((approach, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <ApproachItem {...approach} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;