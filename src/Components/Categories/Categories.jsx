import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from './../SectionTitle/SectionTitle';
import { ChevronLeft, ChevronRight } from "lucide-react";

const Categories = () => {

    // Custom arrow components
    const CustomPrevArrow = ({ onClick }) => (
        <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2 sm:p-3 transition-all duration-200"
            onClick={onClick}
        >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-[#007580]" />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2 sm:p-3 transition-all duration-200"
            onClick={onClick}
        >
            <ChevronRight size={20} className="sm:w-6 sm:h-6 text-[#007580]" />
        </button>
    );

    const categories = [
        {
            title: 'Wing Chair',
            products: '3,584 Products',
            image: '/src/assets/categories/categories_1.png',
        },
        {
            title: 'Wooden Chair',
            products: '157 Products',
            image: '/src/assets/categories/categories_2.png',
        },
        {
            title: 'desk Chair',
            products: '154 Products',
            image: '/src/assets/categories/categories_3.png',
        },
        {
            title: 'Park Bench',
            products: '154 Products',
            image: '/src/assets/categories/categories_4.png',
        },
    ];

    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: true
                }
            },
            {
                 breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true, 
                    centerPadding: '20px',
                    arrows: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '15px',
                    arrows: false,
                    dots: true
                }
            }

        ]
    };


    return (
        <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Top Categories" mb='mb-8 md:mb-11'></SectionTitle>

                <div className="slider-container features_slider w-full h-full relative overflow-hidden">
                    <Slider {...settings}>
                        {
                            categories?.map((category, index) => (
                                <div key={index} className="p-2 sm:p-3 md:p-4">
                                    <div className="feature_image relative">
                                        <img 
                                            className="w-full h-60 sm:h-80 md:h-96 lg:h-[424px] rounded-lg object-cover" 
                                            src={category?.image} 
                                            alt={category?.title} 
                                        />
                                        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-[85px] bg-black bg-opacity-50 flex flex-col justify-center p-3 md:p-4 rounded-b-lg">
                                            <h4 className="text-base sm:text-lg md:text-xl text-white font-semibold font-inter mb-1 md:mb-2 capitalize">
                                                {category?.title}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-white capitalize font-normal font-inter">
                                                {category?.products}
                                            </p>
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

export default Categories;