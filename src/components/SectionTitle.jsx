// eslint-disable-next-line react/prop-types
function SectionTitle({ subtitle, title }) {
  return (
    <>
      <h2 className="text-2xl font-semibold text-orange-500 uppercase tracking-[2px]">
        {subtitle}
      </h2>
      <h1 className="mt-4 text-6xl text-black font-heading tracking-[2px] max-md:max-w-full max-md:text-4xl">
        {title}
      </h1>
    </>
  );
}

export default SectionTitle;
