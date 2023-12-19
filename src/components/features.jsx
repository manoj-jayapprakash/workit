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
    <section className='features relative'>
      <div className='absolute w-3/4 -top-[10%] left-[15%] md:w-[34rem] md:-top-[20%] md:left-[20%] lg:w-[45rem] lg:left-[30%] lg:-top-[50%]'>
        <img src={phone} alt='phone with graph' />
      </div>
      <ul className='pt-48 pb-20 grid gap-8 md:w-[36rem] lg:max-w-5xl mx-auto lg:flex lg:items-center lg:w-full '>
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
  );
};
