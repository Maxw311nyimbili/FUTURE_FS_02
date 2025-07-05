import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, User, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Client = () => {

    // Custom arrow components
    const CustomPrevArrow = ({ onClick }) => (
        <button
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 transition-all duration-200 border border-gray-200"
            onClick={onClick}
        >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5 text-[#007580]" />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 transition-all duration-200 border border-gray-200"
            onClick={onClick}
        >
            <ChevronRight size={16} className="sm:w-5 sm:h-5 text-[#007580]" />
        </button>
    );

    const clientSays = [
        {
            id: 1,
            description: 'The quality of their furniture is exceptional. Every piece we ordered exceeded our expectations. The attention to detail and craftsmanship is truly remarkable. Our office space has been completely transformed.',
            name: 'Sarah Johnson',
            position: 'CEO, Design Studio',
        },
        {
            id: 2,
            description: 'Outstanding customer service from start to finish. The team was incredibly helpful in selecting the perfect furniture for our needs. Delivery was prompt and the setup service was professional.',
            name: 'Michael Chen',
            position: 'Operations Manager, TechCorp',
        },
        {
            id: 3,
            description: 'We have been working with them for over two years now. Their consistency in quality and reliability is unmatched. Every project is delivered on time and within budget.',
            name: 'Emily Rodriguez',
            position: 'Interior Designer, Creative Spaces',
        },
        {
            id: 4,
            description: 'The modern designs and sustainable materials align perfectly with our company values. The furniture not only looks great but also supports our environmental commitments.',
            name: 'David Thompson',
            position: 'Facility Manager, Green Solutions',
        },
        {
            id: 5,
            description: 'Incredible value for money! The combination of style, comfort, and durability makes this the best furniture investment we have made. Highly recommended to anyone looking for quality.',
            name: 'Jennifer Park',
            position: 'HR Director, StartupHub',
        },
        {
            id: 6,
            description: 'The customization options allowed us to create exactly what we envisioned. The team understood our requirements perfectly and delivered a solution that fits our space like a glove.',
            name: 'Robert Wilson',
            position: 'Architect, Modern Designs',
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false, // Hide arrows on very small screens
                }
            }
        ]
    };

    return (
        <div className="mt-8 md:mt-12 lg:mt-16 bg-gradient-to-br from-gray-50 to-white py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <SectionTitle title="What Our Clients Say About Us" mb='mb-6 md:mb-8 lg:mb-10'></SectionTitle>

                <div className="slider-container w-full relative">
                    <style jsx>{`
                        .slick-dots {
                            bottom: -40px !important;
                        }
                        .slick-dots li button:before {
                            color: #007580 !important;
                            font-size: 12px !important;
                        }
                        .slick-dots li.slick-active button:before {
                            color: #007580 !important;
                        }
                        .slick-track {
                            display: flex !important;
                            align-items: stretch !important;
                        }
                        .slick-slide > div {
                            height: 100% !important;
                        }
                    `}</style>
                    <Slider {...settings}>
                        {
                            clientSays?.map((client, index) => (
                                <div key={index} className="px-2 sm:px-3 h-full">
                                    <div className="bg-white p-4 sm:p-6 md:p-8 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex flex-col h-full">
                                        {/* Quote Icon */}
                                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                                            <Quote size={20} className="sm:w-6 sm:h-6 text-[#007580] opacity-20" />
                                        </div>
                                        
                                        {/* Testimonial Text */}
                                        <div className="flex-grow mb-4 sm:mb-6">
                                            <p className="text-sm sm:text-base md:text-lg text-[#636270] font-inter font-normal leading-relaxed">
                                                "{client?.description}"
                                            </p>
                                        </div>
                                        
                                        {/* Client Info */}
                                        <div className="flex items-center mt-auto">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#007580] to-[#005a63] rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-md flex-shrink-0">
                                                <User size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-base sm:text-lg md:text-xl text-[#272343] font-inter font-semibold capitalize mb-1 truncate">
                                                    {client?.name}
                                                </h4>
                                                <p className="text-xs sm:text-sm md:text-base text-[#9a9caa] font-inter font-normal line-clamp-2">
                                                    {client?.position}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Decorative Element */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#007580] to-transparent rounded-b-xl"></div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Client;