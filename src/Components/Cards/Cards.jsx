import { useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

// SectionTitle Component
const SectionTitle = ({ title, textAlign, mb }) => (
    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold capitalize text-[#272343] ${textAlign === 'center' ? 'text-center' : ''} ${mb}`}>
        {title}
    </h2>
);

// Simple Slider Component (replacing react-slick for better mobile control)
const SimpleSlider = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = children.length;
    
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };
    
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };
    
    return (
        <div className="relative overflow-hidden rounded-lg">
            <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {children.map((child, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        {child}
                    </div>
                ))}
            </div>
            
            {/* Navigation arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
                <ChevronLeft size={20} className="text-[#007580]" />
            </button>
            
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
                <ChevronRight size={20} className="text-[#007580]" />
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            currentSlide === index ? 'bg-[#007580]' : 'bg-white/60'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

// Features Component
const Features = () => {
    const features = [
        {
            title: 'Library Stool',
            status: 'New',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
            currentPrice: '$200',
        },
        {
            title: 'Library Stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
        },
        {
            title: 'Library Stool Chair',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
        },
        {
            title: 'Library Stool Chair',
            status: 'New',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
            currentPrice: '$200',
        },
    ];

    return (
        <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Featured Products" mb='mb-8 md:mb-11'></SectionTitle>

                {/* Desktop: Grid layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
                            <div className="relative overflow-hidden">
                                <img 
                                    className="w-full h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-300" 
                                    src={feature.image} 
                                    alt={feature.title} 
                                />
                                {feature.status && (
                                    <div className="absolute top-4 left-4 bg-[#007580] text-white px-3 py-1 rounded-lg shadow-md">
                                        <span className="text-sm font-medium">{feature.status}</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-[#007580] text-lg font-medium capitalize">{feature.title}</h4>
                                    <button className="bg-[#007580] hover:bg-[#005f67] h-11 w-11 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#007580] focus:ring-opacity-50">
                                        <ShoppingCart size={20} color="#fff" />
                                    </button>
                                </div>
                                <p className="text-xl text-[#272343] font-semibold flex items-center gap-2">
                                    {feature.price}
                                    {feature.currentPrice && (
                                        <span className="text-sm text-[#9a9caa] font-normal line-through">
                                            {feature.currentPrice}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile: Slider layout */}
                <div className="md:hidden">
                    <SimpleSlider>
                        {features.map((feature, index) => (
                            <div key={index} className="p-2">
                                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                    <div className="relative">
                                        <img 
                                            className="w-full h-56 object-cover" 
                                            src={feature.image} 
                                            alt={feature.title} 
                                        />
                                        {feature.status && (
                                            <div className="absolute top-3 left-3 bg-[#007580] text-white px-2 py-1 rounded-lg">
                                                <span className="text-xs font-medium">{feature.status}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-[#007580] text-base font-medium capitalize">{feature.title}</h4>
                                            <button className="bg-[#007580] hover:bg-[#005f67] h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-200">
                                                <ShoppingCart size={18} color="#fff" />
                                            </button>
                                        </div>
                                        <p className="text-lg text-[#272343] font-semibold flex items-center gap-2">
                                            {feature.price}
                                            {feature.currentPrice && (
                                                <span className="text-sm text-[#9a9caa] font-normal line-through">
                                                    {feature.currentPrice}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </SimpleSlider>
                </div>
            </div>
        </div>
    );
};

// Categories Component
const Categories = () => {
    const categories = [
        {
            title: 'Wing Chair',
            products: '3,584 Products',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=600&fit=crop',
        },
        {
            title: 'Wooden Chair',
            products: '157 Products',
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=500&h=600&fit=crop',
        },
        {
            title: 'Desk Chair',
            products: '154 Products',
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=600&fit=crop',
        },
        {
            title: 'Park Bench',
            products: '154 Products',
            image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=600&fit=crop',
        },
    ];

    return (
        <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Top Categories" mb='mb-8 md:mb-11'></SectionTitle>

                {/* Desktop: Grid layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            <img 
                                className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-300" 
                                src={category.image} 
                                alt={category.title} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h4 className="text-white text-xl font-semibold mb-2 capitalize">
                                    {category.title}
                                </h4>
                                <p className="text-white/90 text-sm capitalize">
                                    {category.products}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile: Slider layout */}
                <div className="md:hidden">
                    <SimpleSlider>
                        {categories.map((category, index) => (
                            <div key={index} className="p-2">
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                    <img 
                                        className="w-full h-72 object-cover" 
                                        src={category.image} 
                                        alt={category.title} 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h4 className="text-white text-lg font-semibold mb-1 capitalize">
                                            {category.title}
                                        </h4>
                                        <p className="text-white/90 text-sm capitalize">
                                            {category.products}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </SimpleSlider>
                </div>
            </div>
        </div>
    );
};

// Products Component
const Product = () => {
    const [active, setActive] = useState({
        id: 0,
        product: 'all'
    });

    const productTitle = [
        { id: 0, title: "all", product: 'all' },
        { id: 1, title: "newest", product: 'newest' },
        { id: 2, title: "trending", product: 'trending' },
        { id: 3, title: "best seller", product: 'best_seller' },
    ];

    const products = [
        {
            title: 'Library Stool',
            status: 'New',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
            currentPrice: '$200',
            product: 'newest',
        },
        {
            title: 'Library Stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            product: 'newest',
        },
        {
            title: 'Library Stool',
            status: 'New',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
            currentPrice: '$200',
            product: 'trending',
        },
        {
            title: 'Library Stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
            product: 'trending',
        },
        {
            title: 'Library Stool',
            status: 'New',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
            currentPrice: '$200',
            product: 'best_seller',
        },
        {
            title: 'Library Stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            product: 'best_seller',
        },
        {
            title: 'Library Stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
            product: 'all',
        },
        {
            title: 'Library Stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
            product: 'all',
        },
    ];

    const filteredProducts = products.filter(product => 
        active.product === 'all' || product.product === active.product
    );

    return (
        <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <SectionTitle title={'Our Products'} textAlign={'center'} mb={'mb-8 md:mb-10'}></SectionTitle>

                    {/* Filter tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 md:mb-10">
                        {productTitle.map((title) => (
                            <button 
                                key={title.id}
                                onClick={() => setActive({
                                    id: title.id,
                                    product: title.product
                                })}
                                className={`
                                    text-sm sm:text-base font-semibold uppercase px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105
                                    ${active.id === title.id 
                                        ? 'text-white bg-[#007580] shadow-lg' 
                                        : 'text-[#9a9caa] bg-gray-100 hover:text-[#007580] hover:bg-gray-200'
                                    }
                                `}
                            >
                                {title.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {filteredProducts.map((product, index) => (
                        <div 
                            key={`${product.product}-${index}`}
                            className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden animate-fadeIn"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'both'
                            }}
                        >
                            <div className="relative overflow-hidden">
                                <img 
                                    className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-300" 
                                    src={product.image} 
                                    alt={product.title} 
                                />
                                {product.status && (
                                    <div className="absolute top-3 left-3 bg-[#007580] text-white px-2 py-1 rounded-lg shadow-md">
                                        <span className="text-xs sm:text-sm font-medium">{product.status}</span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-[#007580] text-base sm:text-lg font-medium capitalize flex-1 mr-2">
                                        {product.title}
                                    </h4>
                                    <button className="bg-[#007580] hover:bg-[#005f67] h-10 w-10 sm:h-11 sm:w-11 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#007580] focus:ring-opacity-50">
                                        <ShoppingCart size={18} color="#fff" className="sm:w-5 sm:h-5" />
                                    </button>
                                </div>
                                
                                <p className="text-lg sm:text-xl text-[#272343] font-semibold flex items-center gap-2">
                                    {product.price}
                                    {product.currentPrice && (
                                        <span className="text-sm text-[#9a9caa] font-normal line-through">
                                            {product.currentPrice}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <style jsx>{`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    .animate-fadeIn {
                        animation: fadeIn 0.6s ease-out;
                    }
                `}</style>
            </div>
        </div>
    );
};

// Main App Component
const Cards = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="py-8 md:py-12 lg:py-16">
                <Features />
                <Categories />
                <Product />
            </div>
        </div>
    );
};

export default Cards;