import background from "../assets/bookSession.jpeg";
import BookingForm from "../components/form/BookingForm";

const BookSession = () => {
  return (
    <div className="relative flex items-center min-h-screen">
      
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={background}
          alt="Background"
        />
      </div>

    
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-12 text-white">
        <div className="max-w-md mx-auto text-center md:text-left">
          <h2 className="text-orange-600 text-sm font-bold">
            PSYCHOTHERAPISTS ONLINE
          </h2>
          <h1 className="text-4xl font-semibold my-4">
            Schedule Your Online Session Today
          </h1>
          <p className="mb-6">
            Therapists have a minimum of 7 years experience, are accredited and
            insured to practice privately.
          </p>
        </div>

       
        <div className="max-w-md mx-auto mt-8 md:mt-0">
         <BookingForm/>
        </div>
      </div>                                            
    </div>
  );
};

export default BookSession;
