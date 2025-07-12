import { useState } from "react";
import { Armchair, Heart, Menu, Search, ShoppingCart, User, X, ChevronDown, Plus, Minus, Trash2, Eye, EyeOff, AlertCircle, CheckCircle, Package } from "lucide-react";
import { CartModal, AccountModal, WishlistModal, OrdersModal } from '../modals/modals.jsx';
import { LoginPromptModal } from '../Components/LoginPromptModal/LoginPromptModal.jsx';


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
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 text-[#029fae] focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 text-[#029fae] focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300 pr-12"
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
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 text-[#029fae] focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300 pr-12"
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
  loginFunction,      
  registerFunction,  
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
  const [isLoginPromptOpen, setIsLoginPromptOpen] = useState(false);
  const [loginPromptAction, setLoginPromptAction] = useState('');

  
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
      let result;
      
      if (authMode === 'login') {
        if (loginFunction) {
          result = await loginFunction({
            email: formData.email,
            password: formData.password
          });
        } else {
          // Fallback - simple mock authentication
          result = { success: true, user: { name: formData.email.split('@')[0], email: formData.email } };
        }
      } else {
        // Registration
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }

        if (registerFunction) {
          result = await registerFunction({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword
          });
        } else {
          // Fallback - simple mock registration
          result = { success: true, user: { name: formData.name, email: formData.email } };
        }
      }

      if (result.success) {
        setSuccess(authMode === 'login' ? 'Login successful!' : 'Registration successful!');
        
        // Call the onLogin callback
        if (onLogin && result.user) {
          onLogin(result.user);
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
        setError(result.error || 'Authentication failed');
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
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="logo_wrapper">
                <a href='/' className="group text-2xl lg:text-3xl text-[#272343] font-inter font-bold capitalize flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#029fae] to-[#027a85] rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <div className="relative bg-gradient-to-r from-[#029fae] to-[#027a85] p-2 rounded-lg">
                            <Armchair size='1.5rem' className="lg:w-7 lg:h-7" color="white" />
                        </div>
                    </div>
                    <span className="bg-gradient-to-r from-[#272343] to-[#029fae] bg-clip-text text-transparent">
                        VELOUR
                    </span>
                </a>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="hidden lg:flex w-170 h-11 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={onSearchChange}
                  placeholder="Search for products..."
                  className="w-full h-full bg-white/50 backdrop-blur-sm text-[#272343] rounded-xl pl-4 pr-12 border-2 border-[#029fae]/10 focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae]/50 transition-all duration-300 placeholder:text-[#636270] hover:border-[#029fae]/20" 
                />
                <button 
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 p-1 hover:bg-[#029fae]/10 rounded-lg transition-colors duration-300"
                  onClick={() => console.log('Search clicked')}
                >
                  <Search size='18px' color="#029fae" />
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <>
                  {/* Wishlist */}
                  <button
                    onClick={() => setIsWishlistOpen(true)}
                    className={`p-2 rounded-lg transition-colors relative ${
                      wishlistItems.length > 0 ? 'bg-[#ffe5e9]' : 'hover:bg-gray-100'
                    }`}
                  >
                    <Heart size="20px" color={wishlistItems.length > 0 ? "#e63946" : "#636270"} />
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
                    className={`w-full flex items-center gap-2 px-3 py-2 text-[#272343] rounded-lg transition-colors ${
                      wishlistItems.length > 0 ? 'bg-[#ffe5e9]' : 'hover:bg-gray-50'
                    }`}
                  >
                    <Heart size="20px" color={wishlistItems.length > 0 ? "#e63946" : "#636270"} />
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
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
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

      <LoginPromptModal 
        isOpen={isLoginPromptOpen}
        onClose={() => setIsLoginPromptOpen(false)}
        action={loginPromptAction}
        onLoginClick={() => {
          setIsAuthModalOpen(true);     
          setIsLoginPromptOpen(false);
          setAuthMode('login');
        }}
      />


    </>
  );
};

export default Navbar;