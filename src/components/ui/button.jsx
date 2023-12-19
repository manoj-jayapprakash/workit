import PropTypes from "prop-types";

export const Button = ({ onClick, label, type = "button", className }) => {
  return (
    <button
      className={`p-4 bg-eucalyptus text-dark-purple font-bold hover:bg-transparent border border-eucalyptus hover:text-eucalyptus ${className}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};
