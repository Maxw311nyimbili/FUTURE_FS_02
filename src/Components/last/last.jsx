import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, User, Quote, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const ClientAndRecentProducts = ({ addToCart, addToWishlist, user }) => {
    // Client Reviews Component
    const ClientReviews = () => {
        // Custom arrow components for client reviews
        const CustomPrevArrow = ({ onClick }) => (
            <button
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 sm:p-3 transition-all duration-200 border border-gray-200"
                onClick={onClick}
            >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5 text-[#007580]" />
            </button>
        );

        const CustomNextArrow = ({ onClick }) => (
            <button
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 sm:p-3 transition-all duration-200 border border-gray-200"
                onClick={onClick}
            >
                <ChevronRight size={18} className="sm:w-5 sm:h-5 text-[#007580]" />
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
        ];

        const clientSettings = {
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
                        arrows: false,
                    }
                }
            ]
        };

        return (
            <div className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle title="What Our Clients Say About Us" mb="mb-8 md:mb-12" />

                    <div className="client-reviews-slider relative">
                        <Slider {...clientSettings}>
                            {clientSays?.map((client, index) => (
                                <div key={client.id} className="px-3 md:px-4">
                                    <div className="bg-white p-6 sm:p-8 md:p-10 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative min-h-[320px] sm:min-h-[350px] flex flex-col">
                                        {/* Quote Icon */}
                                        <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                                            <Quote size={24} className="sm:w-8 sm:h-8 text-[#007580] opacity-20" />
                                        </div>
                                        
                                        {/* Testimonial Text */}
                                        <div className="flex-grow mb-6 md:mb-8">
                                            <p className="text-sm sm:text-base md:text-lg text-[#636270] font-inter font-normal leading-relaxed">
                                                "{client?.description}"
                                            </p>
                                        </div>
                                        
                                        {/* Client Info */}
                                        <div className="flex items-center mt-auto">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#007580] to-[#005a63] rounded-full flex items-center justify-center mr-4 shadow-md">
                                                <User size={20} className="sm:w-8 sm:h-8 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg sm:text-xl md:text-2xl text-[#272343] font-inter font-semibold capitalize mb-1">
                                                    {client?.name}
                                                </h4>
                                                <p className="text-sm sm:text-base text-[#9a9caa] font-inter font-normal">
                                                    {client?.position}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Decorative Element */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#007580] to-transparent rounded-b-2xl"></div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    };

    // Recent Products Component
    const RecentProducts = () => {
        // Custom arrow components for recent products
         const CustomPrevArrow = ({ onClick }) => (
            <button
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 sm:p-3 transition-all duration-200 border border-gray-200"
                onClick={onClick}
            >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5 text-[#007580]" />
            </button>
        );

        const CustomNextArrow = ({ onClick }) => (
            <button
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-2 sm:p-3 transition-all duration-200 border border-gray-200"
                onClick={onClick}
            >
                <ChevronRight size={18} className="sm:w-5 sm:h-5 text-[#007580]" />
            </button>
        );

        const features = [
                {
                    id: 16,
                    title: 'Library Stool Chair',
                    status: 'New',
                    price: 250,
                    originalPrice: 300,
                    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
                },
                {
                    id: 17,
                    title: 'Ergonomic Office Chair',
                    status: 'Sales',
                    price: 180,
                    originalPrice: 220,
                    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
                },
                {
                    id: 18,
                    title: 'Modern Dining Chair',
                    price: 150,
                    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
                },
                {
                    id: 19,
                    title: 'Comfort Lounge Chair',
                    status: 'New',
                    price: 320,
                    originalPrice: 380,
                    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
                },
                {
                    id: 20,
                    title: 'Executive Desk Chair',
                    status: 'New',
                    price: 450,
                    originalPrice: 520,
                    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
                },
                {
                    id: 21,
                    title: 'Vintage Accent Chair',
                    status: 'Sales',
                    price: 200,
                    originalPrice: 250,
                    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
                },
                {
                    id: 22,
                    title: 'Minimalist Side Chair',
                    price: 120,
                    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
                },
                {
                    id: 23,
                    title: 'Premium Leather Chair',
                    status: 'New',
                    price: 580,
                    originalPrice: 650,
                    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
                },
            ];

        // Use the features array directly without filtering
        const displayFeatures = features;

        const productSettings = {
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
                        arrows: false, 
                        dots: true, 
                    }
                }
            ]
        };

        // Default handlers if not provided
        const handleAddToCart = addToCart || ((product) => {
            console.log('Add to cart:', product);
        });

        const handleAddToWishlist = addToWishlist || ((product) => {
            console.log('Add to wishlist:', product);
        });

        return (
            <div className="bg-gray-50 py-12 md:py-16 lg:py-20 mb-16 md:mb-20 lg:mb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle title="Recently Added" mb='mb-8 md:mb-12 lg:mb-16' />
                    
                    <div className="slider-container features_slider w-full relative">
                        <style jsx>{`
                            .slick-dots {
                                bottom: -50px !important;
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
                        <Slider {...productSettings}>
                            {
                                displayFeatures?.map((feature, index) => (
                                    <div key={feature.id} className="px-3 md:px-4 h-full">
                                        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden h-full flex flex-col border border-gray-100">
                                            <div className="feature_image relative flex-shrink-0 overflow-hidden">
                                                <img 
                                                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                                                    src={feature?.image} 
                                                    alt={feature?.title}
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.src = 'https://via.placeholder.com/400x300/f0f0f0/888888?text=Chair';
                                                    }}
                                                />
                                                {
                                                    feature?.status && (
                                                        <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-white text-xs font-semibold shadow-lg ${
                                                            feature?.status === 'New' 
                                                                ? 'bg-gradient-to-r from-green-500 to-green-600' 
                                                                : 'bg-gradient-to-r from-red-500 to-red-600'
                                                        }`}>
                                                            {feature?.status}
                                                        </div>
                                                    )
                                                }
                                                <button 
                                                    onClick={() => handleAddToWishlist(feature)}
                                                    className="absolute top-3 right-3 bg-white/95 hover:bg-white p-2.5 rounded-full shadow-lg transition-all duration-200 hover:scale-110 group/wishlist"
                                                >
                                                    <Heart size={16} className="text-gray-600 group-hover/wishlist:text-red-500 transition-colors duration-200" />
                                                </button>
                                            </div>
                                            
                                            <div className="feature_content p-5 sm:p-6 flex-grow flex flex-col">
                                                <div className="flex items-start justify-between mb-4 flex-grow">
                                                    <div className="flex-grow pr-3">
                                                        <h4 className="text-lg sm:text-xl text-[#272343] capitalize font-inter font-semibold leading-tight mb-2">
                                                            {feature?.title}
                                                        </h4>
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-xl sm:text-2xl text-[#007580] font-bold font-inter">
                                                                ${feature?.price}
                                                            </span>
                                                            {
                                                                feature?.originalPrice && (
                                                                    <span className="text-sm sm:text-base text-gray-400 font-inter line-through">
                                                                        ${feature?.originalPrice}
                                                                    </span>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    <button 
                                                        onClick={() => handleAddToCart(feature)}
                                                        className="bg-gradient-to-r from-[#007580] to-[#005f67] hover:from-[#005f67] hover:to-[#004d54] h-11 w-11 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#007580] focus:ring-opacity-50 shadow-lg group/cart"
                                                    >
                                                        <ShoppingCart size={18} className="sm:w-5 sm:h-5 text-white group-hover/cart:scale-110 transition-transform duration-200" />
                                                    </button>
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

    return (
        <div className="w-full">
            {/* Client Reviews Section*/}
            <ClientReviews />
            
            {/* Recent Products Section*/}
            <RecentProducts />
        </div>
    );
};

export default ClientAndRecentProducts;