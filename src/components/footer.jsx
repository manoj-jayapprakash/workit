import logo from "../assets/images/logo-dark.svg";
import { Social } from "./social";

export const Footer = () => {
  return (
    <footer className='py-16 grid place-items-center gap-8'>
      <img src={logo} alt='workit logo' />
      <Social />
    </footer>
  );
};
