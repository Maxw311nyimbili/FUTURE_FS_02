import { useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight, X, Plus, Minus, Search, User, Heart, Package, Menu, LogOut } from "lucide-react";
import { CartModal, AccountModal, WishlistModal, OrdersModal } from '../modals/modals.jsx';


// SectionTitle Component
const SectionTitle = ({ title, textAlign, mb }) => (
    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold capitalize text-[#272343] ${textAlign === 'center' ? 'text-center' : ''} ${mb}`}>
        {title}
    </h2>
);

// Simple Slider Component
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
const Features = ({ addToCart, addToWishlist, user, filteredProducts }) => {
const features = [
  {
    id: 1,
    title: 'Industrial Bar Stool',
    status: 'New',
    price: 250,
    originalPrice: 300,
    image: 'images/products/industrial.webp',
  },
  {
    id: 2,
    title: 'Vintage Leather Stool',
    status: 'Sales',
    price: 200,
    originalPrice: 250,
    image: 'images/products/leather.jpg',
  },
  {
    id: 3,
    title: 'Bohemian Rattan Stool',
    price: 180,
    image: 'images/products/Bohemian.jpg',
  },
  {
    id: 4,
    title: 'Modern Chrome Stool',
    status: 'New',
    price: 220,
    originalPrice: 270,
    image: 'images/products/chrome.jpg',
  },
];


    const displayFeatures = filteredProducts.length > 0 ? filteredProducts.filter(p => features.some(f => f.id === p.id)) : features;

    return (
        <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Featured Products" mb='mb-8 md:mb-11'></SectionTitle>

                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {displayFeatures.map((feature) => (
                        <div key={feature.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
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
                                <button 
                                    onClick={() => addToWishlist(feature)}
                                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
                                >
                                    <Heart size={18} className="text-[#007580]" />
                                </button>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-[#007580] text-lg font-medium capitalize">{feature.title}</h4>
                                    <button 
                                        onClick={() =>addToCart(feature)}
                                        className="bg-[#007580] hover:bg-[#005f67] h-11 w-11 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#007580] focus:ring-opacity-50"
                                    >
                                        <ShoppingCart size={20} color="#fff" />
                                    </button>
                                    </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-bold text-[#272343]">${feature.price}</span>
                                    {feature.originalPrice && (
                                        <span className="text-sm text-gray-500 line-through">${feature.originalPrice}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Slider */}
                <div className="md:hidden">
                    <SimpleSlider>
                        {displayFeatures.map((feature) => (
                            <div key={feature.id} className="px-2">
                                <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
                                    <div className="relative overflow-hidden">
                                        <img 
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
                                            src={feature.image} 
                                            alt={feature.title} 
                                        />
                                        {feature.status && (
                                            <div className="absolute top-4 left-4 bg-[#007580] text-white px-3 py-1 rounded-lg shadow-md">
                                                <span className="text-sm font-medium">{feature.status}</span>
                                            </div>
                                        )}
                                        <button 
                                            onClick={() => addToWishlist(feature)}
                                            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
                                        >
                                            <Heart size={18} className="text-[#007580]" />
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-[#007580] text-lg font-medium capitalize">{feature.title}</h4>
                                            <button 
                                                onClick={() => addToCart(feature)}
                                                className="bg-[#007580] hover:bg-[#005f67] h-11 w-11 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#007580] focus:ring-opacity-50"
                                            >
                                                <ShoppingCart size={20} color="#fff" />
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg font-bold text-[#272343]">${feature.price}</span>
                                            {feature.originalPrice && (
                                                <span className="text-sm text-gray-500 line-through">${feature.originalPrice}</span>
                                            )}
                                        </div>
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

// Top Categories Component
const TopCategories = ({ addToCart, addToWishlist, user, filteredProducts }) => {
    const categories = [
        {
            id: 5,
            title: 'Wing Chair',
            count: '3,584 Products',
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
            price: 180,
        },
        {
            id: 6,
            title: 'Wooden Chair',
            count: '157 Products',
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            price: 120,
        },
        {
            id: 7,
            title: 'Comfort Lounge Chair',
            count: '154 Products',
            image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
            price: 220,
        },
    ];

    const displayCategories = filteredProducts.length > 0 ? filteredProducts.filter(p => categories.some(c => c.id === p.id)) : categories;

    return (
        <div className="mt-12 md:mt-16 lg:mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Top Categories" mb='mb-8 md:mb-11'></SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayCategories.map((category) => (
                        <div key={category.id} className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="relative h-64 md:h-80 overflow-hidden">
                                <img 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                                    src={category.image} 
                                    alt={category.title} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <button 
                                    onClick={() => addToWishlist(category)}
                                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
                                >
                                    <Heart size={18} className="text-[#007580]" />
                                </button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                                        <p className="text-sm text-white/80">{category.count}</p>
                                        <p className="text-lg font-semibold mt-2">${category.price}</p>
                                    </div>
                                    <button 
                                        onClick={() => addToCart(category)}
                                        className="bg-[#007580] hover:bg-[#005f67] h-12 w-12 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#007580] focus:ring-opacity-50"
                                    >
                                        <ShoppingCart size={20} color="#fff" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Our Products Component
const OurProducts = ({ addToCart, addToWishlist, user, filteredProducts }) => {
  const products = [
  {
    id: 8,
    title: 'Leather Recliner Chair',
    status: 'New',
    price: 250,
    image: 'images/products/recliner.webp',
  },
  {
    id: 9,
    title: 'Classic Rocking Chair',
    status: 'Sales',
    price: 145,
    originalPrice: 180,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
  },
  {
    id: 10,
    title: 'Wicker Patio Chair',
    price: 130,
    image: 'images/products/wicker.jpg',
  },
  {
    id: 11,
    title: 'Velvet Accent Chair',
    price: 210,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
  },
  {
    id: 12,
    title: 'Rattan Armchair',
    status: 'New',
    price: 160,
    image: 'images/products/ratten.jpg',
  },
  {
    id: 13,
    title: 'Upholstered Club Chair',
    status: 'Sales',
    price: 190,
    originalPrice: 230,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
  },
  {
    id: 14,
    title: 'Mid-Century Modern Chair',
    price: 175,
    image: 'images/products/Mid-Century.jpg',
  },
  {
    id: 15,
    title: 'Minimalist Office Chair',
    price: 140,
    image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=300&fit=crop',
  },
];


    const displayProducts = filteredProducts.length > 0 ? filteredProducts.filter(p => products.some(prod => prod.id === p.id)) : products;

    return (
        <div className="mt-12 md:mt-16 lg:mt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Our Products" textAlign="center" mb='mb-8 md:mb-11'></SectionTitle>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {displayProducts.map((product) => (
                        <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden">
                            <div className="relative overflow-hidden">
                                <img 
                                    className="w-full h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-300" 
                                    src={product.image} 
                                    alt={product.title} 
                                />
                                {product.status && (
                                    <div className="absolute top-4 left-4 bg-[#007580] text-white px-3 py-1 rounded-lg shadow-md">
                                        <span className="text-sm font-medium">{product.status}</span>
                                    </div>
                                )}
                                <button 
                                    onClick={() => addToWishlist(product)}
                                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
                                >
                                    <Heart size={18} className="text-[#007580]" />
                                </button>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-[#007580] text-lg font-medium capitalize">{product.title}</h4>
                                    <button 
                                        onClick={() => addToCart(product)}
                                        className="bg-[#007580] hover:bg-[#005f67] h-11 w-11 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#007580] focus:ring-opacity-50"
                                    >
                                        <ShoppingCart size={20} color="#fff" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-bold text-[#272343]">${product.price}</span>
                                    {product.originalPrice && (
                                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Main App Component
const App1 = ({
      user,
    addToCart,
    addToWishlist,
    cartItems,
    wishlistItems,
    updateCartQuantity,
    removeFromCart,
    removeFromWishlist,
    searchQuery,
    orders
}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isOrdersOpen, setIsOrdersOpen] = useState(false);

    // All products combined for search
    const allProducts = [
        // Featured products
        { id: 1, title: 'Industrial Bar Stool', price: 250, image: 'images/products/industrial.webp' },
        { id: 2, title: 'Vintage Leather Stool', price: 200, image: 'images/products/leather.jpg' },
        { id: 3, title: 'Bohemian Rattan Stool', price: 180, image: 'images/products/Bohemian.jpg' },
        { id: 4, title: 'Modern Chrome Stool', price: 200, image: 'images/products/chrome.jpg' },
        // Categories
        { id: 5, title: 'Wing Chair', price: 180, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
        { id: 6, title: 'Wooden Chair', price: 120, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop' },
        { id: 7, title: 'Comfort Lounge Chair', price: 220, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop' },
        // Our products
        { id: 8, title: 'Leather Recliner Chair', price: 99, image: 'images/products/recliner.webp' },
        { id: 9, title: 'Classic Rocking Chair', price: 99, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
        { id: 10, title: 'Wicker Patio Chair', price: 99, image: 'images/products/wicker.jpg' },
        { id: 11, title: 'Velvet Accent Chair', price: 99, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
        { id: 12, title: 'Rattan Armchair', price: 99, image: 'images/products/ratten.jpg' },
        { id: 13, title: 'Upholstered Club Chair', price: 99, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop' },
        { id: 14, title: 'Mid-Century Modern Chair', price: 99, image: 'images/products/Mid-Century.jpg' },
        { id: 15, title: 'Minimalist Office Chair', price: 99, image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=300&fit=crop' },
    ];

    // Filter products based on search query
    const filteredProducts = searchQuery 
        ? allProducts.filter(product => 
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];

    const handleLogout = () => {
        setIsAccountOpen(false);
    };

    
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
     

            <main>
                <Features 
                    addToCart={addToCart} 
                    addToWishlist={addToWishlist}
                    user={user}
                    filteredProducts={filteredProducts}
                />
                <TopCategories 
                    addToCart={addToCart} 
                    addToWishlist={addToWishlist}
                    user={user}
                    filteredProducts={filteredProducts}
                />
                <OurProducts 
                    addToCart={addToCart} 
                    addToWishlist={addToWishlist}
                    user={user}
                    filteredProducts={filteredProducts}
                />
            </main>

            <CartModal
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
                cartItems={cartItems}
                updateCartQuantity={updateCartQuantity}
                removeFromCart={removeFromCart}
                user={user}
            />

            <AccountModal
                isOpen={isAccountOpen}
                onClose={() => setIsAccountOpen(false)}
                user={user}
                onLogout={handleLogout}
                onOrdersClick={() => {
                    setIsAccountOpen(false);
                    setIsOrdersOpen(true);
                }}
            />

            <WishlistModal
                isOpen={isWishlistOpen}
                onClose={() => setIsWishlistOpen(false)}
                wishlistItems={wishlistItems}
                removeFromWishlist={removeFromWishlist}
                addToCart={addToCart}
            />

            <OrdersModal
                isOpen={isOrdersOpen}
                onClose={() => setIsOrdersOpen(false)}
                orders={orders}
            />
        </div>
    );
};

export default App1;