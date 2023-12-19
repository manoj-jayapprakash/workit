import founder from "../assets/images/image-founder.webp";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <div className='py-8 relative h-[40rem] md:h-[32rem] lg:h-[40rem]'>
      <div className='absolute top-10 left-16 lg:left-[20%]'>
        <img
          src={founder}
          alt='founder profile'
          className='w-[16rem] lg:w-[28rem]'
        />
      </div>
      <div className='absolute top-64 left-0 bg-dark-purple mx-4 p-4 text-white grid place-items-center gap-8 md:w-[32rem] md:left-52 md:top-44 lg:w-[45rem] lg:left-[38%] lg:top-56 lg:place-items-start lg:p-16'>
        <h3 className='text-[2rem] lg:text-[3.5rem]'>Be the first to test</h3>
        <p className='text-center px-4 lg:text-left lg:p-0'>
          Hi, I&apos;m Louis Graham, the founder of the company. Book a demo
          call with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <Button label={"Apply for access"} />
      </div>
    </div>
  );
};
