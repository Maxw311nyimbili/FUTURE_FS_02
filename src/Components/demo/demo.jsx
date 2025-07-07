import { useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight, X, Plus, Minus, Search, User, Heart, Package, Menu, LogOut } from "lucide-react";

// Login Modal Component
const LoginModal = ({ isOpen, onClose, onLogin }) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation for demo
        if (credentials.email && credentials.password) {
            onLogin({
                name: credentials.email.split('@')[0],
                email: credentials.email
            });
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full max-w-md p-6 shadow-2xl border border-white/20">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#272343]">
                        {isSignUp ? 'Sign Up' : 'Login'}
                    </h2>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#272343] mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={credentials.email}
                            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007580] focus:border-transparent"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-[#272343] mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={credentials.password}
                            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007580] focus:border-transparent"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#007580] hover:bg-[#005f67] text-white py-3 rounded-lg font-medium transition-colors"
                    >
                        {isSignUp ? 'Sign Up' : 'Login'}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-[#007580] hover:underline"
                    >
                        {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Navigation Component
const Navigation = ({ 
    user, 
    onLogin, 
    onLogout, 
    cartItemCount, 
    onCartClick, 
    onAccountClick, 
    onWishlistClick, 
    onOrdersClick,
    searchQuery,
    onSearchChange
}) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-30 shadow-sm border-b border-white/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-[#272343]">Comforty</h1>
                        </div>

                        {/* Search Bar - Desktop */}
                        <div className="hidden md:flex flex-1 max-w-lg mx-8">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => onSearchChange(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007580] focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-4">
                            {user ? (
                                <>
                                    <button
                                        onClick={onWishlistClick}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                                    >
                                        <Heart size={24} className="text-[#007580]" />
                                    </button>
                                    
                                    <button
                                        onClick={onCartClick}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                                    >
                                        <ShoppingCart size={24} className="text-[#007580]" />
                                        {cartItemCount > 0 && (
                                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                {cartItemCount}
                                            </span>
                                        )}
                                    </button>
                                    
                                    <button
                                        onClick={onAccountClick}
                                        className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <User size={20} className="text-[#007580]" />
                                        <span className="text-[#272343]">{user.name}</span>
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setIsLoginOpen(true)}
                                    className="bg-[#007580] hover:bg-[#005f67] text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                >
                                    Login
                                </button>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Mobile Search */}
                    <div className="md:hidden pb-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007580] focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 py-4">
                            {user ? (
                                <div className="space-y-2">
                                    <button
                                        onClick={() => { onWishlistClick(); setIsMobileMenuOpen(false); }}
                                        className="flex items-center space-x-3 w-full p-3 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <Heart size={20} className="text-[#007580]" />
                                        <span>Wishlist</span>
                                    </button>
                                    
                                    <button
                                        onClick={() => { onCartClick(); setIsMobileMenuOpen(false); }}
                                        className="flex items-center space-x-3 w-full p-3 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <ShoppingCart size={20} className="text-[#007580]" />
                                        <span>Cart ({cartItemCount})</span>
                                    </button>
                                    
                                    <button
                                        onClick={() => { onAccountClick(); setIsMobileMenuOpen(false); }}
                                        className="flex items-center space-x-3 w-full p-3 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <User size={20} className="text-[#007580]" />
                                        <span>Account</span>
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => { setIsLoginOpen(true); setIsMobileMenuOpen(false); }}
                                    className="w-full bg-[#007580] hover:bg-[#005f67] text-white py-3 rounded-lg font-medium transition-colors"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </nav>

            <LoginModal 
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onLogin={onLogin}
            />
        </>
    );
};

// Cart Modal Component
const CartModal = ({ isCartOpen, setIsCartOpen, cartItems, updateCartQuantity, removeFromCart, user }) => {
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full max-w-md max-h-[90vh] overflow-hidden shadow-2xl border border-white/20">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/20">
                    <h2 className="text-xl font-bold text-[#272343]">Shopping Cart</h2>
                    <button 
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 max-h-96">
                    {!user ? (
                        <div className="text-center py-8">
                            <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
                            <p className="text-gray-500 mb-4">Please login to view your cart</p>
                        </div>
                    ) : cartItems.length === 0 ? (
                        <div className="text-center py-8">
                            <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
                            <p className="text-gray-500">Your cart is empty</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
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
                {user && cartItems.length > 0 && (
                    <div className="border-t border-white/20 p-6 space-y-4">
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

// Account Modal Component
const AccountModal = ({ isOpen, onClose, user, onLogout, onOrdersClick }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full max-w-md p-6 shadow-2xl border border-white/20">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#272343]">Account</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                        <div className="w-16 h-16 bg-[#007580] rounded-full flex items-center justify-center">
                            <User size={32} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#272343]">{user?.name}</h3>
                            <p className="text-gray-500">{user?.email}</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <button 
                            onClick={() => { onOrdersClick(); onClose(); }}
                            className="w-full flex items-center space-x-3 p-4 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <Package size={20} className="text-[#007580]" />
                            <span>My Orders</span>
                        </button>
                        
                        <button 
                            onClick={onLogout}
                            className="w-full flex items-center space-x-3 p-4 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                        >
                            <LogOut size={20} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Wishlist Modal Component
const WishlistModal = ({ isOpen, onClose, wishlistItems, removeFromWishlist, addToCart }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl border border-white/20">
                <div className="flex items-center justify-between p-6 border-b border-white/20">
                    <h2 className="text-xl font-bold text-[#272343]">Wishlist</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 max-h-96">
                    {wishlistItems.length === 0 ? (
                        <div className="text-center py-8">
                            <Heart size={48} className="mx-auto text-gray-400 mb-4" />
                            <p className="text-gray-500">Your wishlist is empty</p>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {wishlistItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-[#272343]">{item.title}</h4>
                                        <p className="font-semibold text-[#007580]">${item.price}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => addToCart(item)}
                                            className="bg-[#007580] hover:bg-[#005f67] text-white px-4 py-2 rounded-lg transition-colors"
                                        >
                                            Add to Cart
                                        </button>
                                        <button 
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="p-2 hover:bg-red-100 text-red-500 rounded-full transition-colors"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Orders Modal Component
const OrdersModal = ({ isOpen, onClose, orders }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl border border-white/20">
                <div className="flex items-center justify-between p-6 border-b border-white/20">
                    <h2 className="text-xl font-bold text-[#272343]">My Orders</h2>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 max-h-96">
                    {orders.length === 0 ? (
                        <div className="text-center py-8">
                            <Package size={48} className="mx-auto text-gray-400 mb-4" />
                            <p className="text-gray-500">No orders yet</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {orders.map((order) => (
                                <div key={order.id} className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h4 className="font-medium text-[#272343]">Order #{order.id}</h4>
                                            <p className="text-sm text-gray-500">{order.date}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-blue-100 text-blue-700'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-600">{order.items} items</p>
                                        <p className="font-semibold text-[#007580]">${order.total}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

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
                                        onClick={() => {
                                            if (user) {
                                                addToCart(feature);
                                            } else {
                                                alert('Please login to add items to cart');
                                            }
                                        }}
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
                                                onClick={() => {
                                                    if (user) {
                                                        addToCart(feature);
                                                    } else {
                                                        alert('Please login to add items to cart');
                                                    }
                                                }}
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
            title: 'Desk Chair',
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
                                        onClick={() => {
                                            if (user) {
                                                addToCart(category);
                                            } else {
                                                alert('Please login to add items to cart');
                                            }
                                        }}
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
            title: 'Library Stool Chair',
            status: 'New',
            price: 99,
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
        },
        {
            id: 9,
            title: 'Library Stool Chair',
            status: 'Sales',
            price: 99,
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            originalPrice: 120,
        },
        {
            id: 10,
            title: 'Library Stool Chair',
            price: 99,
            image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
        },
        {
            id: 11,
            title: 'Library Stool Chair',
            price: 99,
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        },
        {
            id: 12,
            title: 'Library Stool Chair',
            status: 'New',
            price: 99,
            image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
        },
        {
            id: 13,
            title: 'Library Stool Chair',
            status: 'Sales',
            price: 99,
            image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
            originalPrice: 120,
        },
        {
            id: 14,
            title: 'Library Stool Chair',
            price: 99,
            image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
        },
        {
            id: 15,
            title: 'Library Stool Chair',
            price: 99,
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
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
                                        onClick={() => {
                                            if (user) {
                                                addToCart(product);
                                            } else {
                                                alert('Please login to add items to cart');
                                            }
                                        }}
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
const App1 = () => {
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [orders, setOrders] = useState([
        { id: '12345', date: '2024-01-15', items: 2, total: '299.99', status: 'Delivered' },
        { id: '12346', date: '2024-01-20', items: 1, total: '149.99', status: 'Processing' },
    ]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);
    const [isOrdersOpen, setIsOrdersOpen] = useState(false);

    // All products combined for search
    const allProducts = [
        // Featured products
        { id: 1, title: 'Library Stool', price: 250, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
        { id: 2, title: 'Library Stool Chair', price: 200, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop' },
        { id: 3, title: 'Library Stool Chair', price: 250, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
        { id: 4, title: 'Library Stool Chair', price: 200, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop' },
        // Categories
        { id: 5, title: 'Wing Chair', price: 180, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
        { id: 6, title: 'Wooden Chair', price: 120, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop' },
        { id: 7, title: 'Desk Chair', price: 220, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop' },
        // Our products
        { id: 8, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
        { id: 9, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop' },
        { id: 10, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop' },
        { id: 11, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
        { id: 12, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
        { id: 13, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop' },
        { id: 14, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop' },
        { id: 15, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
    ];

    // Filter products based on search query
    const filteredProducts = searchQuery 
        ? allProducts.filter(product => 
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
        setCartItems([]);
        setWishlistItems([]);
        setIsAccountOpen(false);
    };

    const addToCart = (product) => {
        if (!user) {
            alert('Please login to add items to cart');
            return;
        }

        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCartItems([...cartItems, { 
                ...product, 
                quantity: 1,
                name: product.title,
                color: 'Default'
            }]);
        }
    };

    const addToWishlist = (product) => {
        if (!user) {
            alert('Please login to add items to wishlist');
            return;
        }

        const existingItem = wishlistItems.find(item => item.id === product.id);
        if (!existingItem) {
            setWishlistItems([...wishlistItems, product]);
        }
    };

    const updateCartQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
            <Navigation
                user={user}
                onLogin={handleLogin}
                onLogout={handleLogout}
                cartItemCount={cartItemCount}
                onCartClick={() => setIsCartOpen(true)}
                onAccountClick={() => setIsAccountOpen(true)}
                onWishlistClick={() => setIsWishlistOpen(true)}
                onOrdersClick={() => setIsOrdersOpen(true)}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

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