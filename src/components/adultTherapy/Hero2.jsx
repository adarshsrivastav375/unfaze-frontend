
const Hero2 = () => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 mt-16 w-full min-h-[794px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/31ba9a1ef7f532801b4402a3538ce99d946d81eafab3f1d7509c4443eb4b5be6?apiKey=7fe77c278cb24c8997e7fc0b22dad903&" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="relative justify-center px-5 py-7 mb-3 w-full max-w-[1568px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eb20286ed7b3235c08942cd6b5d026d8142840e046ef82efc4451e13bc1eb5e?apiKey=7fe77c278cb24c8997e7fc0b22dad903&" alt="Adult therapy illustration" className="grow w-full aspect-[0.99] max-md:mt-10 max-md:max-w-full" />
          </div>
          <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col justify-center items-end self-stretch pl-20 my-auto text-right text-white max-md:mt-10 max-md:max-w-full">
              <h2 className="self-end text-8xl leading-[105px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Welcome to <br />
                <span className="text-white">Adult therapy</span>
              </h2>
              <p className="self-start mt-10 text-xl tracking-wider leading-8 max-md:mt-10 max-md:max-w-full">
                At Adult Therapy, we understand the complexities of adult life and the challenges that come with it. Our mission is to provide a safe and supportive space where you can explore your thoughts and feelings, gain insights, and work towards a more fulfilling life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;