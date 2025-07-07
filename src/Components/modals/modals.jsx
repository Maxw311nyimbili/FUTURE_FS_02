import { useState } from "react";
import { X, Plus, Minus, Trash2, Heart, ShoppingCart, User, Package, CreditCard, MapPin, Phone, Mail, Calendar, CheckCircle, AlertCircle } from "lucide-react";

// Cart Modal Component
const CartModal = ({ isOpen, onClose, cartItems, updateCartQuantity, removeFromCart, user }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 100 ? 0 : 15; // Free shipping over $100
  const total = subtotal + tax + shipping;

  const handleCheckout = async () => {
    if (!user) {
      alert('Please sign in to checkout');
      return;
    }
    
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      alert('Order placed successfully!');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-[#272343] flex items-center gap-2">
            <ShoppingCart size="24px" color="#029fae" />
            Shopping Cart ({cartItems.length})
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size="20px" color="#636270" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex flex-col h-full max-h-[calc(90vh-80px)]">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <ShoppingCart size="64px" color="#e5e7eb" className="mb-4" />
              <h3 className="text-lg font-medium text-[#272343] mb-2">Your cart is empty</h3>
              <p className="text-sm text-[#636270] mb-4">Add some products to get started</p>
              <button 
                onClick={onClose}
                className="bg-[#029fae] text-white px-6 py-2 rounded-lg hover:bg-[#027a85] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Package size="24px" color="#636270" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-[#272343]">{item.name}</h4>
                        <p className="text-sm text-[#636270]">{item.category}</p>
                        <p className="text-lg font-semibold text-[#029fae]">${item.price}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size="16px" color="#636270" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <Plus size="16px" color="#636270" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <Trash2 size="16px" color="#ef4444" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t border-gray-100 p-6 bg-gray-50">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#636270]">Subtotal</span>
                    <span className="text-[#272343]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#636270]">Tax</span>
                    <span className="text-[#272343]">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#636270]">Shipping</span>
                    <span className="text-[#272343]">${shipping.toFixed(2)}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-[#272343]">Total</span>
                    <span className="text-[#029fae]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut || !user}
                  className="w-full bg-[#029fae] text-white py-3 rounded-lg hover:bg-[#027a85] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard size="20px" />
                      Checkout
                    </>
                  )}
                </button>
                
                {!user && (
                  <p className="text-xs text-[#636270] text-center mt-2">
                    Please sign in to checkout
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Account Modal Component
const AccountModal = ({ isOpen, onClose, user, onLogout, onOrdersClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  if (!isOpen) return null;

  const handleSave = () => {
    // Simulate save
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-[#272343] flex items-center gap-2">
            <User size="24px" color="#029fae" />
            My Account
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size="20px" color="#636270" />
          </button>
        </div>

        {/* Account Content */}
        <div className="p-6">
          {!isEditing ? (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#029fae] rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size="32px" color="white" />
                </div>
                <h3 className="text-lg font-semibold text-[#272343]">{user?.name}</h3>
                <p className="text-sm text-[#636270]">{user?.email}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail size="20px" color="#636270" />
                  <div>
                    <p className="text-sm font-medium text-[#272343]">Email</p>
                    <p className="text-sm text-[#636270]">{user?.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone size="20px" color="#636270" />
                  <div>
                    <p className="text-sm font-medium text-[#272343]">Phone</p>
                    <p className="text-sm text-[#636270]">{user?.phone || 'Not provided'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin size="20px" color="#636270" />
                  <div>
                    <p className="text-sm font-medium text-[#272343]">Address</p>
                    <p className="text-sm text-[#636270]">{user?.address || 'Not provided'}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex-1 bg-[#029fae] text-white py-2 rounded-lg hover:bg-[#027a85] transition-colors font-medium"
                >
                  Edit Profile
                </button>
                <button
                  onClick={onOrdersClick}
                  className="flex-1 bg-gray-100 text-[#272343] py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  View Orders
                </button>
              </div>

              <hr className="my-4" />

              <button
                onClick={onLogout}
                className="w-full text-red-600 py-2 rounded-lg hover:bg-red-50 transition-colors font-medium"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#272343] mb-4">Edit Profile</h3>
              
              <div>
                <label className="block text-sm font-medium text-[#272343] mb-2">Name</label>
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => setEditData({...editData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#272343] mb-2">Email</label>
                <input
                  type="email"
                  value={editData.email}
                  onChange={(e) => setEditData({...editData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#272343] mb-2">Phone</label>
                <input
                  type="tel"
                  value={editData.phone}
                  onChange={(e) => setEditData({...editData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#272343] mb-2">Address</label>
                <textarea
                  value={editData.address}
                  onChange={(e) => setEditData({...editData, address: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029fae]/30 focus:border-[#029fae] transition-all duration-300"
                />
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-[#029fae] text-white py-2 rounded-lg hover:bg-[#027a85] transition-colors font-medium"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-100 text-[#272343] py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
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
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-[#272343] flex items-center gap-2">
            <Heart size="24px" color="#029fae" />
            My Wishlist ({wishlistItems.length})
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size="20px" color="#636270" />
          </button>
        </div>

        {/* Wishlist Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {wishlistItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <Heart size="64px" color="#e5e7eb" className="mb-4" />
              <h3 className="text-lg font-medium text-[#272343] mb-2">Your wishlist is empty</h3>
              <p className="text-sm text-[#636270] mb-4">Save items you love to view them later</p>
              <button 
                onClick={onClose}
                className="bg-[#029fae] text-white px-6 py-2 rounded-lg hover:bg-[#027a85] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Package size="24px" color="#636270" />
                      </div>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-1 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <X size="16px" color="#ef4444" />
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-[#272343]">{item.name}</h4>
                      <p className="text-sm text-[#636270]">{item.category}</p>
                      <p className="text-lg font-semibold text-[#029fae]">${item.price}</p>
                      
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => addToCart(item)}
                          className="flex-1 bg-[#029fae] text-white py-2 rounded-lg hover:bg-[#027a85] transition-colors font-medium text-sm flex items-center justify-center gap-1"
                        >
                          <ShoppingCart size="16px" />
                          Add to Cart
                        </button>
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          <Trash2 size="16px" color="#ef4444" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-50';
      case 'shipped': return 'text-blue-600 bg-blue-50';
      case 'processing': return 'text-yellow-600 bg-yellow-50';
      case 'cancelled': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return <CheckCircle size="16px" />;
      case 'shipped': return <Package size="16px" />;
      case 'processing': return <AlertCircle size="16px" />;
      default: return <Package size="16px" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-[#272343] flex items-center gap-2">
            <Package size="24px" color="#029fae" />
            My Orders ({orders.length})
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size="20px" color="#636270" />
          </button>
        </div>

        {/* Orders Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <Package size="64px" color="#e5e7eb" className="mb-4" />
              <h3 className="text-lg font-medium text-[#272343] mb-2">No orders yet</h3>
              <p className="text-sm text-[#636270] mb-4">Your order history will appear here</p>
              <button 
                onClick={onClose}
                className="bg-[#029fae] text-white px-6 py-2 rounded-lg hover:bg-[#027a85] transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="p-6">
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-medium text-[#272343]">Order #{order.id}</h4>
                        <p className="text-sm text-[#636270] flex items-center gap-1">
                          <Calendar size="14px" />
                          {order.date}
                        </p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Package size="16px" color="#636270" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-[#272343]">{item.name}</p>
                            <p className="text-xs text-[#636270]">Qty: {item.quantity}</p>
                          </div>
                          <p className="text-sm font-medium text-[#029fae]">${item.price}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-sm text-[#636270]">
                        {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-[#636270]">Total</p>
                        <p className="text-lg font-semibold text-[#029fae]">${order.total}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { CartModal, AccountModal, WishlistModal, OrdersModal };