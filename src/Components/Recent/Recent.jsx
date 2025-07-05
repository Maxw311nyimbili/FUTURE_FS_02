import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Recent = () => {

    // Custom arrow components
    const CustomPrevArrow = ({ onClick }) => (
        <button
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 border border-gray-200"
            onClick={onClick}
        >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5 text-[#007580]" />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 border border-gray-200"
            onClick={onClick}
        >
            <ChevronRight size={16} className="sm:w-5 sm:h-5 text-[#007580]" />
        </button>
    );

    const features = [
        {
            title: 'Library Stool Chair',
            status: 'New',
            price: '$250',
            image: '/src/assets/features/product_1.png',
            currentPrice: '$200',
        },
        {
            title: 'Ergonomic Office Chair',
            status: 'Sale',
            price: '$180',
            image: '/src/assets/features/product_2.png',
            currentPrice: '$220',
        },
        {
            title: 'Modern Dining Chair',
            price: '$150',
            image: '/src/assets/features/product_3.png',
        },
        {
            title: 'Comfort Lounge Chair',
            status: 'New',
            price: '$320',
            image: '/src/assets/features/product_4.png',
            currentPrice: '$280',
        },
        {
            title: 'Executive Desk Chair',
            status: 'Featured',
            price: '$450',
            image: '/src/assets/features/product_1.png',
            currentPrice: '$380',
        },
        {
            title: 'Vintage Accent Chair',
            status: 'Sale',
            price: '$200',
            image: '/src/assets/features/product_2.png',
            currentPrice: '$250',
        },
        {
            title: 'Minimalist Side Chair',
            price: '$120',
            image: '/src/assets/features/product_3.png',
        },
        {
            title: 'Premium Leather Chair',
            status: 'New',
            price: '$580',
            image: '/src/assets/features/product_4.png',
            currentPrice: '$520',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, // Hide arrows on mobile
                    dots: true, // Show dots on mobile
                }
            }
        ]
    };

    return (
        <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <SectionTitle title="Recently Added" mb='mb-6 md:mb-8 lg:mb-10' />
                
                <div className="slider-container features_slider w-full relative">
                    <style jsx>{`
                        .slick-dots {
                            bottom: -35px !important;
                        }
                        .slick-dots li button:before {
                            color: #007580 !important;
                            font-size: 10px !important;
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
                            features?.map((feature, index) => (
                                <div key={index} className="px-2 sm:px-3 h-full">
                                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                                        <div className="feature_image relative flex-shrink-0">
                                            <img 
                                                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover" 
                                                src={feature?.image} 
                                                alt={feature?.title}
                                                loading="lazy"
                                            />
                                            {
                                                feature?.status && (
                                                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#007580] text-white px-2 py-1 rounded-md shadow-md">
                                                        <span className="text-xs sm:text-sm font-inter font-medium">
                                                            {feature?.status}
                                                        </span>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        
                                        <div className="feature_content p-3 sm:p-4 flex-grow flex flex-col">
                                            <div className="flex items-start justify-between mb-2 flex-grow">
                                                <h4 className="text-sm sm:text-base md:text-lg text-[#007580] capitalize font-inter font-medium leading-tight pr-2 flex-grow">
                                                    {feature?.title}
                                                </h4>
                                                <button className="bg-[#007580] hover:bg-[#005a63] h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-lg flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                                                    <ShoppingCart size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                                                </button>
                                            </div>
                                            
                                            <div className="flex items-center gap-2 mt-auto">
                                                <span className="text-base sm:text-lg md:text-xl text-[#272343] font-semibold font-inter">
                                                    {feature?.price}
                                                </span>
                                                {
                                                    feature?.currentPrice && (
                                                        <span className="text-xs sm:text-sm text-[#9a9caa] font-inter font-normal line-through">
                                                            {feature?.currentPrice}
                                                        </span>
                                                    )
                                                }
                                            </div>
                                        </div>
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

export default Recent;