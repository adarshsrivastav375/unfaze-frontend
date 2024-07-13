import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";

const ArticleCard = ({ imageUrl, date, title, description, articleId }) => (
  <div className="max-w-md mx-auto bg-white rounded-lg shadow-md image-full overflow-hidden hover:shadow-lg transition-shadow h-[400px] flex flex-col">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-4 flex flex-col flex-grow">
      <span className="text-sm text-gray-600">{date}</span>
      <h2 className="text-xl font-semibold mt-2 line-clamp-2">{title}</h2>
      <p className="text-gray-600 mt-2 flex-grow overflow-hidden line-clamp-3">
        {description}
      </p>
      <Link
        to={`/article/${articleId}`}
        className="inline-flex items-center hover:text-blue-800 mt-auto"
      >
        View More
        <span className="px-3">
          <FiArrowRightCircle />
        </span>
      </Link>
    </div>
  </div>
);

export default ArticleCard;
