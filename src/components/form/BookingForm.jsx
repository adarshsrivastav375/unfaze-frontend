import { FaArrowCircleRight } from "react-icons/fa";

function BookingForm() {
    return (
        <>
            <form className="bg-white bg-opacity-30 shadow-md rounded-2xl px-8 py-6">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border-b border-white p-2 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mt-4 border-b border-white p-2 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
                />
                <input
                    type="text"
                    placeholder="Service"
                    className="w-full mt-4 border-b border-white p-2 bg-transparent text-sm text-white focus:outline-none placeholder-gray-200"
                />
                <button
                    type="submit"
                    className="mt-6 bg-orange-500 text-white text-sm py-2 px-4 rounded-3xl transition-transform transform hover:scale-105 flex items-center"
                >
                    Get To Know Our Therapists
                    <span className="ml-2">
                        <FaArrowCircleRight />
                    </span>
                </button>
            </form>
        </>

    );
}

export default BookingForm;