// import { Armchair, Heart, Menu, Search, ShoppingCart, User, X, ChevronDown, Plus, Minus, Trash2, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null);
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const [isOpen, onClose] = useState(false);
//     const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
//     const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [user, setUser] = useState(null);
//     const [cartItems, setCartItems] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [isAccountOpen, setIsAccountOpen] = useState(false);
//     const [isWishlistOpen, setIsWishlistOpen] = useState(false);
//     const [isOrdersOpen, setIsOrdersOpen] = useState(false);
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const [orders, setOrders] = useState([
//         { id: '12345', date: '2024-01-15', items: 2, total: '299.99', status: 'Delivered' },
//         { id: '12346', date: '2024-01-20', items: 1, total: '149.99', status: 'Processing' },
//     ]);
//     const [searchQuery, setSearchQuery] = useState(""); 

//    const handleLogin = (userData) => {
//         setUser(userData);
//     };

  
    
//     // Form states
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
 
//     useEffect(() => {
//         // Check if user is logged in on component mount
//         checkAuthStatus();
//     }, []);

//     useEffect(() => {
//         // Fetch cart when user logs in
//         if (isLoggedIn) {
//             fetchCart();
//         } else {
//             setCartItems([]);
//         }
//     }, [isLoggedIn]);

//     const checkAuthStatus = async () => {
//         try {
//             const response = await fetch('/api/auth/me', {
//                 credentials: 'include'
//             });
            
//             if (response.ok) {
//                 const data = await response.json();
//                 setIsLoggedIn(true);
//                 setUser(data.user);
//             }
//         } catch (error) {
//             console.error('Auth check failed:', error);
//         }
//     };

//     const fetchCart = async () => {
//         try {
//             const response = await fetch('/api/cart', {
//                 credentials: 'include'
//             });
            
//             if (response.ok) {
//                 const data = await response.json();
//                 setCartItems(data.items || []);
//             }
//         } catch (error) {
//             console.error('Failed to fetch cart:', error);
//         }
//     };

//     const handleDropdownToggle = (dropdown) => {
//         setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//     };

//     const handleCartClick = () => {
//         if (!isLoggedIn) {
//             setAuthMode('login');
//             setIsAuthModalOpen(true);
//         } else {
//             setIsCartOpen(true);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const validateForm = () => {
//         if (authMode === 'register') {
//             if (!formData.name.trim()) {
//                 setError('Name is required');
//                 return false;
//             }
//             if (formData.password !== formData.confirmPassword) {
//                 setError('Passwords do not match');
//                 return false;
//             }
//             if (formData.password.length < 6) {
//                 setError('Password must be at least 6 characters long');
//                 return false;
//             }
//         }
        
//         if (!formData.email.trim()) {
//             setError('Email is required');
//             return false;
//         }
        
//         if (!formData.password.trim()) {
//             setError('Password is required');
//             return false;
//         }
        
//         return true;
//     };

//     const handleAuth = async (e) => {
//         e.preventDefault();
        
//         if (!validateForm()) return;
        
//         setLoading(true);
//         setError('');
//         setSuccess('');

//         try {
//             const endpoint = authMode === 'login' ? '/api/auth/login' : '/api/auth/register';
//             const body = authMode === 'login' 
//                 ? { email: formData.email, password: formData.password }
//                 : { name: formData.name, email: formData.email, password: formData.password, confirmPassword: formData.confirmPassword };

//             const response = await fetch(endpoint, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify(body)
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setSuccess(authMode === 'login' ? 'Login successful!' : 'Registration successful!');
//                 setIsLoggedIn(true);
//                 setUser(data.user);
                
//                 // Reset form
//                 setFormData({
//                     name: '',
//                     email: '',
//                     password: '',
//                     confirmPassword: ''
//                 });
                
//                 setTimeout(() => {
//                     setIsAuthModalOpen(false);
//                     setSuccess('');
//                 }, 1500);
//             } else {
//                 setError(data.message || 'Authentication failed');
//             }
//         } catch (error) {
//             setError('Network error. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleLogout = async () => {
//         try {
//             const response = await fetch('/api/auth/logout', {
//                 method: 'POST',
//                 credentials: 'include'
//             });
            
//             if (response.ok) {
//                 setIsLoggedIn(false);
//                 setUser(null);
//                 setCartItems([]);
//                 setActiveDropdown(null);
//             }
//         } catch (error) {
//             console.error('Logout failed:', error);
//         }
//     };

//     const updateCartQuantity = async (itemId, newQuantity) => {
//         if (newQuantity <= 0) {
//             await removeFromCart(itemId);
//             return;
//         }

//         try {
//             const response = await fetch('/api/cart', {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify({ itemId, quantity: newQuantity })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setCartItems(data.items || []);
//             }
//         } catch (error) {
//             console.error('Failed to update cart:', error);
//         }
//     };

//     const removeFromCart = async (itemId) => {
//         try {
//             const response = await fetch('/api/cart', {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify({ itemId })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setCartItems(data.items || []);
//             }
//         } catch (error) {
//             console.error('Failed to remove from cart:', error);
//         }
//     };

//     const getCartTotal = () => {
//         return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//     };

//     const getCartCount = () => {
//         return cartItems.reduce((total, item) => total + item.quantity, 0);
//     };

//     const closeAuthModal = () => {
//         setIsAuthModalOpen(false);
//         setError('');
//         setSuccess('');
//         setFormData({
//             name: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//         });
//     };

//     const switchAuthMode = () => {
//         setAuthMode(authMode === 'login' ? 'register' : 'login');
//         setError('');
//         setSuccess('');
//     };

//     return (
//         <div className="mb-0 relative z-50">
//             {/* Main Navbar */}
//             <div className={`navbar_main transition-all duration-300 ${
//                 isScrolled 
//                     ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-white/20' 
//                     : 'bg-gradient-to-r from-white/95 via-white/98 to-white/95 backdrop-blur-sm'
//             } w-full sticky top-0 z-50`}>
//                 <div className="container mx-auto px-4 lg:px-6">
//                     <div className="flex items-center justify-between h-20 lg:h-24">
                        
//                         {/* Logo */}
//                         <div className="logo_wrapper">
//                             <a href='/' className="group text-2xl lg:text-3xl text-[#272343] font-inter font-bold capitalize flex items-center gap-3 hover:scale-105 transition-transform duration-300">
//                                 <div className="relative">
//                                     <div className="absolute inset-0 bg-gradient-to-r from-[#029fae] to-[#027a85] rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
//                                     <div className="relative bg-gradient-to-r from-[#029fae] to-[#027a85] p-2 rounded-lg">
//                                         <Armchair size='1.5rem' className="lg:w-7 lg:h-7" color="white" />
//                                     </div>
//                                 </div>
//                                 <span className="bg-gradient-to-r from-[#272343] to-[#029fae] bg-clip-text text-transparent">
//                                     VELOUR
//                                 </span>
//                             </a>
//                         </div>

//                         {/* Desktop Navigation */}
//                         <nav className="hidden lg:flex items-center gap-8">
//                             <a href='/' className="relative text-sm font-inter font-medium capitalize py-2 px-4 rounded-lg transition-all duration-300 text-[#029fae] bg-[#029fae]/10 shadow-sm">
//                                 Home
//                             </a>
                            
//                             <div className="relative">
//                                 <button 
//                                     onClick={() => handleDropdownToggle('categories')}
//                                     className="flex items-center gap-2 text-sm font-inter font-medium capitalize py-2 px-4 rounded-lg transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5"
//                                 >
//                                     Categories
//                                     <ChevronDown size="16px" className={`transition-transform duration-300 ${activeDropdown === 'categories' ? 'rotate-180' : ''}`} />
//                                 </button>
                                
//                                 {activeDropdown === 'categories' && (
//                                     <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 py-2 z-50">
//                                         <div className="px-4 py-2 text-xs font-semibold text-[#029fae] uppercase tracking-wider border-b border-gray-100">
//                                             Categories
//                                         </div>
//                                         <a href="#" className="block px-4 py-3 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="w-2 h-2 bg-[#029fae] rounded-full"></div>
//                                                 Chair Collection
//                                             </div>
//                                         </a>
//                                         <a href="#" className="block px-4 py-3 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="w-2 h-2 bg-[#029fae] rounded-full"></div>
//                                                 Tables & Desks
//                                             </div>
//                                         </a>
//                                         <a href="#" className="block px-4 py-3 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="w-2 h-2 bg-[#029fae] rounded-full"></div>
//                                                 Storage Solutions
//                                             </div>
//                                         </a>
//                                         <a href="#" className="block px-4 py-3 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="w-2 h-2 bg-[#029fae] rounded-full"></div>
//                                                 Accessories
//                                             </div>
//                                         </a>
//                                     </div>
//                                 )}
//                             </div>
                            
//                             <a href='/shop' className="relative text-sm font-inter font-medium capitalize py-2 px-4 rounded-lg transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5">
//                                 Shop
//                             </a>
                            
//                             <a href='/products' className="relative text-sm font-inter font-medium capitalize py-2 px-4 rounded-lg transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5">
//                                 Products
//                             </a>
                            
//                             <a href='/about' className="relative text-sm font-inter font-medium capitalize py-2 px-4 rounded-lg transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5">
//                                 About Us
//                             </a>
//                         </nav>

//                         {/* Search & Actions */}
//                         <div className="flex items-center gap-3 lg:gap-4">
//                             {/* Search Box - Desktop */}
//                             <div className="hidden lg:flex w-80 h-11 relative">
//                             <input 
//                                 type="text" 
//                                 placeholder="Search products..." 
//                                 value={searchQuery}
//                                 onChange={(e) => onSearchChange(e.target.value)}
//                                 className="w-full h-full bg-white/50 backdrop-blur-sm text-[#272343] rounded-xl pl-4 pr-12 border-2 border-[#029fae]/10 focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae]/50 transition-all duration-300 placeholder:text-[#636270] hover:border-[#029fae]/20" 
//                             />
//                             <button 
//                                 className="absolute top-1/2 right-3 transform -translate-y-1/2 p-1 hover:bg-[#029fae]/10 rounded-lg transition-colors duration-300"
//                                 onClick={() => onSearchChange(searchQuery)} // Optional: Add click handler if needed
//                             >
//                                 <Search size='18px' color="#029fae" />
//                             </button>
//                         </div>

//                             {/* Action Buttons */}
//                             <div className="flex items-center gap-2">
//                                 {/* Search Button - Mobile */}
//                                 <button className="lg:hidden p-2 hover:bg-[#029fae]/10 rounded-lg transition-colors duration-300">
//                                     <Search size="20px" color="#029fae" />
//                                 </button>
                                
//                                 {/* Cart */}
//                                 <button 
//                                     onClick={onCartClick}
//                                     className="relative p-2 hover:bg-[#029fae]/10 rounded-lg transition-all duration-300 group"
//                                 >
//                                     <ShoppingCart size="20px" color="#029fae" className="group-hover:scale-110 transition-transform duration-300" />
//                                     {cartItemCount > 0 && (
//                                         <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#029fae] to-[#027a85] rounded-full flex items-center justify-center">
//                                             <span className="text-xs font-semibold text-white">{cartItemCount}</span>
//                                         </div>
//                                     )}
//                                 </button>
                                
//                                 {/* Wishlist */}
//                                 <button
//                                 onClick={onWishlistClick} 
//                                 className="p-2 hover:bg-[#029fae]/10 rounded-lg transition-all duration-300 group">
                                    
//                                     <Heart size="20px" color="#636270" className="group-hover:text-[#029fae] group-hover:scale-110 transition-all duration-300" />
//                                 </button>

//                                 {/* User Profile */}
//                                 <div className="relative">
//                                     <button 
//                                         onClick={() => handleDropdownToggle('profile')}
//                                         className="p-2 hover:bg-[#029fae]/10 rounded-lg transition-all duration-300 group"
//                                     >
//                                         <User size="20px" color="#636270" className="group-hover:text-[#029fae] group-hover:scale-110 transition-all duration-300" />
//                                     </button>
                                    
//                                     {activeDropdown === 'profile' && (
//                                         <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 py-2 z-50">
//                                             {isLoggedIn ? (
//                                                 <>
//                                                     <button
//                                                         onClick={onAccountClick}
//                                                         className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                                                     >
//                                                         <User size={20} className="text-[#007580]" />
//                                                         <span className="text-[#272343]">{user.name}</span>
//                                                     </button>
//                                                     <button 
//                                                         onClick={handleLogout}
//                                                         className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors"
//                                                     >
//                                                         Logout
//                                                     </button>
//                                                 </>
//                                             ) : (
//                                                 <button 
//                                                     onClick={() => {
//                                                         setAuthMode('login');
//                                                         setIsAuthModalOpen(true);
//                                                         setActiveDropdown(null);
//                                                     }}
//                                                     className="w-full text-left px-4 py-3 text-sm text-[#029fae] hover:bg-[#029fae]/5 transition-colors"
//                                                 >
//                                                     Login / Register
//                                                 </button>
//                                             )}
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Mobile Menu Toggle */}
//                                 <button 
//                                     className="lg:hidden p-2 hover:bg-[#029fae]/10 rounded-lg transition-colors duration-300"
//                                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                                 >
//                                     {isMobileMenuOpen ? (
//                                         <X size="20px" color="#029fae" />
//                                     ) : (
//                                         <Menu size="20px" color="#029fae" />
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//                 <div className="lg:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-xl z-40 animate-in slide-in-from-top duration-300">
//                     <div className="container mx-auto px-4 py-6">
//                         {/* Mobile Search */}
//                         <div className="w-full h-12 relative mb-6">
//                             <input 
//                                 type="text" 
//                                 placeholder="Search products..." 
//                                 value={searchQuery}
//                                 onChange={(e) => onSearchChange(e.target.value)}
//                                 className="w-full h-full bg-white/50 backdrop-blur-sm text-[#272343] rounded-xl pl-4 pr-12 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae]/50 transition-all duration-300 placeholder:text-[#636270]" 
//                             />
//                             <button className="absolute top-1/2 right-3 transform -translate-y-1/2 p-1 hover:bg-[#029fae]/10 rounded-lg transition-colors duration-300">
//                                 <Search size='18px' color="#029fae" />
//                             </button>
//                         </div>

//                         {/* Mobile Navigation */}
//                         <nav className="flex flex-col gap-2">
//                             <a href='/' className="text-base font-inter font-medium capitalize py-4 px-4 rounded-xl transition-all duration-300 text-[#029fae] bg-[#029fae]/10 shadow-sm" onClick={() => setIsMobileMenuOpen(false)}>
//                                 Home
//                             </a>
                            
//                             <div className="space-y-2">
//                                 <div className="text-base font-inter font-medium capitalize py-4 px-4 text-[#636270]">
//                                     Categories
//                                 </div>
//                                 <div className="ml-4 space-y-1">
//                                     <a href="#" className="block py-3 px-4 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 rounded-lg transition-colors">
//                                         Chair Collection
//                                     </a>
//                                     <a href="#" className="block py-3 px-4 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 rounded-lg transition-colors">
//                                         Tables & Desks
//                                     </a>
//                                     <a href="#" className="block py-3 px-4 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 rounded-lg transition-colors">
//                                         Storage Solutions
//                                     </a>
//                                     <a href="#" className="block py-3 px-4 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 rounded-lg transition-colors">
//                                         Accessories
//                                     </a>
//                                 </div>
//                             </div>
                            
//                             <a href='/shop' className="text-base font-inter font-medium capitalize py-4 px-4 rounded-xl transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5" onClick={() => setIsMobileMenuOpen(false)}>
//                                 Shop
//                             </a>
                            
//                             <a href='/products' className="text-base font-inter font-medium capitalize py-4 px-4 rounded-xl transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5" onClick={() => setIsMobileMenuOpen(false)}>
//                                 Products
//                             </a>
                            
//                             <a href='/about' className="text-base font-inter font-medium capitalize py-4 px-4 rounded-xl transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5" onClick={() => setIsMobileMenuOpen(false)}>
//                                 About Us
//                             </a>
//                         </nav>
                        
//                         {/* Mobile Contact */}
//                         <div className="mt-8 pt-6 border-t border-gray-200">
//                             <div className="bg-gradient-to-r from-[#029fae]/10 to-[#027a85]/5 rounded-xl p-4">
//                                 <p className="text-sm text-[#636270] font-inter">
//                                     Need help? Contact us
//                                 </p>
//                                 <p className="text-base font-semibold text-[#272343] mt-1">
//                                     (808) 555-0111
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Cart Modal */}
//             {isCartOpen && (
//                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//                     <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-hidden shadow-2xl">
//                         {/* Cart Header */}
//                         <div className="flex items-center justify-between p-6 border-b border-gray-100">
//                             <h2 className="text-xl font-semibold text-[#272343]">Shopping Cart</h2>
//                             <button 
//                                 onClick={() => setIsCartOpen(false)}
//                                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                             >
//                                 <X size="20px" color="#636270" />
//                             </button>
//                         </div>

