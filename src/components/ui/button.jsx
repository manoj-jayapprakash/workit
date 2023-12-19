import PropTypes from "prop-types";

export const Button = ({ title, className = "" }) => {
  return (
    <button
      className={`p-4 bg-eucalyptus text-black font-bold hover:bg-transparent border border-eucalyptus hover:text-eucalyptus ${className}`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
