const Brand = () => {

    const brands = [
        {
            id: 1,
            image: "/src/assets/brands/brand_1.png"
        },
        {
            id: 2,
            image: "/src/assets/brands/brand_2.png"
        },
        {
            id: 3,
            image: "/src/assets/brands/brand_3.png"
        },
        {
            id: 4,
            image: "/src/assets/brands/brand_4.png"
        },
        {
            id: 5,
            image: "/src/assets/brands/brand_5.png"
        },
        {
            id: 6,
            image: "/src/assets/brands/brand_6.png"
        }, 
        {
            id: 7,
            image: "/src/assets/brands/brand_7.png"
        },
    ];

    // Double the array for seamless infinite scroll
    const duplicatedBrands = [...brands, ...brands];

    return (
        <div className="w-full bg-white py-8 md:py-12 lg:py-16 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Title (Optional) */}
                <div className="text-center mb-8 md:mb-12 mt-6 md:mt-8 lg:mt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#272343] mb-2">
                        Trusted by Leading Brands
                    </h2>
                    <p className="text-[#636270] text-sm md:text-base">
                        Partners who trust our quality and service
                    </p>
                </div>

                {/* Infinite Scroll Container */}
                <div className="relative">
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
                                        alt={`Brand ${brand.id}`} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gradient Overlays for fade effect */}
                    <div className="absolute top-0 left-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                </div>

                {/* Alternative Grid Layout for smaller screens */}
                <div className="block sm:hidden mt-8">
                    <div className="grid grid-cols-2 gap-4">
                        {brands.slice(0, 6).map((brand) => (
                            <div 
                                key={brand.id} 
                                className="brand_item flex items-center justify-center bg-white rounded-lg shadow-sm p-4 h-16"
                            >
                                <img 
                                    className="max-w-full max-h-full object-contain" 
                                    src={brand.image} 
                                    alt={`Brand ${brand.id}`} 
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

export default Brand;