//                         {/* Cart Items */}
//                         <div className="flex-1 overflow-y-auto max-h-96">
//                             {cartItems.length === 0 ? (
//                                 <div className="flex flex-col items-center justify-center py-12 px-6">
//                                     <ShoppingCart size="48px" color="#636270" className="opacity-50 mb-4" />
//                                     <p className="text-[#636270] text-center">Your cart is empty</p>
//                                     <p className="text-sm text-[#636270] text-center mt-2">Add some items to get started</p>
//                                 </div>
//                             ) : (
//                                 <div className="p-4 space-y-4">
//                                     {cartItems.map((item) => (
//                                         <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
//                                             <img 
//                                                 src={item.image} 
//                                                 alt={item.name}
//                                                 className="w-16 h-16 object-cover rounded-lg"
//                                             />
//                                             <div className="flex-1">
//                                                 <h3 className="font-medium text-[#272343] text-sm">{item.name}</h3>
//                                                 <p className="text-xs text-[#636270] mt-1">{item.color || 'Default'}</p>
//                                                 <p className="text-sm font-semibold text-[#029fae] mt-1">
//                                                     ${item.price?.toFixed(2) || '0.00'}
//                                                 </p>
//                                             </div>
//                                             <div className="flex items-center gap-2">
//                                                 <button 
//                                                     onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
//                                                     className="w-8 h-8 flex items-center justify-center bg-white border rounded-lg hover:bg-gray-100 transition-colors"
//                                                 >
//                                                     <Minus size="14px" color="#636270" />
//                                                 </button>
//                                                 <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
//                                                 <button 
//                                                     onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
//                                                     className="w-8 h-8 flex items-center justify-center bg-white border rounded-lg hover:bg-gray-100 transition-colors"
//                                                 >
//                                                     <Plus size="14px" color="#636270" />
//                                                 </button>
//                                                 <button 
//                                                     onClick={() => removeFromCart(item.id)}
//                                                     className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-2"
//                                                 >
//                                                     <Trash2 size="14px" />
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Cart Footer */}
//                         {cartItems.length > 0 && (
//                             <div className="p-6 border-t border-gray-100">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <span className="text-lg font-semibold text-[#272343]">Total:</span>
//                                     <span className="text-lg font-bold text-[#029fae]">${getCartTotal().toFixed(2)}</span>
//                                 </div>
//                                 <button className="w-full bg-[#029fae] hover:bg-[#027a85] text-white py-3 rounded-lg font-medium transition-colors">
//                                     Checkout
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}

