import logo from "../assets/images/logo-light.svg";

export const Navbar = () => {
  return (
    <header className='flex justify-between mx-auto px-4 py-8'>
      <nav>
        <img src={logo} alt='workit logo' />
      </nav>

      <button className='font-semibold border-b-2 border-[hsl(var(--eucalyptus))] hover:text-[hsl(var(--eucalyptus))]'>
        Apply for access
      </button>
    </header>
  );
};
