

// eslint-disable-next-line react/prop-types
function SectionTitle({ subtitle, title }) {
    return (
        <>
            <h2 className="text-2xl font-bold text-orange-500 uppercase tracking-[2.8px]">
                {subtitle}
            </h2>
            <h1 className="mt-7 text-7xl text-black leading-[76.3px] tracking-[2px] max-md:max-w-full max-md:text-4xl">
                {title}
            </h1>
        </>
    );
}

export default SectionTitle;