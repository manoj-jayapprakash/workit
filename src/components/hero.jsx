import { Navbar } from "./navbar";

import { Button } from "./ui/button";

export const Hero = () => {
  const clickHandler = () => {
    const featuresSection = document.querySelector("#features");
    featuresSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`h-[30rem] md:h-[33rem] lg:h-[45rem] bg-dark-purple text-white`}
    >
      <section className={`lg:max-w-[90rem] mx-auto`}>
        <Navbar />
        <div className=' grid place-items-center gap-4 md:w-[35rem] mx-auto'>
          <h1 className='text-5xl text-center my-8 md:text-6xl lg:text-[5rem] md:px-8'>
            Data{" "}
            <span className='inline-block border-b-4 pb-1 border-eucalyptus'>
              tailored
            </span>{" "}
            to your needs.
          </h1>
          <Button label={"Learn more"} onClick={clickHandler} />
        </div>
      </section>
    </div>
  );
};
