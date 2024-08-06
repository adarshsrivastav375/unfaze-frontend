import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ color, size, width, arrow, children }) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded focus:outline-none focus:ring transition transform hover:scale-105";
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-2.5 text-lg",
  };
  const widthClasses = width === "full" ? "w-full" : "";

  return (
    <button
      className={`${baseStyle} ${sizeClasses[size]} ${widthClasses} ${color}`}
    >
      <span>{children}</span>
      {arrow && <FaArrowRight className="ml-2" />}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  width: PropTypes.oneOf(["full", "content"]),
  arrow: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: "bg-primary text-white hover:bg-blue-600",
  size: "medium",
  width: "content",
  arrow: true,
};

export default Button;
