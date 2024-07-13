import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function IconButton(props) {
  return (
    <div className="flex items-center justify-center mt-4 lg:mt-0 lg:order-2">
      <Link
        to="/therapists"
        className="bg-orange-500 text-white py-2 px-4 rounded flex items-center space-x-2 transition-transform transform hover:scale-110"
      >
        <span className="text-sm">{props.title}</span>{" "}
        <span>
          {" "}
          <FaArrowRight />
        </span>
      </Link>
    </div>
  );
}

export default IconButton;
