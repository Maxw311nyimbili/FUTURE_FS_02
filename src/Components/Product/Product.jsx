import { useState } from "react";
import { ShoppingCart } from "lucide-react";

const SectionTitle = ({ title, textAlign, mb }) => (
    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold capitalize ${textAlign === 'center' ? 'text-center' : ''} ${mb}`}>
        {title}
    </h2>
);

const Product = () => {
    const [active, setActive] = useState({
        id: 0,
        product: 'all'
    });

    const productTitle = [
        {
            id: 0,
            title: "all",
            product: 'all'
        },
        {
            id: 1,
            title: "newest",
            product: 'newest'
        },
        {
            id: 2,
            title: "trending",
            product: 'trending'
        },
        {
            id: 3,
            title: "best seller",
            product: 'best_seller'
        },
    ];

    const products = [
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
            currentPrice: '$200',
            product: 'newest',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            product: 'newest',
        },
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
            currentPrice: '$200',
            product: 'newest',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
            product: 'newest',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
            product: 'trending',
        },
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
            currentPrice: '$200',
            product: 'trending',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            product: 'trending',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
            product: 'trending',
        },
        {
            title: 'library stool',
            status: 'New',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
            currentPrice: '$200',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '$250',
            image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
            product: 'all',
        },
    ];

    const productFilter = products.filter(product => product.product === active?.product);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
                <SectionTitle title={'our product'} textAlign={'center'} mb={'mb-5 sm:mb-6 lg:mb-8'}></SectionTitle>

                {/* Responsive tab navigation */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 lg:mb-11">
                    {productTitle?.map((title, indx) => (
                        <button 
                            key={title?.id}
                            onClick={() => setActive({
                                id: title?.id,
                                product: title?.product
                            })}
                            className={`
                                text-sm sm:text-base font-black uppercase font-inter cursor-pointer
                                px-3 py-2 rounded-lg transition-all duration-300 ease-in-out
                                hover:bg-gray-100 hover:scale-105
                                ${active?.id === indx 
                                    ? 'text-[#272343] bg-gray-100 shadow-md transform scale-105' 
                                    : 'text-[#9a9caa] hover:text-[#272343]'
                                }
                            `}
                        >
                            {title?.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Responsive product grid with smooth transitions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {productFilter?.map((product, index) => (
                    <div 
                        key={`${product.product}-${index}`}
                        className="group p-3 sm:p-4 transition-all duration-500 ease-in-out transform hover:scale-105 animate-fadeIn"
                        style={{
                            animationDelay: `${index * 100}ms`,
                            animationFillMode: 'both'
                        }}
                    >
                        <div className="feature_image mb-3 sm:mb-4 relative overflow-hidden rounded-lg">
                            <img 
                                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110" 
                                src={product?.image} 
                                alt={product?.title} 
                            />
                            {product?.status && (
                                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#007580] text-white px-2 py-1 rounded-lg transition-all duration-300 hover:bg-[#005f67]">
                                    <span className="text-xs sm:text-sm font-inter font-normal">{product?.status}</span>
                                </div>
                            )}
                        </div>
                        
                        <div className="feature_content">
                            <div className="flex items-center justify-between mb-2 sm:mb-3">
                                <h4 className="text-sm sm:text-base text-[#007580] capitalize font-inter font-normal flex-1 mr-2">
                                    {product?.title}
                                </h4>
                                <button className="bg-[#007580] h-8 w-8 sm:h-10 sm:w-10 lg:h-11 lg:w-11 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#005f67] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#007580] focus:ring-opacity-50">
                                    <ShoppingCart size="1.2rem" color="#fff" className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                </button>
                            </div>
                            
                            <p className="text-lg sm:text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter">
                                {product?.price}
                                {product?.currentPrice && (
                                    <span className="text-xs sm:text-sm text-[#9a9caa] font-inter font-normal line-through">
                                        {product?.currentPrice}
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
    );
};

export default Product;