//             {/* Orders Modal */}
//             {isOpen && (
//                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//                     <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl border border-white/20">
//                         <div className="flex items-center justify-between p-6 border-b border-white/20">
//                             <h2 className="text-xl font-bold text-[#272343]">My Orders</h2>
//                             <button 
//                                 onClick={onClose}
//                                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                             >
//                                 <X size={20} />
//                             </button>
//                         </div>

//                         <div className="flex-1 overflow-y-auto p-6 max-h-96">
//                             {orders.length === 0 ? (
//                                 <div className="text-center py-8">
//                                     <Package size={48} className="mx-auto text-gray-400 mb-4" />
//                                     <p className="text-gray-500">No orders yet</p>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-4">
//                                     {orders.map((order) => (
//                                         <div key={order.id} className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
//                                             <div className="flex justify-between items-start mb-3">
//                                                 <div>
//                                                     <h4 className="font-medium text-[#272343]">Order #{order.id}</h4>
//                                                     <p className="text-sm text-gray-500">{order.date}</p>
//                                                 </div>
//                                                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                                                     order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
//                                                     order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
//                                                     'bg-blue-100 text-blue-700'
//                                                 }`}>
//                                                     {order.status}
//                                                 </span>
//                                             </div>
//                                             <div className="flex justify-between items-center">
//                                                 <p className="text-sm text-gray-600">{order.items} items</p>
//                                                 <p className="font-semibold text-[#007580]">${order.total}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Wishlist Modal */}
//             {isOpen && (
//                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//                     <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl border border-white/20">
//                         <div className="flex items-center justify-between p-6 border-b border-white/20">
//                             <h2 className="text-xl font-bold text-[#272343]">Wishlist</h2>
//                             <button 
//                                 onClick={onClose}
//                                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                             >
//                                 <X size={20} />
//                             </button>
//                         </div>

//                         <div className="flex-1 overflow-y-auto p-6 max-h-96">
//                             {wishlistItems.length === 0 ? (
//                                 <div className="text-center py-8">
//                                     <Heart size={48} className="mx-auto text-gray-400 mb-4" />
//                                     <p className="text-gray-500">Your wishlist is empty</p>
//                                 </div>
//                             ) : (
//                                 <div className="grid gap-4">
//                                     {wishlistItems.map((item) => (
//                                         <div key={item.id} className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
//                                             <img 
//                                                 src={item.image} 
//                                                 alt={item.title}
//                                                 className="w-20 h-20 object-cover rounded-lg"
//                                             />
//                                             <div className="flex-1">
//                                                 <h4 className="font-medium text-[#272343]">{item.title}</h4>
//                                                 <p className="font-semibold text-[#007580]">${item.price}</p>
//                                             </div>
//                                             <div className="flex gap-2">
//                                                 <button 
//                                                     onClick={() => addToCart(item)}
//                                                     className="bg-[#007580] hover:bg-[#005f67] text-white px-4 py-2 rounded-lg transition-colors"
//                                                 >
//                                                     Add to Cart
//                                                 </button>
//                                                 <button 
//                                                     onClick={() => removeFromWishlist(item.id)}
//                                                     className="p-2 hover:bg-red-100 text-red-500 rounded-full transition-colors"
//                                                 >
//                                                     <X size={16} />
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Orders Modal */}
//             {isOpen && (
//                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//                     <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl border border-white/20">
//                         <div className="flex items-center justify-between p-6 border-b border-white/20">
//                             <h2 className="text-xl font-bold text-[#272343]">My Orders</h2>
//                             <button 
//                                 onClick={onClose}
//                                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                             >
//                                 <X size={20} />
//                             </button>
//                         </div>

//                         <div className="flex-1 overflow-y-auto p-6 max-h-96">
//                             {orders.length === 0 ? (
//                                 <div className="text-center py-8">
//                                     <Package size={48} className="mx-auto text-gray-400 mb-4" />
//                                     <p className="text-gray-500">No orders yet</p>
//                                 </div>
//                             ) : (
//                                 <div className="space-y-4">
//                                     {orders.map((order) => (
//                                         <div key={order.id} className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
//                                             <div className="flex justify-between items-start mb-3">
//                                                 <div>
//                                                     <h4 className="font-medium text-[#272343]">Order #{order.id}</h4>
//                                                     <p className="text-sm text-gray-500">{order.date}</p>
//                                                 </div>
//                                                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                                                     order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
//                                                     order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
//                                                     'bg-blue-100 text-blue-700'
//                                                 }`}>
//                                                     {order.status}
//                                                 </span>
//                                             </div>
//                                             <div className="flex justify-between items-center">
//                                                 <p className="text-sm text-gray-600">{order.items} items</p>
//                                                 <p className="font-semibold text-[#007580]">${order.total}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Auth Modal */}
//             {isAuthModalOpen && (
//                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//                     <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
//                         {/* Auth Header */}
//                         <div className="flex items-center justify-between p-6 border-b border-gray-100">
//                             <h2 className="text-xl font-semibold text-[#272343]">
//                                 {authMode === 'login' ? 'Login' : 'Register'}
//                             </h2>
//                             <button 
//                                 onClick={closeAuthModal}
//                                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                             >
//                                 <X size="20px" color="#636270" />
//                             </button>
//                         </div>

//                         {/* Auth Form */}
//                         <form onSubmit={handleAuth} className="p-6">
//                             {error && (
//                                 <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
//                                     <AlertCircle size="16px" className="text-red-500" />
//                                     <span className="text-sm text-red-700">{error}</span>
//                                 </div>
//                             )}
                            
//                             {success && (
//                                 <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
//                                     <CheckCircle size="16px" className="text-green-500" />
//                                     <span className="text-sm text-green-700">{success}</span>
//                                 </div>
//                             )}

//                             <div className="space-y-4">
//                                 {authMode === 'register' && (
//                                     <div>
//                                         <label className="block text-sm font-medium text-[#272343] mb-2">
//                                             Full Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleInputChange}
//                                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-colors"
//                                             placeholder="Enter your full name"
//                                         />
//                                     </div>
//                                 )}

