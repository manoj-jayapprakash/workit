import founder from "../assets/images/image-founder.webp";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <div className='relative h-[40rem] bg-white p-4 max-w-5xl lg:mx-auto w-full'>
      <div className='p-4 md:absolute w-96 left-0 top-0'>
        <img src={founder} alt='founder profile' className='mx-auto' />
      </div>
      <div className='bg-dark-purple text-white grid place-items-center gap-8 p-8 absolute top-72 md:w-[32rem] md:left-[30%]  md:top-[30%]lg:left-[70%] lg:top-[25%]'>
        <h3 className='text-[2rem]'>Be the first to test</h3>
        <p className='text-center px-8'>
          Hi, I&apos;m Louis Graham, the founder of the company. Book a demo
          call with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <Button title={"Apply for access"} />
      </div>
    </div>
  );
};
