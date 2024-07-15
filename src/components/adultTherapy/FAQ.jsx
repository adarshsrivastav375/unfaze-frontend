const FAQ = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-7 max-md:flex-col max-md:gap-0 md:justify-between">
        <div className="self-stretch -mt-px mb-auto text-7xl text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <div className="self-stretch font-heading my-auto text-5xl text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Frequently Asked <br />
            Questions{" "}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow  text-xl text-black leading-[49.92px] max-md:mt-10 max-md:max-w-full md:ml-12">
            <h3 className="font-heading">
              Q: What is therapy, and how can it help me?
            </h3>
            <p className="text-sm">
              {" "}
              Therapy is a collaborative process where you work with a trained
              mental health professional to explore your thoughts, feelings, and
              behaviors. It helps you understand and manage your emotions,
              resolve personal challenges, and improve your overall well-being.
            </p>
            <h3 className="mt-3 font-heading max-md:max-w-full">
              Q: Is therapy confidential?
            </h3>
            <h3 className="mt-3 font-heading max-md:max-w-full">
              Q: How do I know if I need therapy?
            </h3>
            <h3 className="mt-3 font-heading max-md:max-w-full">
              Q: How do I choose the right therapist for me?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