//                                 <div>
//                                     <label className="block text-sm font-medium text-[#272343] mb-2">
//                                         Email Address
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-colors"
//                                         placeholder="Enter your email"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-[#272343] mb-2">
//                                         Password
//                                     </label>
//                                     <div className="relative">
//                                         <input
//                                             type={showPassword ? "text" : "password"}
//                                             name="password"
//                                             value={formData.password}
//                                             onChange={handleInputChange}
//                                             className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-colors"
//                                             placeholder="Enter your password"
//                                         />
//                                         <button
//                                             type="button"
//                                             onClick={() => setShowPassword(!showPassword)}
//                                             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#636270] hover:text-[#029fae] transition-colors"
//                                         >
//                                             {showPassword ? <EyeOff size="18px" /> : <Eye size="18px" />}
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {authMode === 'register' && (
//                                     <div>
//                                         <label className="block text-sm font-medium text-[#272343] mb-2">
//                                             Confirm Password
//                                         </label>
//                                         <div className="relative">
//                                             <input
//                                                 type={showConfirmPassword ? "text" : "password"}
//                                                 name="confirmPassword"
//                                                 value={formData.confirmPassword}
//                                                 onChange={handleInputChange}
//                                                 className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-colors"
//                                                 placeholder="Confirm your password"
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#636270] hover:text-[#029fae] transition-colors"
//                                             >
//                                                 {showConfirmPassword ? <EyeOff size="18px" /> : <Eye size="18px" />}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>

//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className="w-full bg-[#029fae] hover:bg-[#027a85] text-white py-3 rounded-lg font-medium transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
//                             >
//                                 {loading ? 'Processing...' : (authMode === 'login' ? 'Login' : 'Register')}
//                             </button>

//                             <div className="text-center mt-4">
//                                 <button
//                                     type="button"
//                                     onClick={switchAuthMode}
//                                     className="text-sm text-[#029fae] hover:text-[#027a85] transition-colors"
//                                 >
//                                     {authMode === 'login' 
//                                         ? "Don't have an account? Register here" 
//                                         : "Already have an account? Login here"
//                                     }
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
            

//             {/* Auth Modal */}
//             {isAuthModalOpen && (
//                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//                     <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
//                         {/* Auth Header */}
//                         <div className="flex items-center justify-between p-6 border-b border-gray-100">
//                             <h2 className="text-xl font-semibold text-[#272343]">
//                                 {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
//                             </h2>
//                             <button 
//                                 onClick={closeAuthModal}
//                                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                             >
//                                 <X size="20px" color="#636270" />
//                             </button>
//                         </div>

//                         {/* Auth Form */}
//                         <div className="p-6">
//                             {/* Error/Success Messages */}
//                             {error && (
//                                 <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
//                                     <AlertCircle size="16px" color="#ef4444" />
//                                     <span className="text-sm text-red-600">{error}</span>
//                                 </div>
//                             )}
                            
//                             {success && (
//                                 <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
//                                     <CheckCircle size="16px" color="#22c55e" />
//                                     <span className="text-sm text-green-600">{success}</span>
//                                 </div>
//                             )}

//                             {/* Form Fields */}
//                             <div className="space-y-4">
//                                 {authMode === 'register' && (
//                                     <div>
//                                         <label className="block text-sm font-medium text-[#272343] mb-2">
//                                             Full Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleInputChange}
//                                             className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
//                                             placeholder="Enter your full name"
//                                         />
//                                     </div>
//                                 )}

//                                 <div>
//                                     <label className="block text-sm font-medium text-[#272343] mb-2">
//                                         Email Address
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
//                                         placeholder="Enter your email"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-[#272343] mb-2">
//                                         Password
//                                     </label>
//                                     <div className="relative">
//                                         <input
//                                             type={showPassword ? 'text' : 'password'}
//                                             name="password"
//                                             value={formData.password}
//                                             onChange={handleInputChange}
//                                             className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300 pr-12"
//                                             placeholder="Enter your password"
//                                         />
//                                         <button
//                                             type="button"
//                                             onClick={() => setShowPassword(!showPassword)}
//                                             className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
//                                         >
//                                             {showPassword ? (
//                                                 <EyeOff size="16px" color="#636270" />
//                                             ) : (
//                                                 <Eye size="16px" color="#636270" />
//                                             )}
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {authMode === 'register' && (
//                                     <div>
//                                         <label className="block text-sm font-medium text-[#272343] mb-2">
//                                             Confirm Password
//                                         </label>
//                                         <div className="relative">
//                                             <input
//                                                 type={showConfirmPassword ? 'text' : 'password'}
//                                                 name="confirmPassword"
//                                                 value={formData.confirmPassword}
//                                                 onChange={handleInputChange}
//                                                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300 pr-12"
//                                                 placeholder="Confirm your password"
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
//                                             >
//                                                 {showConfirmPassword ? (
//                                                     <EyeOff size="16px" color="#636270" />
//                                                 ) : (
//                                                     <Eye size="16px" color="#636270" />
//                                                 )}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Submit Button */}
//                             <button
//                                 onClick={handleAuth}
//                                 disabled={loading}
//                                 className="w-full mt-6 bg-[#029fae] text-white py-3 rounded-lg hover:bg-[#027a85] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                             >
//                                 {loading ? (
//                                     <>
//                                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                                         {authMode === 'login' ? 'Signing In...' : 'Creating Account...'}
//                                     </>
//                                 ) : (
//                                     authMode === 'login' ? 'Sign In' : 'Create Account'
//                                 )}
//                             </button>

//                             {/* Switch Mode */}
//                             <div className="mt-6 text-center">
//                                 <button
//                                     type="button"
//                                     onClick={switchAuthMode}
//                                     className="text-sm text-[#029fae] hover:text-[#027a85] transition-colors"
//                                 >
//                                     {authMode === 'login' 
//                                         ? "Don't have an account? Sign up" 
//                                         : "Already have an account? Sign in"
//                                     }
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Overlay for dropdowns */}
//             {(activeDropdown || isMobileMenuOpen) && (
//                 <div 
//                     className="fixed inset-0 bg-transparent z-30"
//                     onClick={() => {
//                         setActiveDropdown(null);
//                         setIsMobileMenuOpen(false);
//                     }}
//                 />
//             )}
//         </div>
        
//     // All products combined for search
//     const allProducts = [
//         // Featured products
//         { id: 1, title: 'Library Stool', price: 250, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
//         { id: 2, title: 'Library Stool Chair', price: 200, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop' },
//         { id: 3, title: 'Library Stool Chair', price: 250, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
//         { id: 4, title: 'Library Stool Chair', price: 200, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop' },
//         // Categories
//         { id: 5, title: 'Wing Chair', price: 180, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
//         { id: 6, title: 'Wooden Chair', price: 120, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop' },
//         { id: 7, title: 'Desk Chair', price: 220, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop' },
//         // Our products
//         { id: 8, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
//         { id: 9, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop' },
//         { id: 10, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop' },
//         { id: 11, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
//         { id: 12, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
//         { id: 13, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop' },
//         { id: 14, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop' },
//         { id: 15, title: 'Library Stool Chair', price: 99, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
//     ];

//     // Filter products based on search query
//     const filteredProducts = searchQuery 
//         ? allProducts.filter(product => 
//             product.title.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//         : [];

//     const handleLogin = (userData) => {
//         setUser(userData);
//     };

//     const handleLogout = () => {
//         setUser(null);
//         setCartItems([]);
//         setWishlistItems([]);
//         setIsAccountOpen(false);
//     };

//     const addToCart = (product) => {
//         if (!user) {
//             alert('Please login to add items to cart');
//             return;
//         }

//         const existingItem = cartItems.find(item => item.id === product.id);
//         if (existingItem) {
//             setCartItems(cartItems.map(item =>
//                 item.id === product.id 
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item
//             ));
//         } else {
//             setCartItems([...cartItems, { 
//                 ...product, 
//                 quantity: 1,
//                 name: product.title,
//                 color: 'Default'
//             }]);
//         }
//     };

//     const addToWishlist = (product) => {
//         if (!user) {
//             alert('Please login to add items to wishlist');
//             return;
//         }

//         const existingItem = wishlistItems.find(item => item.id === product.id);
//         if (!existingItem) {
//             setWishlistItems([...wishlistItems, product]);
//         }
//     };

//     const updateCartQuantity = (id, quantity) => {
//         if (quantity <= 0) {
//             removeFromCart(id);
//             return;
//         }
//         setCartItems(cartItems.map(item =>
//             item.id === id ? { ...item, quantity } : item
//         ));
//     };

//     const removeFromCart = (id) => {
//         setCartItems(cartItems.filter(item => item.id !== id));
//     };

//     const removeFromWishlist = (id) => {
//         setWishlistItems(wishlistItems.filter(item => item.id !== id));
//     };

//     const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
//             <Navigation
//                 user={user}
//                 onLogin={handleLogin}
//                 onLogout={handleLogout}
//                 cartItemCount={cartItemCount}
//                 onCartClick={() => setIsCartOpen(true)}
//                 onAccountClick={() => setIsAccountOpen(true)}
//                 onWishlistClick={() => setIsWishlistOpen(true)}
//                 onOrdersClick={() => setIsOrdersOpen(true)}
//                 searchQuery={searchQuery}
//                 onSearchChange={setSearchQuery}
//             />

//             <main>
//                 <Features 
//                     addToCart={addToCart} 
//                     addToWishlist={addToWishlist}
//                     user={user}
//                     filteredProducts={filteredProducts}
//                 />
//                 <TopCategories 
//                     addToCart={addToCart} 
//                     addToWishlist={addToWishlist}
//                     user={user}
//                     filteredProducts={filteredProducts}
//                 />
//                 <OurProducts 
//                     addToCart={addToCart} 
//                     addToWishlist={addToWishlist}
//                     user={user}
//                     filteredProducts={filteredProducts}
//                 />
//             </main>

//             <CartModal
//                 isCartOpen={isCartOpen}
//                 setIsCartOpen={setIsCartOpen}
//                 cartItems={cartItems}
//                 updateCartQuantity={updateCartQuantity}
//                 removeFromCart={removeFromCart}
//                 user={user}
//             />

//             <AccountModal
//                 isOpen={isAccountOpen}
//                 onClose={() => setIsAccountOpen(false)}
//                 user={user}
//                 onLogout={handleLogout}
//                 onOrdersClick={() => {
//                     setIsAccountOpen(false);
//                     setIsOrdersOpen(true);
//                 }}
//             />

//             <WishlistModal
//                 isOpen={isWishlistOpen}
//                 onClose={() => setIsWishlistOpen(false)}
//                 wishlistItems={wishlistItems}
//                 removeFromWishlist={removeFromWishlist}
//                 addToCart={addToCart}
//             />

//             <OrdersModal
//                 isOpen={isOrdersOpen}
//                 onClose={() => setIsOrdersOpen(false)}
//                 orders={orders}
//             />
//         </div>
//     );

// };

// export default Navbar;


// import { Armchair, Heart, Menu, Search, ShoppingCart, User, X, ChevronDown, Plus, Minus, Trash2, Eye, EyeOff, AlertCircle, CheckCircle, Package } from "lucide-react";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null);
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
//     const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [user, setUser] = useState(null);
//     const [cartItems, setCartItems] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const [orders] = useState([
//         { id: '12345', date: '2024-01-15', items: 2, total: '299.99', status: 'Delivered' },
//         { id: '12346', date: '2024-01-20', items: 1, total: '149.99', status: 'Processing' },
//     ]);
//     const [searchQuery, setSearchQuery] = useState("");

//     // Form states
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
 
//     useEffect(() => {
//         // Check if user is logged in on component mount
//         checkAuthStatus();
//     }, []);

//     useEffect(() => {
//         // Fetch cart when user logs in
//         if (isLoggedIn) {
//             fetchCart();
//         } else {
//             setCartItems([]);
//         }
//     }, [isLoggedIn]);

//     const checkAuthStatus = async () => {
//         try {
//             const response = await fetch('/api/auth/me', {
//                 credentials: 'include'
//             });
            
//             if (response.ok) {
//                 const data = await response.json();
//                 setIsLoggedIn(true);
//                 setUser(data.user);
//             }
//         } catch (error) {
//             console.error('Auth check failed:', error);
//         }
//     };

//     const fetchCart = async () => {
//         try {
//             const response = await fetch('/api/cart', {
//                 credentials: 'include'
//             });
            
//             if (response.ok) {
//                 const data = await response.json();
//                 setCartItems(data.items || []);
//             }
//         } catch (error) {
//             console.error('Failed to fetch cart:', error);
//         }
//     };

//     const handleDropdownToggle = (dropdown) => {
//         setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//     };

//     const handleCartClick = () => {
//         if (!isLoggedIn) {
//             setAuthMode('login');
//             setIsAuthModalOpen(true);
//         } else {
//             setIsCartOpen(true);
//         }
//     };

//     const handleWishlistClick = () => {
//         if (!isLoggedIn) {
//             setAuthMode('login');
//             setIsAuthModalOpen(true);
//         } else {
//             // Handle wishlist open logic here
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const validateForm = () => {
//         if (authMode === 'register') {
//             if (!formData.name.trim()) {
//                 setError('Name is required');
//                 return false;
//             }
//             if (formData.password !== formData.confirmPassword) {
//                 setError('Passwords do not match');
//                 return false;
//             }
//             if (formData.password.length < 6) {
//                 setError('Password must be at least 6 characters long');
//                 return false;
//             }
//         }
        
//         if (!formData.email.trim()) {
//             setError('Email is required');
//             return false;
//         }
        
//         if (!formData.password.trim()) {
//             setError('Password is required');
//             return false;
//         }
        
//         return true;
//     };

//     const handleAuth = async (e) => {
//         e.preventDefault();
        
//         if (!validateForm()) return;
        
//         setLoading(true);
//         setError('');
//         setSuccess('');

//         try {
//             const endpoint = authMode === 'login' ? '/api/auth/login' : '/api/auth/register';
//             const body = authMode === 'login' 
//                 ? { email: formData.email, password: formData.password }
//                 : { name: formData.name, email: formData.email, password: formData.password, confirmPassword: formData.confirmPassword };

//             const response = await fetch(endpoint, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify(body)
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setSuccess(authMode === 'login' ? 'Login successful!' : 'Registration successful!');
//                 setIsLoggedIn(true);
//                 setUser(data.user);
                
//                 // Reset form
//                 setFormData({
//                     name: '',
//                     email: '',
//                     password: '',
//                     confirmPassword: ''
//                 });
                
//                 setTimeout(() => {
//                     setIsAuthModalOpen(false);
//                     setSuccess('');
//                 }, 1500);
//             } else {
//                 setError(data.message || 'Authentication failed');
//             }
//         } catch (error) {
//             setError('Network error. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleLogout = async () => {
//         try {
//             const response = await fetch('/api/auth/logout', {
//                 method: 'POST',
//                 credentials: 'include'
//             });
            
//             if (response.ok) {
//                 setIsLoggedIn(false);
//                 setUser(null);
//                 setCartItems([]);
//                 setActiveDropdown(null);
//             }
//         } catch (error) {
//             console.error('Logout failed:', error);
//         }
//     };

//     const updateCartQuantity = async (itemId, newQuantity) => {
//         if (newQuantity <= 0) {
//             await removeFromCart(itemId);
//             return;
//         }

//         try {
//             const response = await fetch('/api/cart', {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify({ itemId, quantity: newQuantity })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setCartItems(data.items || []);
//             }
//         } catch (error) {
//             console.error('Failed to update cart:', error);
//         }
//     };

//     const removeFromCart = async (itemId) => {
//         try {
//             const response = await fetch('/api/cart', {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify({ itemId })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setCartItems(data.items || []);
//             }
//         } catch (error) {
//             console.error('Failed to remove from cart:', error);
//         }
//     };

//     const getCartTotal = () => {
//         return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//     };

//     const getCartCount = () => {
//         return cartItems.reduce((total, item) => total + item.quantity, 0);
//     };

//     const closeAuthModal = () => {
//         setIsAuthModalOpen(false);
//         setError('');
//         setSuccess('');
//         setFormData({
//             name: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//         });
//     };

//     const switchAuthMode = () => {
//         setAuthMode(authMode === 'login' ? 'register' : 'login');
//         setError('');
//         setSuccess('');
//     };

//     const handleSearchChange = (value) => {
//         setSearchQuery(value);
//         // You can add search functionality here
//     };

//     return (
//         <div className="mb-0 relative z-50">
//             {/* Main Navbar */}
//             <div className={`navbar_main transition-all duration-300 ${
//                 isScrolled 
//                     ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-white/20' 
//                     : 'bg-gradient-to-r from-white/95 via-white/98 to-white/95 backdrop-blur-sm'
//             } w-full sticky top-0 z-50`}>
//                 <div className="container mx-auto px-4 lg:px-6">
//                     <div className="flex items-center justify-between h-20 lg:h-24">
                        
//                         {/* Logo */}
//                         <div className="logo_wrapper">
//                             <a href='/' className="group text-2xl lg:text-3xl text-[#272343] font-inter font-bold capitalize flex items-center gap-3 hover:scale-105 transition-transform duration-300">
//                                 <div className="relative">
//                                     <div className="absolute inset-0 bg-gradient-to-r from-[#029fae] to-[#027a85] rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
//                                     <div className="relative bg-gradient-to-r from-[#029fae] to-[#027a85] p-2 rounded-lg">
//                                         <Armchair size='1.5rem' className="lg:w-7 lg:h-7" color="white" />
//                                     </div>
//                                 </div>
//                                 <span className="bg-gradient-to-r from-[#272343] to-[#029fae] bg-clip-text text-transparent">
//                                     VELOUR
//                                 </span>
//                             </a>
//                         </div>

//                         {/* Desktop Navigation */}
//                         <nav className="hidden lg:flex items-center gap-8">
//                             <a href='/' className="relative text-sm font-inter font-medium capitalize py-2 px-4 rounded-lg transition-all duration-300 text-[#029fae] bg-[#029fae]/10 shadow-sm">
//                                 Home
//                             </a>
                            
//                             <div className="relative">
//                                 <button 
//                                     onClick={() => handleDropdownToggle('categories')}
//                                     className="flex items-center gap-2 text-sm font-inter font-medium capitalize py-2 px-4 rounded-lg transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5"
//                                 >
//                                     Categories
//                                     <ChevronDown size="16px" className={`transition-transform duration-300 ${activeDropdown === 'categories' ? 'rotate-180' : ''}`} />
//                                 </button>
                                
//                                 {activeDropdown === 'categories' && (
//                                     <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 py-2 z-50">
//                                         <div className="px-4 py-2 text-xs font-semibold text-[#029fae] uppercase tracking-wider border-b border-gray-100">
//                                             Categories
//                                         </div>
//                                         <a href="#" className="block px-4 py-3 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="w-2 h-2 bg-[#029fae] rounded-full"></div>
//                                                 Chair Collection
//                                             </div>
//                                         </a>
//                                         <a href="#" className="block px-4 py-3 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="w-2 h-2 bg-[#029fae] rounded-full"></div>
//                                                 Tables & Desks
//                                             </div>
//                                         </a>
//                                         <a href="#" className="block px-4 py-3 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="w-2 h-2 bg-[#029fae] rounded-full"></div>
//                                                 Storage Solutions
//                                             </div>
//                                         </a>
//                                         <a href="#" className="block px-4 py-3 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 transition-colors">
//                                             <div className="flex items-center gap-3">
//                                                 <div className="w-2 h-2 bg-[#029fae] rounded-full"></div>
//                                                 Accessories
//                                             </div>
//                                         </a>
//                                     </div>
//                                 )}
//                             </div>
                            
//                             <a href='/shop' className="relative text-sm font-inter font-medium capitalize py-2 px-4 rounded-lg transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5">
//                                 Shop
//                             </a>
                            
//                             <a href='/products' className="relative text-sm font-inter font-medium capitalize py-2 px-4 rounded-lg transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5">
//                                 Products
//                             </a>
                            
//                             <a href='/about' className="relative text-sm font-inter font-medium capitalize py-2 px-4 rounded-lg transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5">
//                                 About Us
//                             </a>
//                         </nav>

//                         {/* Search & Actions */}
//                         <div className="flex items-center gap-3 lg:gap-4">
//                             {/* Search Box - Desktop */}
//                             <div className="hidden lg:flex w-80 h-11 relative">
//                                 <input 
//                                     type="text" 
//                                     placeholder="Search products..." 
//                                     value={searchQuery}
//                                     onChange={(e) => handleSearchChange(e.target.value)}
//                                     className="w-full h-full bg-white/50 backdrop-blur-sm text-[#272343] rounded-xl pl-4 pr-12 border-2 border-[#029fae]/10 focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae]/50 transition-all duration-300 placeholder:text-[#636270] hover:border-[#029fae]/20" 
//                                 />
//                                 <button 
//                                     className="absolute top-1/2 right-3 transform -translate-y-1/2 p-1 hover:bg-[#029fae]/10 rounded-lg transition-colors duration-300"
//                                     onClick={() => handleSearchChange(searchQuery)}
//                                 >
//                                     <Search size='18px' color="#029fae" />
//                                 </button>
//                             </div>

//                             {/* Action Buttons */}
//                             <div className="flex items-center gap-2">
//                                 {/* Search Button - Mobile */}
//                                 <button className="lg:hidden p-2 hover:bg-[#029fae]/10 rounded-lg transition-colors duration-300">
//                                     <Search size="20px" color="#029fae" />
//                                 </button>
                                
//                                 {/* Cart */}
//                                 <button 
//                                     onClick={handleCartClick}
//                                     className="relative p-2 hover:bg-[#029fae]/10 rounded-lg transition-all duration-300 group"
//                                 >
//                                     <ShoppingCart size="20px" color="#029fae" className="group-hover:scale-110 transition-transform duration-300" />
//                                     {getCartCount() > 0 && (
//                                         <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#029fae] to-[#027a85] rounded-full flex items-center justify-center">
//                                             <span className="text-xs font-semibold text-white">{getCartCount()}</span>
//                                         </div>
//                                     )}
//                                 </button>
                                
//                                 {/* Wishlist */}
//                                 <button
//                                     onClick={handleWishlistClick} 
//                                     className="p-2 hover:bg-[#029fae]/10 rounded-lg transition-all duration-300 group"
//                                 >
//                                     <Heart size="20px" color="#636270" className="group-hover:text-[#029fae] group-hover:scale-110 transition-all duration-300" />
//                                 </button>

//                                 {/* User Profile */}
//                                 <div className="relative">
//                                     <button 
//                                         onClick={() => handleDropdownToggle('profile')}
//                                         className="p-2 hover:bg-[#029fae]/10 rounded-lg transition-all duration-300 group"
//                                     >
//                                         <User size="20px" color="#636270" className="group-hover:text-[#029fae] group-hover:scale-110 transition-all duration-300" />
//                                     </button>
                                    
//                                     {activeDropdown === 'profile' && (
//                                         <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/20 py-2 z-50">
//                                             {isLoggedIn ? (
//                                                 <>
//                                                     <div className="px-4 py-3 text-sm text-[#272343] border-b border-gray-100">
//                                                         Hi, {user?.name || 'User'}
//                                                     </div>
//                                                     <button
//                                                         onClick={() => {
//                                                             // Handle account click
//                                                             setActiveDropdown(null);
//                                                         }}
//                                                         className="w-full text-left px-4 py-3 text-sm text-[#636270] hover:bg-[#029fae]/5 transition-colors"
//                                                     >
//                                                         My Account
//                                                     </button>
//                                                     <button 
//                                                         onClick={handleLogout}
//                                                         className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors"
//                                                     >
//                                                         Logout
//                                                     </button>
//                                                 </>
//                                             ) : (
//                                                 <button 
//                                                     onClick={() => {
//                                                         setAuthMode('login');
//                                                         setIsAuthModalOpen(true);
//                                                         setActiveDropdown(null);
//                                                     }}
//                                                     className="w-full text-left px-4 py-3 text-sm text-[#029fae] hover:bg-[#029fae]/5 transition-colors"
//                                                 >
//                                                     Login / Register
//                                                 </button>
//                                             )}
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Mobile Menu Toggle */}
//                                 <button 
//                                     className="lg:hidden p-2 hover:bg-[#029fae]/10 rounded-lg transition-colors duration-300"
//                                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                                 >
//                                     {isMobileMenuOpen ? (
//                                         <X size="20px" color="#029fae" />
//                                     ) : (
//                                         <Menu size="20px" color="#029fae" />
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//                 <div className="lg:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-xl z-40 animate-in slide-in-from-top duration-300">
//                     <div className="container mx-auto px-4 py-6">
//                         {/* Mobile Search */}
//                         <div className="w-full h-12 relative mb-6">
//                             <input 
//                                 type="text" 
//                                 placeholder="Search products..." 
//                                 value={searchQuery}
//                                 onChange={(e) => handleSearchChange(e.target.value)}
//                                 className="w-full h-full bg-white/50 backdrop-blur-sm text-[#272343] rounded-xl pl-4 pr-12 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae]/50 transition-all duration-300 placeholder:text-[#636270]" 
//                             />
//                             <button className="absolute top-1/2 right-3 transform -translate-y-1/2 p-1 hover:bg-[#029fae]/10 rounded-lg transition-colors duration-300">
//                                 <Search size='18px' color="#029fae" />
//                             </button>
//                         </div>

//                         {/* Mobile Navigation */}
//                         <nav className="flex flex-col gap-2">
//                             <a href='/' className="text-base font-inter font-medium capitalize py-4 px-4 rounded-xl transition-all duration-300 text-[#029fae] bg-[#029fae]/10 shadow-sm" onClick={() => setIsMobileMenuOpen(false)}>
//                                 Home
//                             </a>
                            
//                             <div className="space-y-2">
//                                 <div className="text-base font-inter font-medium capitalize py-4 px-4 text-[#636270]">
//                                     Categories
//                                 </div>
//                                 <div className="ml-4 space-y-1">
//                                     <a href="#" className="block py-3 px-4 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 rounded-lg transition-colors">
//                                         Chair Collection
//                                     </a>
//                                     <a href="#" className="block py-3 px-4 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 rounded-lg transition-colors">
//                                         Tables & Desks
//                                     </a>
//                                     <a href="#" className="block py-3 px-4 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 rounded-lg transition-colors">
//                                         Storage Solutions
//                                     </a>
//                                     <a href="#" className="block py-3 px-4 text-sm text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5 rounded-lg transition-colors">
//                                         Accessories
//                                     </a>
//                                 </div>
//                             </div>
                            
//                             <a href='/shop' className="text-base font-inter font-medium capitalize py-4 px-4 rounded-xl transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5" onClick={() => setIsMobileMenuOpen(false)}>
//                                 Shop
//                             </a>
                            
//                             <a href='/products' className="text-base font-inter font-medium capitalize py-4 px-4 rounded-xl transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5" onClick={() => setIsMobileMenuOpen(false)}>
//                                 Products
//                             </a>
                            
//                             <a href='/about' className="text-base font-inter font-medium capitalize py-4 px-4 rounded-xl transition-all duration-300 text-[#636270] hover:text-[#029fae] hover:bg-[#029fae]/5" onClick={() => setIsMobileMenuOpen(false)}>
//                                 About Us
//                             </a>
//                         </nav>
                        
//                         {/* Mobile Contact */}
//                         <div className="mt-8 pt-6 border-t border-gray-200">
//                             <div className="bg-gradient-to-r from-[#029fae]/10 to-[#027a85]/5 rounded-xl p-4">
//                                 <p className="text-sm text-[#636270] font-inter">
//                                     Need help? Contact us
//                                 </p>
//                                 <p className="text-base font-semibold text-[#272343] mt-1">
//                                     (808) 555-0111
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Cart Modal */}
//             {isCartOpen && (
//                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//                     <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-hidden shadow-2xl">
//                         {/* Cart Header */}
//                         <div className="flex items-center justify-between p-6 border-b border-gray-100">
//                             <h2 className="text-xl font-semibold text-[#272343]">Shopping Cart</h2>
//                             <button 
//                                 onClick={() => setIsCartOpen(false)}
//                                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                             >
//                                 <X size="20px" color="#636270" />
//                             </button>
//                         </div>

//                         {/* Cart Items */}
//                         <div className="flex-1 overflow-y-auto max-h-96">
//                             {cartItems.length === 0 ? (
//                                 <div className="flex flex-col items-center justify-center py-12 px-6">
//                                     <ShoppingCart size="48px" color="#636270" className="opacity-50 mb-4" />
//                                     <p className="text-[#636270] text-center">Your cart is empty</p>
//                                     <p className="text-sm text-[#636270] text-center mt-2">Add some items to get started</p>
//                                 </div>
//                             ) : (
//                                 <div className="p-4 space-y-4">
//                                     {cartItems.map((item) => (
//                                         <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
//                                             <img 
//                                                 src={item.image} 
//                                                 alt={item.name}
//                                                 className="w-16 h-16 object-cover rounded-lg"
//                                             />
//                                             <div className="flex-1">
//                                                 <h3 className="font-medium text-[#272343] text-sm">{item.name}</h3>
//                                                 <p className="text-xs text-[#636270] mt-1">{item.color || 'Default'}</p>
//                                                 <p className="text-sm font-semibold text-[#029fae] mt-1">
//                                                     ${item.price?.toFixed(2) || '0.00'}
//                                                 </p>
//                                             </div>
//                                             <div className="flex items-center gap-2">
//                                                 <button 
//                                                     onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
//                                                     className="w-8 h-8 flex items-center justify-center bg-white border rounded-lg hover:bg-gray-100 transition-colors"
//                                                 >
//                                                     <Minus size="14px" color="#636270" />
//                                                 </button>
//                                                 <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
//                                                 <button 
//                                                     onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
//                                                     className="w-8 h-8 flex items-center justify-center bg-white border rounded-lg hover:bg-gray-100 transition-colors"
//                                                 >
//                                                     <Plus size="14px" color="#636270" />
//                                                 </button>
//                                                 <button 
//                                                     onClick={() => removeFromCart(item.id)}
//                                                     className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-2"
//                                                 >
//                                                     <Trash2 size="14px" />
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>

//                         {/* Cart Footer */}
//                         {cartItems.length > 0 && (
//                             <div className="p-6 border-t border-gray-100">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <span className="text-lg font-semibold text-[#272343]">Total:</span>
//                                     <span className="text-lg font-bold text-[#029fae]">${getCartTotal().toFixed(2)}</span>
//                                 </div>
//                                 <button className="w-full bg-[#029fae] hover:bg-[#027a85] text-white py-3 rounded-lg font-medium transition-colors">
//                                     Checkout
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}

//             {/* Auth Modal */}
//             {isAuthModalOpen && (
//                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//                     <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
//                         {/* Auth Header */}
//                         <div className="flex items-center justify-between p-6 border-b border-gray-100">
//                             <h2 className="text-xl font-semibold text-[#272343]">
//                                 {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
//                             </h2>
//                             <button 
//                                 onClick={closeAuthModal}
//                                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                             >
//                                 <X size="20px" color="#636270" />
//                             </button>
//                         </div>

//                         {/* Auth Form */}
//                         <div className="p-6">
//                             {/* Error/Success Messages */}
//                             {error && (
//                                 <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
//                                     <AlertCircle size="16px" color="#ef4444" />
//                                     <span className="text-sm text-red-600">{error}</span>
//                                 </div>
//                             )}
                            
//                             {success && (
//                                 <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
//                                     <CheckCircle size="16px" color="#22c55e" />
//                                     <span className="text-sm text-green-600">{success}</span>
//                                 </div>
//                             )}

//                             {/* Form Fields */}
//                             <form onSubmit={handleAuth} className="space-y-4">
//                                 {authMode === 'register' && (
//                                     <div>
//                                         <label className="block text-sm font-medium text-[#272343] mb-2">
//                                             Full Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleInputChange}
//                                             className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
//                                             placeholder="Enter your full name"
//                                             required
//                                         />
//                                     </div>
//                                 )}

//                                 <div>
//                                     <label className="block text-sm font-medium text-[#272343] mb-2">
//                                         Email Address
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
//                                         placeholder="Enter your email"
//                                         required
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-[#272343] mb-2">
//                                         Password
//                                     </label>
//                                     <div className="relative">
//                                         <input
//                                             type={showPassword ? 'text' : 'password'}
//                                             name="password"
//                                             value={formData.password}
//                                             onChange={handleInputChange}
//                                             className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300 pr-12"
//                                             placeholder="Enter your password"
//                                             required
//                                         />
//                                         <button
//                                             type="button"
//                                             onClick={() => setShowPassword(!showPassword)}
//                                             className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
//                                         >
//                                             {showPassword ? (
//                                                 <EyeOff size="16px" color="#636270" />
//                                             ) : (
//                                                 <Eye size="16px" color="#636270" />
//                                             )}
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {authMode === 'register' && (
//                                     <div>
//                                         <label className="block text-sm font-medium text-[#272343] mb-2">
//                                             Confirm Password
//                                         </label>
//                                         <div className="relative">
//                                             <input
//                                                 type={showConfirmPassword ? 'text' : 'password'}
//                                                 name="confirmPassword"
//                                                 value={formData.confirmPassword}
//                                                 onChange={handleInputChange}
//                                                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300 pr-12"
//                                                 placeholder="Confirm your password"
//                                                 required
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
//                                             >
//                                                 {showConfirmPassword ? (
//                                                     <EyeOff size="16px" color="#636270" />
//                                                 ) : (
//                                                     <Eye size="16px" color="#636270" />
//                                                 )}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Submit Button */}
//                                 <button
//                                     type="submit"
//                                     disabled={loading}
//                                     className="w-full mt-6 bg-[#029fae] text-white py-3 rounded-lg hover:bg-[#027a85] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                                 >
//                                     {loading ? (
//                                         <>
//                                             <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                                             {authMode === 'login' ? 'Signing In...' : 'Creating Account...'}
//                                         </>
//                                     ) : (
//                                         authMode === 'login' ? 'Sign In' : 'Create Account'
//                                     )}
//                                 </button>
//                             </form>

//                             {/* Switch Mode */}
//                             <div className="mt-6 text-center">
//                                 <button
//                                     type="button"
//                                     onClick={switchAuthMode}
//                                     className="text-sm text-[#029fae] hover:text-[#027a85] transition-colors"
//                                 >
//                                     {authMode === 'login' 
//                                         ? "Don't have an account? Sign up" 
//                                         : "Already have an account? Sign in"
//                                     }
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Overlay for dropdowns */}
//             {(activeDropdown || isMobileMenuOpen) && (
//                 <div 
//                     className="fixed inset-0 bg-transparent z-30"
//                     onClick={() => {
//                         setActiveDropdown(null);
//                         setIsMobileMenuOpen(false);
//                     }}
//                 />
//             )}
//         </div>
//     );
// };

// export default Navbar;


// import { useState } from "react";
// import { Armchair, Heart, Menu, Search, ShoppingCart, User, X, ChevronDown, Plus, Minus, Trash2, Eye, EyeOff, AlertCircle, CheckCircle, Package } from "lucide-react";

// const AuthModal = ({ 
//   isOpen, 
//   onClose, 
//   onLogin, 
//   authMode, 
//   switchAuthMode,
//   formData,
//   handleInputChange,
//   handleAuth,
//   loading,
//   error,
//   success,
//   showPassword,
//   setShowPassword,
//   showConfirmPassword,
//   setShowConfirmPassword
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
//         {/* Auth Header */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-100">
//           <h2 className="text-xl font-semibold text-[#272343]">
//             {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
//           </h2>
//           <button 
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//           >
//             <X size="20px" color="#636270" />
//           </button>
//         </div>

//         {/* Auth Form */}
//         <div className="p-6">
//           {/* Error/Success Messages */}
//           {error && (
//             <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
//               <AlertCircle size="16px" color="#ef4444" />
//               <span className="text-sm text-red-600">{error}</span>
//             </div>
//           )}
          
//           {success && (
//             <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
//               <CheckCircle size="16px" color="#22c55e" />
//               <span className="text-sm text-green-600">{success}</span>
//             </div>
//           )}

//           {/* Form Fields */}
//           <form onSubmit={handleAuth} className="space-y-4">
//             {authMode === 'register' && (
//               <div>
//                 <label className="block text-sm font-medium text-[#272343] mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>
//             )}

//             <div>
//               <label className="block text-sm font-medium text-[#272343] mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-[#272343] mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300 pr-12"
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
//                 >
//                   {showPassword ? (
//                     <EyeOff size="16px" color="#636270" />
//                   ) : (
//                     <Eye size="16px" color="#636270" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {authMode === 'register' && (
//               <div>
//                 <label className="block text-sm font-medium text-[#272343] mb-2">
//                   Confirm Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showConfirmPassword ? 'text' : 'password'}
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300 pr-12"
//                     placeholder="Confirm your password"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     {showConfirmPassword ? (
//                       <EyeOff size="16px" color="#636270" />
//                     ) : (
//                       <Eye size="16px" color="#636270" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full mt-6 bg-[#029fae] text-white py-3 rounded-lg hover:bg-[#027a85] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//             >
//               {loading ? (
//                 <>
//                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                   {authMode === 'login' ? 'Signing In...' : 'Creating Account...'}
//                 </>
//               ) : (
//                 authMode === 'login' ? 'Sign In' : 'Create Account'
//               )}
//             </button>
//           </form>

//           {/* Switch Mode */}
//           <div className="mt-6 text-center">
//             <button
//               type="button"
//               onClick={switchAuthMode}
//               className="text-sm text-[#029fae] hover:text-[#027a85] transition-colors"
//             >
//               {authMode === 'login' 
//                 ? "Don't have an account? Sign up" 
//                 : "Already have an account? Sign in"
//               }
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Navbar = ({ 
//   user, 
//   onLogin, 
//   onLogout, 
//   cartItemCount, 
//   onCartClick, 
//   onAccountClick, 
//   onWishlistClick, 
//   onOrdersClick,
//   searchQuery,
//   onSearchChange
// }) => {
//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [authMode, setAuthMode] = useState('login');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const switchAuthMode = () => {
//     setAuthMode(authMode === 'login' ? 'register' : 'login');
//     setError('');
//     setSuccess('');
//   };

//       const handleAuth = async (e) => {
//         e.preventDefault();
        
//         setLoading(true);
//         setError('');
//         setSuccess('');

//         try {
//             const endpoint = authMode === 'login' ? '/api/auth/login' : '/api/auth/register';
//             const body = authMode === 'login' 
//                 ? { email: formData.email, password: formData.password }
//                 : { name: formData.name, email: formData.email, password: formData.password, confirmPassword: formData.confirmPassword };

//             const response = await fetch(endpoint, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify(body)
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setSuccess(authMode === 'login' ? 'Login successful!' : 'Registration successful!');
        
                
//                 // Reset form
//                 setFormData({
//                     name: '',
//                     email: '',
//                     password: '',
//                     confirmPassword: ''
//                 });
                
//                 setTimeout(() => {
//                     setIsAuthModalOpen(false);
//                     setSuccess('');
//                 }, 1500);
//             } else {
//                 setError(data.message || 'Authentication failed');
//             }
//         } catch (error) {
//             setError('Network error. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//   const closeAuthModal = () => {
//     setIsAuthModalOpen(false);
//     setError('');
//     setSuccess('');
//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     });
//   };

//   return (
//     <>
//       <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-30 shadow-sm border-b border-white/20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="logo_wrapper">
//                 <a href='/' className="group text-2xl lg:text-3xl text-[#272343] font-inter font-bold capitalize flex items-center gap-3 hover:scale-105 transition-transform duration-300">
//                     <div className="relative">
//                         <div className="absolute inset-0 bg-gradient-to-r from-[#029fae] to-[#027a85] rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
//                         <div className="relative bg-gradient-to-r from-[#029fae] to-[#027a85] p-2 rounded-lg">
//                             <Armchair size='1.5rem' className="lg:w-7 lg:h-7" color="white" />
//                         </div>
//                     </div>
//                     <span className="bg-gradient-to-r from-[#272343] to-[#029fae] bg-clip-text text-transparent">
//                         VELOUR
//                     </span>
//                 </a>
//             </div>

//             {/* Search Bar - Desktop */}
//             <div className="hidden md:flex flex-1 max-w-lg mx-8">
//               <div className="hidden lg:flex w-90 h-11 relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   value={searchQuery}
//                   onChange={(e) => onSearchChange(e.target.value)}
//                   className="w-full h-full bg-white/50 backdrop-blur-sm text-[#272343] rounded-xl pl-4 pr-12 border-2 border-[#029fae]/10 focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae]/50 transition-all duration-300 placeholder:text-[#636270] hover:border-[#029fae]/20"
//                 />

//                 <button 
//                         className="absolute top-1/2 right-3 transform -translate-y-1/2 p-1 hover:bg-[#029fae]/10 rounded-lg transition-colors duration-300"
//                         onClick={() => handleSearchChange(searchQuery)}
//                     >
//                         <Search size='18px' color="#029fae" />
//                 </button>
//               </div>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-4">
//               {user ? (
//                 <>
//                   <button
//                     onClick={onWishlistClick}
//                     className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
//                   >
//                     <Heart size={24} className="text-[#007580]" />
//                   </button>
                  
//                   <button
//                     onClick={onCartClick}
//                     className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
//                   >
//                     <ShoppingCart size={24} className="text-[#007580]" />
//                     {cartItemCount > 0 && (
//                       <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                         {cartItemCount}
//                       </span>
//                     )}
//                   </button>
                  
//                   <button
//                     onClick={onAccountClick}
//                     className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <User size={20} className="text-[#007580]" />
//                     <span className="text-[#272343]">{user.name}</span>
//                   </button>
//                 </>
//               ) : (
//                 <button
//                   onClick={() => setIsAuthModalOpen(true)}
//                   className="bg-[#007580] hover:bg-[#005f67] text-white px-4 py-2 rounded-lg font-medium transition-colors"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
//             >
//               <Menu size={24} />
//             </button>
//           </div>

//           {/* Mobile Search */}
//           <div className="md:hidden pb-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => onSearchChange(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007580] focus:border-transparent"
//               />
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="md:hidden border-t border-gray-200 py-4">
//               {user ? (
//                 <div className="space-y-2">
//                   <button
//                     onClick={() => { onWishlistClick(); setIsMobileMenuOpen(false); }}
//                     className="flex items-center space-x-3 w-full p-3 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <Heart size={20} className="text-[#007580]" />
//                     <span>Wishlist</span>
//                   </button>
                  
//                   <button
//                     onClick={() => { onCartClick(); setIsMobileMenuOpen(false); }}
//                     className="flex items-center space-x-3 w-full p-3 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <ShoppingCart size={20} className="text-[#007580]" />
//                     <span>Cart ({cartItemCount})</span>
//                   </button>
                  
//                   <button
//                     onClick={() => { onAccountClick(); setIsMobileMenuOpen(false); }}
//                     className="flex items-center space-x-3 w-full p-3 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <User size={20} className="text-[#007580]" />
//                     <span>Account</span>
//                   </button>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => { setIsAuthModalOpen(true); setIsMobileMenuOpen(false); }}
//                   className="w-full bg-[#007580] hover:bg-[#005f67] text-white py-3 rounded-lg font-medium transition-colors"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       <AuthModal
//         isOpen={isAuthModalOpen}
//         onClose={closeAuthModal}
//         onLogin={onLogin}
//         authMode={authMode}
//         switchAuthMode={switchAuthMode}
//         formData={formData}
//         handleInputChange={handleInputChange}
//         handleAuth={handleAuth}
//         loading={loading}
//         error={error}
//         success={success}
//         showPassword={showPassword}
//         setShowPassword={setShowPassword}
//         showConfirmPassword={showConfirmPassword}
//         setShowConfirmPassword={setShowConfirmPassword}
//       />
//     </>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { Armchair, Heart, Menu, Search, ShoppingCart, User, X, ChevronDown, Plus, Minus, Trash2, Eye, EyeOff, AlertCircle, CheckCircle, Package } from "lucide-react";
import { CartModal, AccountModal, WishlistModal, OrdersModal } from '../modals/modals.jsx';

const AuthModal = ({ 
  isOpen, 
  onClose, 
  onLogin, 
  authMode, 
  switchAuthMode,
  formData,
  handleInputChange,
  handleAuth,
  loading,
  error,
  success,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
        {/* Auth Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-[#272343]">
            {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size="20px" color="#636270" />
          </button>
        </div>

        {/* Auth Form */}
        <div className="p-6">
          {/* Error/Success Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle size="16px" color="#ef4444" />
              <span className="text-sm text-red-600">{error}</span>
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
              <CheckCircle size="16px" color="#22c55e" />
              <span className="text-sm text-green-600">{success}</span>
            </div>
          )}

          {/* Form Fields */}
          <div className="space-y-4">
            {authMode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-[#272343] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-[#272343] mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#272343] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300 pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {showPassword ? (
                    <EyeOff size="16px" color="#636270" />
                  ) : (
                    <Eye size="16px" color="#636270" />
                  )}
                </button>
              </div>
            </div>

            {authMode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-[#272343] mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300 pr-12"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size="16px" color="#636270" />
                    ) : (
                      <Eye size="16px" color="#636270" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleAuth}
              disabled={loading}
              className="w-full mt-6 bg-[#029fae] text-white py-3 rounded-lg hover:bg-[#027a85] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {authMode === 'login' ? 'Signing In...' : 'Creating Account...'}
                </>
              ) : (
                authMode === 'login' ? 'Sign In' : 'Create Account'
              )}
            </button>
          </div>

          {/* Switch Mode */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={switchAuthMode}
              className="text-sm text-[#029fae] hover:text-[#027a85] transition-colors"
            >
              {authMode === 'login' 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ 
  user, 
  onLogin, 
  onLogout, 
  cartItems = [],
  wishlistItems = [],
  orders = [],
  updateCartQuantity,
  removeFromCart,
  removeFromWishlist,
  addToCart,
  searchQuery,
  onSearchChange
}) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  
  const [authMode, setAuthMode] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const switchAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
    setError('');
    setSuccess('');
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    setError('');
    setSuccess('');

    try {
        const endpoint = authMode === 'login' ? '/api/auth/login' : '/api/auth/register';
        const body = authMode === 'login' 
            ? { email: formData.email, password: formData.password }
            : { name: formData.name, email: formData.email, password: formData.password, confirmPassword: formData.confirmPassword };

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            setSuccess(authMode === 'login' ? 'Login successful!' : 'Registration successful!');
            
            // Call the onLogin callback with user data
            if (onLogin && data.user) {
                onLogin(data.user);
            }
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            
            setTimeout(() => {
                setIsAuthModalOpen(false);
                setSuccess('');
            }, 1500);
        } else {
            setError(data.message || 'Authentication failed');
        }
    } catch (error) {
        setError('Network error. Please try again.');
    } finally {
        setLoading(false);
    }
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setError('');
    setSuccess('');
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setIsAccountOpen(false);
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-30 shadow-sm border-b border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Armchair size="28px" color="#029fae" />
              <span className="text-xl font-bold text-[#272343]">Comforty</span>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search size="20px" color="#636270" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={onSearchChange}
                  placeholder="Search for products..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <>
                  {/* Wishlist */}
                  <button
                    onClick={() => setIsWishlistOpen(true)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                  >
                    <Heart size="20px" color="#636270" />
                  </button>

                  {/* Cart */}
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                  >
                    <ShoppingCart size="20px" color="#636270" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#029fae] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </button>

                  {/* User Menu */}
                  <div className="relative group">
                    <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <User size="20px" color="#636270" />
                      <span className="text-sm text-[#272343]">{user.name}</span>
                      <ChevronDown size="16px" color="#636270" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        <button
                          onClick={() => setIsAccountOpen(true)}
                          className="w-full px-4 py-2 text-left text-sm text-[#272343] hover:bg-gray-50 transition-colors flex items-center gap-2"
                        >
                          <User size="16px" color="#636270" />
                          My Account
                        </button>
                        <button
                          onClick={() => setIsOrdersOpen(true)}
                          className="w-full px-4 py-2 text-left text-sm text-[#272343] hover:bg-gray-50 transition-colors flex items-center gap-2"
                        >
                          <Package size="16px" color="#636270" />
                          My Orders
                        </button>
                        <hr className="my-2" />
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-[#029fae] text-white px-4 py-2 rounded-lg hover:bg-[#027a85] transition-colors font-medium"
                >
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X size="24px" color="#636270" />
              ) : (
                <Menu size="24px" color="#636270" />
              )}
            </button>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search size="20px" color="#636270" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={onSearchChange}
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-2">
              {user ? (
                <>
                  <div className="flex items-center gap-2 px-3 py-2 text-[#272343]">
                    <User size="20px" color="#636270" />
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsWishlistOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-[#272343] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Heart size="20px" color="#636270" />
                    Wishlist
                  </button>
                  <button
                    onClick={() => {
                      setIsCartOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-[#272343] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <ShoppingCart size="20px" color="#636270" />
                    Cart ({cartItemCount})
                  </button>
                  <button
                    onClick={() => {
                      setIsAccountOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-[#272343] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <User size="16px" color="#636270" />
                    My Account
                  </button>
                  <button
                    onClick={() => {
                      setIsOrdersOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-[#272343] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Package size="16px" color="#636270" />
                    My Orders
                  </button>
                  <hr className="my-2" />
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#029fae] text-white px-4 py-2 rounded-lg hover:bg-[#027a85] transition-colors font-medium"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
      

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        onLogin={onLogin}
        authMode={authMode}
        switchAuthMode={switchAuthMode}
        formData={formData}
        handleInputChange={handleInputChange}
        handleAuth={handleAuth}
        loading={loading}
        error={error}
        success={success}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        showConfirmPassword={showConfirmPassword}
        setShowConfirmPassword={setShowConfirmPassword}
      />

      {/* Cart Modal */}
      <CartModal
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        user={user}
      />

      {/* Account Modal */}
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

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        removeFromWishlist={removeFromWishlist}
        addToCart={addToCart}
      />

      {/* Orders Modal */}
      <OrdersModal
        isOpen={isOrdersOpen}
        onClose={() => setIsOrdersOpen(false)}
        orders={orders}
      />
    </>
  );
};

export default Navbar;