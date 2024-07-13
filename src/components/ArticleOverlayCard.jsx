import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";

const ArticleOverlayCard = ({
  imageUrl,
  date,
  title,
  description,
  articleId,
}) => (
  <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-[400px] relative">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover absolute inset-0"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
      <span className="text-sm text-gray-300">{date}</span>
      <h2 className="text-xl font-semibold mt-2 text-white line-clamp-2">
        {title}
      </h2>

      <Link
        to={`/article/${articleId}`}
        className="inline-flex items-center text-white hover:text-blue-400 mt-4"
      >
        View More{" "}
        <span className="px-3">
          <FiArrowRightCircle />
        </span>
      </Link>
    </div>
  </div>
);

export default ArticleOverlayCard;
