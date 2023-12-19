import PropTypes from "prop-types";

export const Feature = (props) => {
  const { index, title, description } = props;
  return (
    <div className='grid place-items-center gap-4 md:flex md:items-center md:gap-12 lg:grid'>
      <p className='border border-black w-fit mx-auto px-4 py-2 rounded-full font-fraunces'>
        {index}
      </p>
      <div className='grid gap-4 text-center md:text-left lg:text-center'>
        <h2 className='font-semibold text-dark-purple text-[1.75rem] text-2xl lg:text-[2rem]'>
          {title}
        </h2>
        <p className=''>{description}</p>
      </div>
    </div>
  );
};

Feature.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};
