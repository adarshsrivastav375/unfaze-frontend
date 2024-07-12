import { FaArrowCircleRight } from "react-icons/fa";

function BookingForm() {
    return (
        <form
            action=""
            className="flex flex-col items-center py-2 bg-white w-60 bg-opacity-30 shadow-md rounded-2xl gap-6  "
        >
            <input
                type="text"
                placeholder="Name"
                className=" border-white border-b p-1 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
            />
            <input
                type="email"
                placeholder="Email"
                className=" border-white border-b p-1 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
            />
            <input
                type="text"
                placeholder="Service"
                className=" border-white border-b p-1 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
            />
            <button className="bg-orange-500 text-white text-sm py-1 px-1 rounded-3xl transition-transform transform hover:scale-110 flex items-center">
                Get To Know Our Therapist
                <span className="ml-2">
                    <FaArrowCircleRight />
                </span>
            </button>
        </form>
    );
}

export default BookingForm;