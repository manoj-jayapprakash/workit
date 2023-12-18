import fb from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import twitter from "../assets/images/icon-twitter.svg";

const socialLinks = [
  {
    id: 1,
    image: fb,
    title: "facebook",
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    title: "instagram",
    image: instagram,
    link: "https://www.instagram.com",
  },
  {
    id: 3,
    title: "twitter",
    image: twitter,
    link: "https://www.x.com",
  },
];

export const Social = () => {
  return (
    <ul className='flex items-center gap-8'>
      {socialLinks.map((social) => (
        <li key={social.id}>
          <a>
            <img src={social.image} alt={`${social.title} logo`} />
          </a>
        </li>
      ))}
    </ul>
  );
};
