
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="flex flex-row self-center mt-20 w-full max-w-[1606px] max-md:mt-10 max-md:max-w-full items-center justify-center">
            <div className="max-w-full ">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col p grow items-start px-5 max-md:mt-10">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0bc65bf165ef626c599b1c46bba0860396977c71e644eb20e57466b0808b046?apiKey=7fe77c278cb24c8997e7fc0b22dad903&" alt="Company logo" className="max-w-full aspect-[4.17] w-[200px]" />
                            <p className="self-stretch mt-5 text-xl leading-10 text-black text-opacity-70">
                                Center for psychology & counseling.
                            </p>
                            <div className="flex gap-5 mt-9">
                                <a href="#" aria-label="Facebook"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c12c961119e068d732286b00d4463529583e778480c331bb4fb8f51f46267f?apiKey=7fe77c278cb24c8997e7fc0b22dad903&" alt="" className="shrink-0 aspect-square w-[40px]" /></a>
                                <a href="#" aria-label="Twitter"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cdbef6159f7c1faf6fff48e198705934b188d275a00b80ff3174c44f3e79d65?apiKey=7fe77c278cb24c8997e7fc0b22dad903&" alt="" className="shrink-0 aspect-square w-[40px]" /></a>
                                <a href="#" aria-label="Instagram"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d269ed01f35f3e28aaf4c8be8ee987ec66462ea732a091649e8e27862738e28b?apiKey=7fe77c278cb24c8997e7fc0b22dad903&" alt="" className="shrink-0 aspect-square w-[40px]" /></a>
                            </div>
                        </div>
                    </div>
                    <nav className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col font-serif text-2xl text-black text-opacity-90 max-md:mt-10 max-md:max-w-full gap-4">
                            <Link to="/careers" className="flex gap-5  max-md:flex-wrap">
                                <span className="flex-auto my-auto">Career Opportunities</span>
                            </Link>
                            <Link to="/approach" className="flex gap-5 max-md:flex-wrap max-md:pr-5">
                                <span className="flex-auto my-auto">Our Approach</span>
                            </Link>
                        </div>
                        <div className="self-end mt-8 px-5  max-w-full w-[988px]">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                    <nav className="flex flex-col grow text-sm leading-9 text-black text-opacity-70 max-md:mt-10">
                                        <h4 className="text-sm text-orange-500 tracking-[2.8px]">LINKS</h4>
                                        <Link to="/about" >About</Link>
                                        <Link to="/services" >Services</Link>
                                        <Link to="/terms" >Terms & Condition</Link>
                                        <Link to="/careers" >Join Our Team</Link>
                                        <Link to="/privacy" >Privacy Policy</Link>
                                        <Link to="/refund" >Refund Policy</Link>
                                        <Link to="/sitemap">Sitemap</Link>
                                    </nav>
                                </div>
                                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <address className="flex flex-col text-sm leading-9 text-black text-opacity-70 max-md:mt-10 not-italic">
                                        <h4 className="text-sm text-orange-500 tracking-[2.8px]">ADDRESS</h4>
                                        <p >A: NRI City, Kanpur</p>
                                        <p >Uttar Pradesh, India</p>
                                    </address>
                                </div>
                                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col text-sm leading-9 text-black text-opacity-70 max-md:mt-10">
                                        <h4 className="text-sm text-orange-500 tracking-[2.8px]">CONTACT</h4>
                                        <p >T: <a href="tel:+916392975097">+91-6392975097</a></p>
                                        <p >E: <a href="mailto:contact@unfazed.co.in">contact@unfazed.co.in</a></p>
                                        <p >W: <a href="https://www.unfazed.co.in" target="_blank" rel="noopener noreferrer">www.unfazed.co.in</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>

        </footer>
    );
};

export default Footer;