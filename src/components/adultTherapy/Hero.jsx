import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="mt-10 w-full max-w-[1677px] max-md:max-w-full ">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 lg:px-32">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch pt-2.5 pr-2.5 my-auto text-xl text-black max-md:mt-10 max-md:max-w-full">
            <h1 className="self-stretch text-7xl leading-[85px] font-heading max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Empowering Your Journey to Mental Wellness
            </h1>
            <p className="mt-5 ml-2.5 tracking-wider leading-[150%] max-md:max-w-full">
              Professional therapy services tailored to your unique needs.
            </p>
            <Link
              to="/therapists"
              className="flex flex-col justify-center p-2.5 mt-2.5 max-w-full font-medium text-white w-[302px]"
            >
              <div className="flex flex-col justify-center px-8 py-2.5 w-full bg-amber-600 rounded-[40px] max-md:px-5">
                <div className="flex gap-5">
                  <span className="flex-auto my-auto">View Therapists</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/badb4a5010fc236175da98957434e1702094a82e5b967147679c34c98761c536?apiKey=7fe77c278cb24c8997e7fc0b22dad903&"
                    alt=""
                    className="shrink-0 w-10 aspect-square fill-amber-600"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e514656139a35938ae48c45d8d816144920d94753670584689ff91378d0b7c31?apiKey=7fe77c278cb24c8997e7fc0b22dad903&"
            alt="Therapy session illustration"
            className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
