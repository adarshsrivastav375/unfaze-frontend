const ServiceCard = ({ title, description, icon, category }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow pt-1 pb-3 max-md:mt-10 max-md:max-w-full">
      <div className="text-sm text-orange-500 tracking-[2.8px] max-md:max-w-full">
        {category}
      </div>
      <div className="flex gap-2.5 text-2xl text-black max-md:flex-wrap">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="shrink-0 w-10 aspect-square"
        />
        <div className="flex-auto font-serif">{title}</div>
      </div>
      <p className="mt-9 text-sm leading-5 text-black text-opacity-70 max-md:max-w-full">
        {description}
      </p>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      category: "COUPLE",
      title: "Couples Therapy",
      description:
        "All of us want to feel loved and when we feel disconnected or stuck in a relationship it colors our want to when we feel entire lookout.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d381123cfb969408f217b3d379f3843c71eb553e757a70eb33189f8810fa9de?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
    },
    {
      category: "INDIVIDUAL",
      title: "Relationship Issues",
      description:
        "All of us want to feel loved and when we feel disconnected or stuck in a relationship it colors our want to when we feel entire lookout.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/37e47db80cd87cafc2a0d9ec9e7c9a89da971bb220dadd6a7cc6c44b54b3bee4?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
    },
    {
      category: "INDIVIDUAL",
      title: "Self-image Issues",
      description:
        "All of us want to feel loved and when we feel disconnected or stuck in a relationship it colors our want to when we feel entire lookout.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/de5a6c07557f80a6e2a16828c901a90108d58cf26e2da9b8a50a566795b721c5?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
    },
    {
      category: "INDIVIDUAL",
      title: "Work Stress",
      description:
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new cloud solution.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2326ff4301bc1f4c14b11488e6e500c9b8792f10091bb68670531163c96afd7c?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
    },
    {
      category: "FAMILY",
      title: "Grief/Loss",
      description:
        "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0417306969af354b5b7545dad3f59336d57c99d2fb6a674b551f4c53a4e65d88?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
    },
    {
      category: "INDIVIDUAL",
      title: "Trauma Recovery",
      description:
        "Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web enabled.",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a378db2f5ab3e9d1a4f99651ce8b13d4a81133fabe5425459292df2f02dba6bb?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-20 max-md:mt-10 px-20">
      <h2 className="self-center text-base text-orange-500 tracking-[2.8px]">
        OUR SERVICES
      </h2>
      <h3 className="self-center  text-3xl  text-black leading-[76.3px] tracking-[2px] max-md:max-w-full max-md:text-4xl font-serif	">
        Our Session Types
      </h3>
      <div className="self-center px-5 mt-10 w-full max-w-[1680px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className="self-center px-5 mt-16 w-full max-w-[1680px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={index + 3} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
