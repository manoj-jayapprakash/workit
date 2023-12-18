import { Navbar } from "./navbar";

import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className={`hero h-[60vh] text-white`}>
      <Navbar />
      <div className=' grid place-items-center gap-4 md:w-1/2 mx-auto max-w-5xl'>
        <h1 className='text-5xl text-center my-8'>
          Data{" "}
          <span className='inline-block border-b-4 pb-1 border-eucalyptus'>
            tailored
          </span>{" "}
          to your needs.
        </h1>
        <Button title={"Learn More"} />
      </div>
    </div>
  );
};
