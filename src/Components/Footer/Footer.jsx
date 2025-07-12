import { Armchair, Banknote, CreditCard, Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#122331] via-[#1a2d3d] to-[#0f1e2b]"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#029fae] to-transparent"></div>
            
            <div className="footer_top relative w-full pt-12 pb-8 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        
                        {/* Logo and Description Section */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <div className="logo_wrapper mb-6 lg:mb-8">
                                <Link to='/' className="group text-2xl md:text-3xl text-white font-inter font-bold capitalize flex items-center gap-3 hover:text-[#029fae] transition-all duration-300">
                                    <div className="p-2 rounded-xl bg-[#029fae]/10 group-hover:bg-[#029fae]/20 transition-colors duration-300">
                                        <Armchair size='1.75rem' className="md:w-8 md:h-8" color="#029fae" />
                                    </div>
                                    VELOUR
                                </Link>
                            </div>

                            <p className="text-sm md:text-base text-[#b8bcc8] font-inter font-normal mb-6 lg:mb-8 max-w-[350px] leading-relaxed">
                                Crafting exceptional furniture since 1985. We believe every piece should tell a story of quality, comfort, and timeless design. From handpicked materials to meticulous craftsmanship, Velour transforms houses into homes.
                            </p>

                            {/* Contact Info */}
                            <div className="contact_info space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-[#b8bcc8] text-sm">
                                    <MapPin size="1rem" className="text-[#029fae] flex-shrink-0" />
                                    <span>123 Furniture Ave, Design District</span>
                                </div>
                                <div className="flex items-center gap-3 text-[#b8bcc8] text-sm">
                                    <Phone size="1rem" className="text-[#029fae] flex-shrink-0" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-[#b8bcc8] text-sm">
                                    <Mail size="1rem" className="text-[#029fae] flex-shrink-0" />
                                    <span>hello@velour.com</span>
                                </div>
                            </div>

                            <div className="footer_social flex items-center gap-3">
                                {[
                                    { icon: Facebook, label: "Facebook" },
                                    { icon: Twitter, label: "Twitter" },
                                    { icon: Instagram, label: "Instagram" },
                                    { icon: Youtube, label: "YouTube" }
                                ].map(({ icon: label }) => (
                                    <Link 
                                        key={label}
                                        className="group p-3 rounded-full bg-[#1e3445] hover:bg-[#029fae] transition-all duration-300 transform hover:scale-110"
                                        aria-label={label}
                                    >
                                        <Icon size='1.25rem' className="text-[#b8bcc8] group-hover:text-white transition-colors duration-300" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Category Section */}
                        <div className="footer_wrapper">
                            <h3 className="text-lg md:text-xl text-white font-inter font-semibold uppercase mb-4 md:mb-6 relative">
                                Categories
                                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#029fae] rounded-full"></div>
                            </h3>
                            <ul className="space-y-3 md:space-y-3.5">
                                {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map((item) => (
                                    <li key={item}>
                                        <Link className="group text-sm md:text-base text-[#b8bcc8] font-inter font-normal capitalize hover:text-[#029fae] transition-all duration-300 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#029fae] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Section */}
                        <div className="footer_wrapper">
                            <h3 className="text-lg md:text-xl text-white font-inter font-semibold uppercase mb-4 md:mb-6 relative">
                                Support
                                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#029fae] rounded-full"></div>
                            </h3>
                            <ul className="space-y-3 md:space-y-3.5">
                                {["Help & Support", "Terms & Conditions", "Privacy Policy", "FAQ", "Shipping Info", "Returns"].map((item) => (
                                    <li key={item}>
                                        <Link className="group text-sm md:text-base text-[#b8bcc8] font-inter font-normal capitalize hover:text-[#029fae] transition-all duration-300 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#029fae] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter Section */}
                        <div className="newsletter sm:col-span-2 lg:col-span-1">
                            <h3 className="text-lg md:text-xl text-white font-inter font-semibold uppercase mb-4 md:mb-6 relative">
                                Newsletter
                                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#029fae] rounded-full"></div>
                            </h3>
                            <p className="text-sm text-[#b8bcc8] mb-6 leading-relaxed">
                                Stay updated with our latest furniture collections, exclusive offers, and design tips.
                            </p>
                            <div className="w-full">
                                <div className="flex flex-col gap-3">
                                    <div className="relative">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email address" 
                                            className="w-full h-12 bg-[#1e3445] border-2 border-[#2a4554] rounded-lg px-4 text-sm text-white placeholder-[#7a8795] focus:outline-none focus:border-[#029fae] focus:ring-2 focus:ring-[#029fae]/20 transition-all duration-300" 
                                        />
                                        <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#7a8795] w-4 h-4" />
                                    </div>
                                    <button 
                                        type="button" 
                                        className="w-full h-12 bg-gradient-to-r from-[#029fae] to-[#027a85] text-white font-semibold rounded-lg cursor-pointer hover:from-[#027a85] hover:to-[#025d66] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#029fae]/25"
                                    >
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer_bottom relative w-full py-6 md:py-8 border-t border-[#2a4554]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                            <p className="text-sm md:text-base text-[#7a8795] font-normal font-inter">
                                © 2025 Velour. All rights reserved. 
                                <span className="text-[#029fae] font-semibold hover:text-[#027a85] transition-colors cursor-pointer"> Legendary Empire</span>
                            </p> 
                        </div>
                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="flex items-center gap-2 text-[#7a8795] text-sm md:text-base hover:text-[#029fae] transition-colors cursor-pointer">
                                <Banknote size='1.25rem' className="md:w-6 md:h-6" />
                                <span>Bank Transfer</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#7a8795] text-sm md:text-base hover:text-[#029fae] transition-colors cursor-pointer">
                                <CreditCard size='1.25rem' className="md:w-6 md:h-6" />
                                <span>Credit Card</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;