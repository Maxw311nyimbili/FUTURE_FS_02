import { useState, useEffect, useRef } from "react";
import { MoveRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

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
            image: "/src/assets/Banner/chair-1.png",
            ctaText: "Shop Now",
            bgGradient: "from-blue-50 to-cyan-50"
        },
        {
            id: 2,
            title: "Comfort Meets Elegance",
            subTitle: "Premium Collection",
            description: "Discover handcrafted furniture that combines comfort with sophisticated design",
            image: "/src/assets/Banner/chair-2.png",
            ctaText: "Explore",
            bgGradient: "from-green-50 to-emerald-50"
        },
        {
            id: 3,
            title: "Modern Living Redefined",
            subTitle: "Contemporary Style",
            description: "Experience the perfect blend of functionality and aesthetic appeal",
            image: "/src/assets/Banner/chair-3.png",
            ctaText: "Discover",
            bgGradient: "from-purple-50 to-pink-50"
        },
        {
            id: 4,
            title: "Luxury at Its Finest",
            subTitle: "Designer Collection",
            description: "Elevate your home with our exclusive luxury furniture pieces",
            image: "/src/assets/Banner/chair-4.png",
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

            {/* Navigation Arrows - moved outside container to avoid overlap */}
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

            {/* Main Content Container - added padding to prevent overlap */}
            <div className="container mx-auto px-8 md:px-16 lg:px-20 h-full relative">
                <div className="relative h-full">
                    {/* Main Slide Content */}
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full gap-8 lg:gap-12">
                        
                        {/* Text Content */}
                        <div className={`flex-1 text-center lg:text-left order-2 lg:order-1 px-4 lg:px-0 relative z-20 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-3 border border-white/30">
                                <p className="text-xs md:text-sm font-inter text-[#272343] uppercase font-semibold tracking-wider">
                                    {currentProduct?.subTitle}
                                </p>
                            </div>
                            
                            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-[#272343] font-inter capitalize leading-tight max-w-[700px] font-bold mb-3 md:mb-4 mx-auto lg:mx-0">
                                <span className="bg-gradient-to-r from-[#272343] to-[#029fae] bg-clip-text text-transparent">
                                    {currentProduct?.title}
                                </span>
                            </h1>
                            
                            <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6 max-w-[500px] mx-auto lg:mx-0 leading-relaxed">
                                {currentProduct?.description}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                                <button className="group w-full sm:w-auto min-w-[180px] flex items-center justify-center gap-3 h-[52px] md:h-[56px] bg-gradient-to-r from-[#029fae] to-[#027a85] hover:from-[#027a85] hover:to-[#025d66] transition-all duration-300 rounded-xl capitalize text-white cursor-pointer text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#029fae]/30">
                                    {currentProduct?.ctaText} 
                                    <MoveRight size="20px" className="group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                                
                                <button className="group w-full sm:w-auto min-w-[160px] flex items-center justify-center gap-2 h-[52px] md:h-[56px] bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-xl text-[#272343] border border-gray-200 hover:border-[#029fae] hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-200">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className={`flex-1 w-full h-full flex items-center justify-center lg:justify-end order-1 lg:order-2 relative z-10 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            {/* Animated Background Elements */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-gradient-to-br from-[#029fae]/20 to-[#029fae]/5 rounded-full animate-pulse"></div>
                                <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] border-2 border-[#029fae]/20 rounded-full animate-spin-slow"></div>
                            </div>
                            
                            {/* Product Image Container - Fixed Size */}
                            <div className="relative z-10 w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                                <img 
                                    src={currentProduct?.image} 
                                    alt={currentProduct?.title}
                                    className="max-w-full max-h-full object-contain relative z-10 drop-shadow-2xl"
                                    style={{
                                        filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-[#029fae] rounded-full transition-all duration-300"
                        style={{ 
                            width: `${((currentSlide + 1) / products.length) * 100}%` 
                        }}
                    ></div>
                </div>

                {/* Dot Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-30">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
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

export default Banner;