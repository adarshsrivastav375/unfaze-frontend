/* eslint-disable react/prop-types */
import individualTherapyimg from "../../assets/individualTherapy.jpg";
import coupleTherapyimg from "../../assets/coupleTherapy.jpg";
import groupTherapyimg from "../../assets/groupTherapy.jpg";
import specializedTherapyimg from "../../assets/specializedTherapy.jpg";

import SectionTitle from "../SectionTitle";

const TherapyType = ({ imageSrc, title, description, issues }) => (
  <div className="flex flex-col grow pt-1 pb-14 w-full text-2xl text-black bg-white rounded-xl shadow-sm max-md:mt-7">
    <div className="flex flex-col px-2.5 pt-2.5">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} illustration`}
        className="w-full aspect-[1.69]"
      />
      <div className="flex flex-col p-2.5 mt-5">
        <h3 className=" text-base font-bold text-primary tracking-wide ">
          {title}
        </h3>
        <p className="mt-3 font-heading font-bold text-sm">{description}</p>
        <p className="mt-2 text-sm max-md:mt-10">{issues}</p>
      </div>
    </div>
  </div>
);

const TherapyTypes = () => {
  const therapyTypes = [
    {
      imageSrc: individualTherapyimg,
      title: "Individual Therapy",
      description:
        "Description: One-on-one sessions focusing on personal growth, emotional regulation, and mental health",
      issues:
        "Issues Addressed: Anxiety, depression, stress, trauma, self-esteem, and more",
    },
    {
      imageSrc: coupleTherapyimg,
      title: "Couples Therapy",
      description:
        "Description: Sessions designed to help couples improve communication, resolve conflicts, and strengthen their relationship.",
      issues:
        "Issues Addressed: Communication issues, infidelity, intimacy problems, and more.",
    },
    {
      imageSrc: groupTherapyimg,
      title: "Group Therapy",
      description:
        "Description: Group sessions that provide a supportive environment to share experiences and gain new perspectives.",
      issues:
        "Focus Areas: Anxiety support, depression management, stress relief, and more.",
    },
    {
      imageSrc: specializedTherapyimg,
      title: "Specialized Services",
      description:
        "Description: Tailored therapy for specific needs such as trauma recovery, grief counseling, and addiction support.",
      issues:
        "Specializations: Trauma-informed care, cognitive-behavioral therapy (CBT),etc.",
    },
  ];

  return (
    <section className="mt-20 md:px-20 max-md:mt-10 flex flex-col items-center">
      <SectionTitle
        subtitle="Therapy"
        title="Our Therapy types"
        className=" text-center"
      />

      <div className="px-5 mt-14 w-full max-w-[1685px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {therapyTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
            >
              <TherapyType {...type} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyTypes;
