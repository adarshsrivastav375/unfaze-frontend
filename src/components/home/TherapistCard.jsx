import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FiArrowRightCircle } from "react-icons/fi";

const TherapistCard = ({ name, title, imageUrl }) => (
  <ImageCard imgSrc={imageUrl}>
    <div className="p-4">
      <h3 className="text-lg md:text-xl font-bold mb-2">{name}</h3>
      <p className="hidden text-sm md:block">
        She danced through life with a radiant smile, her laughter echoing joy
        in every step.
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex space-x-4 text-3xl text-white ">
          <button>
            <TiSocialLinkedinCircular />
          </button>
          <button>
            <TiSocialTwitterCircular />
          </button>
        </div>
        <Link
          to="/profile:id"
          className="flex items-center space-x-2 text-sm text-white"
        >
          <span>view profile</span>
          <button className="text-2xl">
            <FiArrowRightCircle />
          </button>
        </Link>
      </div>
    </div>
  </ImageCard>
);

export default TherapistCard;
