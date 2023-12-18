import founder from "../assets/images/image-founder.webp";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <div className=''>
      <img src={founder} alt='founder profile' className='w-3/4 mx-auto' />
      <div className='bg-dark-purple text-white grid place-items-center gap-8 p-8'>
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
