import logo from "../assets/images/logo-light.svg";

export const Navbar = () => {
  return (
    <header className='py-8 px-4 flex justify-between'>
      <nav>
        <img src={logo} alt='workit logo' />
      </nav>
      <button className='font-semibold border-b-2 border-[hsl(var(--eucalyptus))] hover:text-[hsl(var(--eucalyptus))]'>
        Apply for access
      </button>
    </header>
  );
};
