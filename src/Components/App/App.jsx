import { useState, useEffect, useRef } from "react";
import { MoveRight, ChevronLeft, ChevronRight, Play, Pause, Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const intervalRef = useRef(null);
    const bannerRef = useRef(null);

    const products = [
        {
            id: 1,
            title: "Best Furniture Collection for Your Interior",
            subTitle: "Welcome to Chairs",
            description: "Transform your space with our premium furniture collection designed for modern living",
            image: "images/Banner/chair-1.png",
            ctaText: "Shop Now",
            bgGradient: "from-blue-50 to-cyan-50"
        },
        {
            id: 2,
            title: "Comfort Meets Elegance",
            subTitle: "Premium Collection",
            description: "Discover handcrafted furniture that combines comfort with sophisticated design",
            image: "images/Banner/chair-2.png",
            ctaText: "Explore",
            bgGradient: "from-green-50 to-emerald-50"
        },
        {
            id: 3,
            title: "Modern Living Redefined",
            subTitle: "Contemporary Style",
            description: "Experience the perfect blend of functionality and aesthetic appeal",
            image: "images/Banner/chair-3.png",
            ctaText: "Discover",
            bgGradient: "from-purple-50 to-pink-50"
        },
        {
            id: 4,
            title: "Luxury at Its Finest",
            subTitle: "Designer Collection",
            description: "Elevate your home with our exclusive luxury furniture pieces",
            image: "images/Banner/chair-4.png",
            ctaText: "Shop Luxury",
            bgGradient: "from-amber-50 to-orange-50"
        },
    ];

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % products.length);
            }, 5000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isAutoPlaying, products.length]);

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    const currentProduct = products[currentSlide];

    return (
        <div 
            ref={bannerRef}
            className={`w-full h-[500px] md:h-[650px] lg:h-[850px] relative overflow-hidden bg-gradient-to-br ${currentProduct.bgGradient} transition-all duration-1000 ease-in-out`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #029fae 2px, transparent 2px), radial-gradient(circle at 75% 75%, #029fae 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Navigation Arrows */}
            <button 
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-30 group border border-gray-200 hover:border-[#029fae]"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#272343] group-hover:text-[#029fae] transition-colors duration-300" />
            </button>

            <button 
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-30 group border border-gray-200 hover:border-[#029fae]"
                aria-label="Next slide"
            >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#272343] group-hover:text-[#029fae] transition-colors duration-300" />
            </button>

            {/* Autoplay Control */}
            <button 
                onClick={toggleAutoPlay}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-30 group border border-gray-200 hover:border-[#029fae]"
                aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
            >
                {isAutoPlaying ? (
                    <Pause className="w-4 h-4 text-[#272343] group-hover:text-[#029fae] transition-colors duration-300" />
                ) : (
                    <Play className="w-4 h-4 text-[#272343] group-hover:text-[#029fae] transition-colors duration-300" />
                )}
            </button>

            {/* Main Content Container - Enhanced mobile/tablet spacing */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-full relative">
                <div className="relative h-full">
                    {/* Main Slide Content - Improved mobile/tablet layout */}
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full gap-6 md:gap-8 lg:gap-12 py-6 md:py-8 lg:py-0">
                        
                        {/* Text Content - Better mobile/tablet alignment */}
                        <div className={`flex-1 text-center lg:text-left order-2 lg:order-1 px-2 sm:px-4 lg:px-0 relative z-20 transform transition-all duration-1000 max-w-full ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-2 md:mb-3 border border-white/30">
                                <p className="text-xs md:text-sm font-inter text-[#272343] uppercase font-semibold tracking-wider">
                                    {currentProduct?.subTitle}
                                </p>
                            </div>
                            
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#272343] font-inter capitalize leading-tight max-w-full lg:max-w-[700px] font-bold mb-2 md:mb-3 lg:mb-4 mx-auto lg:mx-0">
                                <span className="bg-gradient-to-r from-[#272343] to-[#029fae] bg-clip-text text-transparent">
                                    {currentProduct?.title}
                                </span>
                            </h1>
                            
                           <p className="hidden lg:block text-gray-600 text-lg mb-6 max-w-full sm:max-w-[500px] mx-auto lg:mx-0 leading-relaxed">
                            {currentProduct?.description}
                           </p>

                            
                            {/* Button Container - Enhanced mobile/tablet layout */}
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center lg:justify-start w-full max-w-full">
                                <button className="group w-full sm:w-auto sm:min-w-[160px] md:min-w-[180px] flex items-center justify-center gap-2 md:gap-3 h-[48px] md:h-[52px] lg:h-[56px] bg-gradient-to-r from-[#029fae] to-[#027a85] hover:from-[#027a85] hover:to-[#025d66] transition-all duration-300 rounded-xl capitalize text-white cursor-pointer text-sm md:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#029fae]/30 px-4 md:px-6">
                                    <span className="truncate">{currentProduct?.ctaText}</span>
                                    <MoveRight size="18px" className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                                </button>
                                
                                <button className="group w-full sm:w-auto sm:min-w-[140px] md:min-w-[160px] flex items-center justify-center gap-2 h-[48px] md:h-[52px] lg:h-[56px] bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-xl text-[#272343] border border-gray-200 hover:border-[#029fae] hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-200 px-4 md:px-6">
                                    <span className="truncate text-sm md:text-base">Learn More</span>
                                </button>
                            </div>
                        </div>

                        {/* Image Content - Enhanced mobile/tablet sizing */}
                        <div className={`flex-1 w-full h-full max-h-[250px] sm:max-h-[300px] md:max-h-none flex items-center justify-center lg:justify-end order-1 lg:order-2 relative z-10 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            {/* Animated Background Elements - Responsive sizing */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] 2xl:w-[600px] 2xl:h-[600px] bg-gradient-to-br from-[#029fae]/20 to-[#029fae]/5 rounded-full animate-pulse"></div>
                                <div className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[550px] 2xl:h-[550px] border-2 border-[#029fae]/20 rounded-full animate-spin-slow"></div>
                            </div>
                            
                            {/* Product Image Container - Better mobile/tablet constraints */}
                            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[650px] h-[250px] sm:h-[280px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                                <img 
                                    src={currentProduct?.image} 
                                    alt={currentProduct?.title}
                                    className="max-w-full max-h-full object-contain relative z-10 drop-shadow-2xl"
                                    style={{
                                        filter: 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.15))'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Bar - Better mobile positioning */}
                <div className="hidden lg:block absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 md:w-48 h-1 bg-black/20 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#029fae] rounded-full transition-all duration-300"
                    style={{
                    width: `${((currentSlide + 1) / products.length) * 100}%`,
                    }}
                ></div>
                </div>


                {/* Dot Indicators - Enhanced mobile spacing */}
                <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 items-center gap-3 z-30">

                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                                index === currentSlide 
                                    ? 'bg-[#029fae] shadow-lg scale-125' 
                                    : 'bg-black/60 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

const Delivery = () => {
    return (
        <div className="w-full py-6 md:py-8 lg:py-12">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="bg-white shadow-md p-4 sm:p-6 lg:p-8 rounded-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        <div className="delivery_wrapper">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <Percent className="w-10 h-10 sm:w-12 sm:h-12 text-[#272343]" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm sm:text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2">Discount</h4>
                                    <p className="text-xs sm:text-sm text-[#9a9caa] font-inter font-normal">Every week new sales</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="delivery_wrapper">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-[#272343]" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm sm:text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2">Free Delivery</h4>
                                    <p className="text-xs sm:text-sm text-[#9a9caa] font-inter font-normal">100% Free for all orders</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="delivery_wrapper">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <Clock3 className="w-10 h-10 sm:w-12 sm:h-12 text-[#272343]" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm sm:text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2">Great Support 24/7</h4>
                                    <p className="text-xs sm:text-sm text-[#9a9caa] font-inter font-normal">We care your experiences</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="delivery_wrapper">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[#272343]" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm sm:text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2">Secure Payment</h4>
                                    <p className="text-xs sm:text-sm text-[#9a9caa] font-inter font-normal">100% Secure Payment Method</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Brand = () => {
    const brands = [
        {
            id: 1,
            image: "images/brands/brand_1.png"
        },
        {
            id: 2,
            image: "images/brands/brand 2.jpg"
        },
        {
            id: 3,
            image: "images/brands/brand_3.png"
        },
        {
            id: 4,
            image: "images/brands/brand_4.png"
        },
        {
            id: 5,
            image: "images/brands/brand_5.png"
        },
        {
            id: 6,
            image: "images/brands/brand_6.jpeg"
        }, 
        {
            id: 7,
            image: "images/brands/brand_7.png"
        },
    ];

    // Double the array for seamless infinite scroll
    const duplicatedBrands = [...brands, ...brands];

    return (
        <div className="w-full bg-white py-6 md:py-8 lg:py-12 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                {/* Section Title */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#272343] mb-2">
                        Trusted by Leading Brands
                    </h2>
                    <p className="text-[#636270] text-sm md:text-base">
                        Partners who trust our quality and service
                    </p>
                </div>

                {/* Infinite Scroll Container - Hidden on mobile */}
                <div className="relative hidden sm:block">
                    <div className="infinite-scroll-wrapper overflow-hidden">
                        <div className="infinite-scroll-content flex items-center gap-8 md:gap-12 lg:gap-16 animate-scroll">
                            {duplicatedBrands.map((brand, index) => (
                                <div 
                                    key={`${brand.id}-${index}`} 
                                    className="brand_item flex-shrink-0 w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 xl:w-48 xl:h-28 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
                                >
                                    <img 
                                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                                        src={brand.image} 
                                        alt={brand.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Overlays for fade effect */}
                    <div className="absolute top-0 left-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                </div>

                {/* Static Grid Layout for mobile */}
                <div className="block sm:hidden">
                    <div className="grid grid-cols-2 gap-4">
                        {brands.slice(0, 6).map((brand) => (
                            <div 
                                key={brand.id} 
                                className="brand_item flex items-center justify-center bg-white rounded-lg shadow-sm p-4 h-20 hover:shadow-md transition-all duration-300"
                            >
                                <img 
                                    className="max-w-full max-h-full object-contain filter grayscale" 
                                    src={brand.image} 
                                    alt={brand.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom CSS for infinite scroll animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    width: max-content;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }

                /* Responsive animation speeds */
                @media (max-width: 768px) {
                    .animate-scroll {
                        animation-duration: 25s;
                    }
                }

                @media (min-width: 1024px) {
                    .animate-scroll {
                        animation-duration: 35s;
                    }
                }

                /* Smooth scrolling for reduced motion preference */
                @media (prefers-reduced-motion: reduce) {
                    .animate-scroll {
                        animation: none;
                    }
                    
                    .infinite-scroll-content {
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                }
            `}</style>
        </div>
    );
};

// Main App component showing all three components
const App = () => {
    return (
        <div className="w-full">
            <Banner />
            <Delivery />
            <Brand />
        </div>
    );
};

export default App;