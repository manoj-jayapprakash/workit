import { Feature } from "./feature";

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
    <ul className='mt-36 mb-8 grid gap-8'>
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
  );
};
