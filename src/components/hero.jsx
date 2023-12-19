import { Navbar } from "./navbar";

import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className={`hero h-[60vh] md:h-[48vh] lg:h-[75vh] text-white`}>
      <Navbar />
      <div className=' grid place-items-center gap-4 md:w-[35rem] mx-auto'>
        <h1 className='text-5xl text-center my-8 md:text-6xl lg:text-7xl md:px-8'>
          Data{" "}
          <span className='inline-block border-b-4 pb-1 border-eucalyptus'>
            tailored
          </span>{" "}
          to your needs.
        </h1>
        <Button title={"Learn more"} />
      </div>
    </section>
  );
};
