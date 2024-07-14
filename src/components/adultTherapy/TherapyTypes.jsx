/* eslint-disable react/prop-types */
import SectionTitle from "../SectionTitle";

const TherapyType = ({ imageSrc, title, description, issues }) => (
  <div className="flex flex-col grow pt-1 pb-14 w-full text-2xl text-black bg-white rounded-xl shadow-sm max-md:mt-7">
    <div className="flex flex-col px-2.5 pt-2.5">
      <img loading="lazy" src={imageSrc} alt={`${title} illustration`} className="w-full aspect-[1.69]" />
      <div className="flex flex-col p-2.5 mt-5">
        <h3 className="font-bold text-amber-600 tracking-[2.8px]">{title}</h3>
        <p className="mt-6">{description}</p>
        <p className="mt-12 text-lg max-md:mt-10">{issues}</p>
      </div>
    </div>
  </div>
);

const TherapyTypes = () => {
  const therapyTypes = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f9bfbbe29724b26232310e6fdca27f086e6b1038908fe631cfd9ea134ec7a9d?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      title: "Individual Therapy",
      description: "Description: One-on-one sessions focusing on personal growth, emotional regulation, and mental health",
      issues: "Issues Addressed: Anxiety, depression, stress, trauma, self-esteem, and more"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d06da6573ae5ed05c4774d30587a9f8bb8dfd4ceda7e61ee75995b5756680e4a?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      title: "Couples Therapy",
      description: "Description: Sessions designed to help couples improve communication, resolve conflicts, and strengthen their relationship.",
      issues: "Issues Addressed: Communication issues, infidelity, intimacy problems, and more."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/854bd4995c527eba22d5e9808f3c4c4fd6fd5ea1ef523619510372401718fe8b?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      title: "Group Therapy",
      description: "Description: Group sessions that provide a supportive environment to share experiences and gain new perspectives.",
      issues: "Focus Areas: Anxiety support, depression management, stress relief, and more."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d7099b9dda2e03bdf27a0f0545151d9b59dcbe5206316bf37dcb6010022d6bf?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      title: "Specialized Services",
      description: "Description: Tailored therapy for specific needs such as trauma recovery, grief counseling, and addiction support.",
      issues: "Specializations: Trauma-informed care, cognitive-behavioral therapy (CBT),etc."
    }
  ];

  return (
    <section className="mt-20 max-md:mt-10 flex flex-col items-center">
      <SectionTitle subtitle="Therapy" title="Our Therapy types" className=" text-center" />

      <div className="px-5 mt-14 w-full max-w-[1685px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {therapyTypes.map((type, index) => (
            <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <TherapyType {...type} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyTypes;