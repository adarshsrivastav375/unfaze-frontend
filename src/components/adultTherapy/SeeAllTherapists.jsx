import TherapistButtonCard from "../TherapistButtonCard";
import therapistImg from "../assets/therapiest.jpg";

const SeeAllTherapists = () => {
  const therapists = [
    {
      name: "Leona Raine",
      title: "Licensed Psychologist",
      imageUrl: therapistImg,
    },
    {
      name: "Simone Lawrence",
      title: "Mental Health Counselor",
      imageUrl: "path_to_simone_image.jpg",
    },
    {
      name: "Leona Raine",
      title: "Licensed Psychologist",
      imageUrl: "path_to_second_leona_image.jpg",
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center font-serif text-3xl mb-2">
        Meet Our Therapists
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-16">
        {therapists.map((therapist, index) => (
          <TherapistButtonCard key={index} {...therapist} />
        ))}
      </div>
    </div>
  );
};

export default SeeAllTherapists;
