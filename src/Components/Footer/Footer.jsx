import { Armchair, Banknote, CreditCard, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer>
            <div className="footer_top w-full border-t border-b border-[#ffffff] pt-8 pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-15 bg-[#122331]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        
                        {/* Logo and Description Section */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <div className="logo_wrapper mb-6 lg:mb-7">
                                <Link to='/' className="text-2xl md:text-3xl text-white font-inter font-medium capitalize flex items-center gap-2">
                                    <Armchair size='1.75rem' className="md:w-8 md:h-8" color="#029fae" /> 
                                    VELOUR
                                </Link>
                            </div>

                            <p className="text-sm md:text-base text-[#ffffff] font-inter font-normal mb-4 lg:mb-4 max-w-[350px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellat vero nulla! Quibusdam, reiciendis maiores fugiat atque aliquam molestiae vero?
                            </p>

                            <div className="footer_social flex items-center gap-2 md:gap-3">
                                <Link className="p-2 md:p-3 rounded-full border-none inline-block border-[1px] hover:bg-gray-100 hover:text-[#007580] transition-colors">
                                    <Facebook size='1.25rem' className="md:w-6 md:h-6" />
                                </Link>
                                <Link className="p-2 md:p-3 inline-block hover:bg-gray-100 hover:text-[#007580] rounded-full transition-colors">
                                    <Twitter size='1.25rem' className="md:w-6 md:h-6" />
                                </Link>
                                <Link className="p-2 md:p-3 inline-block hover:bg-gray-100 hover:text-[#007580] rounded-full transition-colors">
                                    <Instagram size='1.25rem' className="md:w-6 md:h-6" />
                                </Link>
                                <Link className="p-2 md:p-3 inline-block hover:bg-gray-100 hover:text-[#007580] rounded-full transition-colors">
                                    <Youtube size='1.25rem' className="md:w-6 md:h-6"/>
                                </Link>
                            </div>
                        </div>

                        {/* Category Section */}
                        <div className="footer_wrapper">
                            <h3 className="text-lg md:text-xl text-[#9a9caa] font-inter font-medium uppercase mb-3 md:mb-4">
                                category
                            </h3>
                            <ul className="space-y-1.5 md:space-y-2">
                                <li><Link className="text-sm md:text-base text-[#ffffff] font-inter font-normal capitalize hover:text-[#007580] transition-colors">sofa</Link></li>
                                <li><Link className="text-sm md:text-base text-[#ffffff] font-inter font-normal capitalize hover:text-[#007580] transition-colors">armchair</Link></li>
                                <li><Link className="text-sm md:text-base text-[#ffffff] font-inter font-normal capitalize hover:text-[#007580] transition-colors">wing chair</Link></li>
                                <li><Link className="text-sm md:text-base text-[#ffffff] font-inter font-normal capitalize hover:text-[#007580] transition-colors">desk chair</Link></li>
                                <li><Link className="text-sm md:text-base text-[#ffffff] font-inter font-normal capitalize hover:text-[#007580] transition-colors">wooden chair</Link></li>
                                <li><Link className="text-sm md:text-base text-[#ffffff] font-inter font-normal capitalize hover:text-[#007580] transition-colors">park bench</Link></li>
                            </ul>
                        </div>

                        {/* Support Section */}
                        <div className="footer_wrapper">
                            <h3 className="text-lg md:text-xl text-[#9a9caa] font-inter font-medium uppercase mb-3 md:mb-4">
                                support
                            </h3>
                            <ul className="space-y-1.5 md:space-y-2">
                                <li><Link className="text-sm md:text-base text-[#ffffff] font-inter font-normal capitalize hover:text-[#007580] transition-colors">help & support</Link></li>
                                <li><Link className="text-sm md:text-base text-[#ffffff] font-inter font-normal capitalize hover:text-[#007580] transition-colors">terms & condition</Link></li>
                                <li><Link className="text-sm md:text-base text-[#ffffff] font-inter font-normal capitalize hover:text-[#007580] transition-colors">privacy policy</Link></li>
                                <li><Link className="text-sm md:text-base text-[#ffffff] font-inter font-normal capitalize hover:text-[#007580] transition-colors">help</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter Section */}
                        <div className="newsletter sm:col-span-2 lg:col-span-1">
                            <h3 className="text-lg md:text-xl text-[#9a9caa] font-inter font-medium uppercase mb-3 md:mb-4">
                                newsletter
                            </h3>
                            <form action="#" className="w-full">
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                                    <input 
                                        type="email" 
                                        placeholder="Your Email.." 
                                        className="flex-1 min-w-0 h-[46px] border-[#e1e3e5] border-[1px] rounded-lg px-3 text-sm focus:outline-none focus:border-[#007580] focus:ring-1 focus:ring-[#007580]" 
                                    />
                                    <button 
                                        type="submit" 
                                        className="text-sm md:text-base text-white font-semibold capitalize px-4 sm:px-6 h-[46px] bg-[#007580] rounded-lg cursor-pointer hover:bg-[#006570] transition-colors whitespace-nowrap"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer_bottom w-full py-4 md:py-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                            <p className="text-xs md:text-base text-[#9a9caa] font-normal font-inter">
                                @ 2025 Blogy- Designed & Develop <span className="text-[#272343]">Lifeonthecode</span>
                            </p> 
                        </div>
                        <div className="flex items-center gap-2 md:gap-3.5 text-center">
                            <p className="flex items-center gap-1 md:gap-2 text-[#9a9caa] text-sm md:text-xl">
                                Bank Note <Banknote size='1.25rem' className="md:w-8 md:h-8" />
                            </p>
                            <p className="flex items-center gap-1 md:gap-2 text-[#9a9caa] text-sm md:text-xl">
                                Credit Card <CreditCard size='1.25rem' className="md:w-8 md:h-8" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;