import { useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight, X, Plus, Minus } from "lucide-react";

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

// Cart Modal Component
const CartModal = ({ isCartOpen, setIsCartOpen, cartItems, updateCartQuantity, removeFromCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-[#272343]">Shopping Cart</h2>
                    <button 
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-4 max-h-96">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-8">
                            <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
                            <p className="text-gray-500">Your cart is empty</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-[#272343]">{item.name}</h4>
                                        <p className="text-sm text-gray-500">{item.color}</p>
                                        <p className="font-semibold text-[#007580]">${item.price}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                                        <button 
                                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                    <button 
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 hover:bg-red-100 text-red-500 rounded-full transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="border-t p-4 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-[#272343]">Total:</span>
                            <span className="text-xl font-bold text-[#007580]">${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-[#007580] hover:bg-[#005f67] text-white py-3 rounded-lg font-medium transition-colors">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// Features Component
const Features = ({ addToCart }) => {
    const features = [
        {
            id: 1,
            title: 'Library Stool',
            status: 'New',
            price: 250,
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
            originalPrice: 300,
        },
        {
            id: 2,
            title: 'Library Stool Chair',
            status: 'Sales',
            price: 200,
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            originalPrice: 250,
        },
        {
            id: 3,
            title: 'Library Stool Chair',
            price: 250,
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
        },
        {
            id: 4,
            title: 'Library Stool Chair',
            status: 'New',
            price: 200,
            image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
            originalPrice: 250,
        },
    ];

    return (
        <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Featured Products" mb='mb-8 md:mb-11'></SectionTitle>

                {/* Desktop: Grid layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {features.map((feature) => (
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
                                <p className="text-xl text-[#272343] font-semibold flex items-center gap-2">
                                    ${feature.price}
                                    {feature.originalPrice && (
                                        <span className="text-sm text-[#9a9caa] font-normal line-through">
                                            ${feature.originalPrice}
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
                        {features.map((feature) => (
                            <div key={feature.id} className="p-2">
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
                                            <button 
                                                onClick={() => addToCart(feature)}
                                                className="bg-[#007580] hover:bg-[#005f67] h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-200"
                                            >
                                                <ShoppingCart size={18} color="#fff" />
                                            </button>
                                        </div>
                                        <p className="text-lg text-[#272343] font-semibold flex items-center gap-2">
                                            ${feature.price}
                                            {feature.originalPrice && (
                                                <span className="text-sm text-[#9a9caa] font-normal line-through">
                                                    ${feature.originalPrice}
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
const Product = ({ addToCart }) => {
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
            id: 5,
            title: 'Library Stool',
            status: 'New',
            price: 250,
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
            originalPrice: 300,
            product: 'newest',
        },
        {
            id: 6,
            title: 'Library Stool Chair',
            status: 'Sales',
            price: 200,
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            originalPrice: 250,
            product: 'newest',
        },
        {
            id: 7,
            title: 'Library Stool',
            status: 'New',
            price: 250,
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
            originalPrice: 300,
            product: 'trending',
        },
        {
            id: 8,
            title: 'Library Stool Chair',
            status: 'Sales',
            price: 200,
            image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
            originalPrice: 250,
            product: 'trending',
        },
        {
            id: 9,
            title: 'Library Stool',
            status: 'New',
            price: 250,
            image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
            originalPrice: 300,
            product: 'best_seller',
        },
        {
            id: 10,
            title: 'Library Stool Chair',
            status: 'Sales',
            price: 200,
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            originalPrice: 250,
            product: 'best_seller',
        },
        {
            id: 11,
            title: 'Library Stool Chair',
            status: 'Sales',
            price: 200,
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
            originalPrice: 250,
            product: 'all',
        },
        {
            id: 12,
            title: 'Library Stool Chair',
            status: 'Sales',
            price: 200,
            image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
            originalPrice: 250,
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {filteredProducts.map((product, index) => (
                        <div 
                            key={product.id}
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
                                    <button 
                                        onClick={() => addToCart(product)}
                                        className="bg-[#007580] hover:bg-[#005f67] h-10 w-10 sm:h-11 sm:w-11 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#007580] focus:ring-opacity-50"
                                    >
                                        <ShoppingCart size={18} color="#fff" className="sm:w-5 sm:h-5" />
                                    </button>
                                </div>
                                
                                <p className="text-lg sm:text-xl text-[#272343] font-semibold flex items-center gap-2">
                                    ${product.price}
                                    {product.originalPrice && (
                                        <span className="text-sm text-[#9a9caa] font-normal line-through">
                                            ${product.originalPrice}
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

// Main App Component with Cart State Management
const Cards = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Add item to cart
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            
            if (existingItem) {
                // If item already exists, increase quantity
                return prevItems.map(item =>
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If new item, add to cart
                return [...prevItems, {
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                    color: 'Default'
                }];
            }
        });
    };

    // Update cart item quantity
    const updateCartQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(id);
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Cart Button */}
            <div className="fixed top-4 right-4 z-40">
                <button 
                    onClick={() => setIsCartOpen(true)}
                    className="bg-[#007580] hover:bg-[#005f67] text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 relative"
                >
                    <ShoppingCart size={24} />
                    {cartItemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                            {cartItemCount}
                        </span>
                    )}
                </button>
            </div>

            {/* Cart Modal */}
            <CartModal 
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
                cartItems={cartItems}
                updateCartQuantity={updateCartQuantity}
                removeFromCart={removeFromCart}
            />

            {/* Main Content */}
            <div className="py-8 md:py-12 lg:py-16">
                <Features addToCart={addToCart} />
                <Categories />
                <Product addToCart={addToCart} />
            </div>
        </div>
    );
};

export default Cards;