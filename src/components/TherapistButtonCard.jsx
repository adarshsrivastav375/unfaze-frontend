import { Link } from "react-router-dom";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { FiArrowRightCircle } from "react-icons/fi";
import ImageCard from "./TherapistButtonCard";
import ArrowButton from "./ArrowButton";

const TherapistButtonCard = ({ name, title, imageUrl }) => (
  <ImageCard imgSrc={imageUrl}>
    <div className="p-4 flex flex-col h-full justify-between">
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-2">{name}</h3>
        <p className="hidden text-sm md:block">{title}</p>
      </div>
      <div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex space-x-4 text-3xl text-white">
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
        <div className="flex justify-center mt-4">
          <ArrowButton name={"BOOK APPOINTMENT"} />
        </div>
      </div>
    </div>
  </ImageCard>
);

export default TherapistButtonCard;
