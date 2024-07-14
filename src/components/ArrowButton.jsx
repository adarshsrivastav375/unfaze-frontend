import { LuArrowRightCircle } from "react-icons/lu";


// eslint-disable-next-line react/prop-types
const ArrowButton = ({ name }) => {
    return (
        <button className="bg-[#469BAF] text-white text-sm py-3 px-6 rounded-3xl transition-transform transform hover:scale-105 flex items-center">
            {name}
            <span className="ml-2">
                <LuArrowRightCircle />
            </span>
        </button>
    )
}

export default ArrowButton
