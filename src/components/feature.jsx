import PropTypes from "prop-types";

export const Feature = (props) => {
  const { index, title, description } = props;
  return (
    <div className='grid place-items-center p-4 gap-4'>
      <p className='border border-black w-fit mx-auto px-4 py-2 rounded-full'>
        {index}
      </p>
      <h3 className=' text-2xl'>{title}</h3>
      <p className='text-center'>{description}</p>
    </div>
  );
};

Feature.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};
