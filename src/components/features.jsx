import { Feature } from "./feature";

import phone from "../assets/images/image-hero.webp";
const features = [
  {
    id: 1,
    title: "Actionable insights",
    description:
      "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    id: 2,
    title: "Data-driven decision",
    description:
      "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    id: 3,
    title: "Always affordable",
    description:
      "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
  },
];
export const Features = () => {
  return (
    <div className='bg-ghost-white h-[58rem]'>
      <section className='grid' id='features'>
        <div className='w-80 md:w-[32rem] lg:w-[44rem] h-[11rem] md:h-[17rem] lg:[27rem] mx-auto relative'>
          <img
            src={phone}
            alt='phone with graph'
            className='absolute bottom-1/2 md:bottom-[35%] lg:bottom-1/4'
          />
        </div>
        <ul className='grid gap-12 px-5 max-w-[35rem] mx-auto lg:flex lg:max-w-[70rem] lg:pt-20'>
          {features.map((feature) => (
            <li key={feature.id}>
              <Feature
                index={feature.id}
                title={feature.title}
                description={feature.description}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
