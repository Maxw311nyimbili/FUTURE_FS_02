import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const Features = () => {

    // Custom arrow components
    const CustomPrevArrow = ({ onClick }) => (
        <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition-all duration-200"
            onClick={onClick}
        >
            <ChevronLeft size={20} className="text-[#007580]" />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2 transition-all duration-200"
            onClick={onClick}
        >
            <ChevronRight size={20} className="text-[#007580]" />
        </button>
    );

    const features = [
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: '/src/assets/features/product_1.png',
            currentPrice: '$200',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/features/product_2.png',
        },
        {
            title: 'library stool Chair',
            price: '$250',
            image: '/src/assets/features/product_3.png',
        },
        {
            title: 'library stool Chair',
            status: 'New',
            price: '$250',
            image: '/src/assets/features/product_4.png',
            currentPrice: '$200',
        },
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: '/src/assets/features/product_1.png',
            currentPrice: '$200',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/features/product_2.png',
        },
        {
            title: 'library stool Chair',
            price: '$250',
            image: '/src/assets/features/product_3.png',
        },
        {
            title: 'library stool Chair',
            status: 'New',
            price: '$250',
            image: '/src/assets/features/product_4.png',
            currentPrice: '$200',
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
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
                }
            }
        ]
    };

    return (
        <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Featured Products" mb='mb-20 md:mb-11'></SectionTitle>

                <div className="slider-container features_slider w-full h-full relative overflow-hidden">
                    <Slider {...settings}>
                        {
                            features?.map((feature, index) => (
                                <div key={index} className="p-2 sm:p-3 md:p-4">
                                    <div className="feature_image mb-3 md:mb-4 relative">
                                        <img className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg" src={feature?.image} alt={feature?.title} />
                                        {
                                            feature?.status && (
                                                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                                                    <button className="text-xs sm:text-sm font-inter font-normal">{feature?.status}</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="feature_content px-1">
                                        <div className="flex items-center justify-between mb-2 md:mb-3">
                                            <h4 className="text-sm sm:text-base text-[#007580] capitalize font-inter font-normal">{feature?.title}</h4>
                                            <span className="bg-[#007580] h-8 w-8 sm:h-10 sm:w-10 md:h-[44px] md:w-[44px] rounded-lg flex items-center justify-center">
                                                <ShoppingCart size='1rem' className="sm:w-5 sm:h-5 md:w-6 md:h-6" color="#fff" />
                                            </span>
                                        </div>
                                        <p className="text-lg sm:text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter">
                                            {feature?.price} 
                                            {
                                                feature?.currentPrice && (
                                                    <span className="text-xs sm:text-sm text-[#9a9caa] font-inter font-normal line-through">{feature?.currentPrice}</span>
                                                )
                                            }
                                        </p>
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

export default Features;