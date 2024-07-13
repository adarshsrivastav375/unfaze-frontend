import ArticleOverlayCard from "./ArticleOverlayCard";
import ArticleCard from "./ArticleCard";

function Blog() {
  const articles = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3f464deef565fccad98427b032862d09196163633eb6d76183c11589c8bbde31?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      date: "BY BOLDTHEMES / JANUARY 10, 2018",
      title: "Building Your Self Confidence",
      description:
        "Collaboratively administrate empowered markets via plug-and-play networks.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e0a9efe832e897b5e39fd5aa379d0b700730b3ec71f00e8f31efca68241f6aa1?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      date: "BY BOLDTHEMES / JANUARY 10, 2018",
      title: "How to Improve Your Parenting Skills",
      description:
        "Collaboratively administrate empowered markets via plug-and-play networks.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f96e046296c28983a68b9c0f0dc3a845b2423403bcb064118942c9fa4af31dbb?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      date: "BY BOLDTHEMES / JANUARY 10, 2018",
      title: "Why the Kids Are Not Alright",
      description:
        "What symptoms we should look for when analyzing their behavior.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e63464a659d14d25d4facdcabb127abaf75042606b4b80b5c702b2a53d76da52?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      date: "BY BOLDTHEMES / JANUARY 10, 2018",
      title: "Managing Anxiety & Stress During COVID-19",
      description:
        "Collaboratively administrate empowered markets via plug-and-play networks.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f2a17ef575838b381cab29c5a58e96f4b7e881aa37551a8a7973ce4b41af43c1?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      date: "BY BOLDTHEMES / JANUARY 10, 2018",
      title: "Cognitive-Behavioral Therapy Group",
      description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/708fd070fd8b8b886d61ccc4877a78ad9a94fc8a297e3a83f271c43e69bc63b0?apiKey=7fe77c278cb24c8997e7fc0b22dad903&",
      date: "BY BOLDTHEMES / JANUARY 10, 2018",
      title: "Improving Mental Health Through Meditation",
      description:
        "Collaboratively administrate empowered markets via plug-and-play networks.",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center px-16 py-20 bg-zinc-100 max-md:px-5">
        <div className="flex flex-col w-full max-w-[1482px] max-md:max-w-full">
          <div className="self-center text-sm text-orange-500 tracking-[2.8px]">
            PSYCHOTHERAPISTS ONLINE
          </div>
          <h2 className="text-center font-serif text-3xl mb-2">
            Today's Essential Reads
          </h2>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap justify-center gap-5">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="w-[30%] min-w-[300px] mb-5 max-md:w-full"
                >
                  {index % 2 === 0 ? (
                    <ArticleCard {...article} />
                  ) : (
                    <ArticleOverlayCard {...article} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
