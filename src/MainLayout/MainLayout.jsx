import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPromptModal } from '../Components/LoginPromptModal/LoginPromptModal';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

// Pages
import Home from '../Pages/Home/Home';
import Auth from '../Pages/Auth/Auth';
import Login from '../Pages/Auth/Login/Login';
import Register from '../Pages/Auth/Register/Register';
import Error from '../Pages/Error/Error';
import AuthCheck from '../AuthCheck/AuthCheck';

// Auth hook
import { useAuth } from '../hooks/useAuth';

const MainLayout = () => {
    const { user, loading, login, register, logout } = useAuth();
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [loginModalAction, setLoginModalAction] = useState('');
    const [setShowConfirmation] = useState(false);
    const [setIsCheckingOut] = useState(false);

    const [orders, setOrders] = useState([
    // Example order data structure
    {
        id: "ORD-001",
        date: "2025-01-15",
        status: "delivered",
        items: [
        { name: "Modern Sofa", quantity: 1, price: "899.99" },
        { name: "Coffee Table", quantity: 1, price: "299.99" }
        ],
        total: "1199.98"
    }
    ]);

    // Show loading screen while checking authentication
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="w-8 h-8 border-4 border-[#029fae] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[#636270]">Loading...</p>
                </div>
            </div>
        );
    }

    const handleLogin = async (userData) => {

        console.log('User logged in:', userData);
      
    };

    const handleLogout = async () => {
        await logout();
        setCartItems([]);
        setWishlistItems([]);
        setOrders([]);
    };

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    // Cart handlers
    const addToCart = (product) => {
        if (!user) {
            setLoginModalAction('cart');
            setLoginModalOpen(true);
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
                color: 'Default',
            }]);
        }
    };

    const handleCheckoutSuccess = (orderDetails, cartItems) => {
        // Create new order
        const newOrder = {
            id: `ORD-${Date.now()}`,
            date: new Date().toISOString().split('T')[0],
            status: "processing",
            items: cartItems.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: (item.price * item.quantity).toFixed(2)
            })),
            total: orderDetails.total
        };

        // Add order to orders list
        setOrders(prevOrders => [newOrder, ...prevOrders]);

        // Clear cart after successful checkout
        setCartItems([]);
    };



    const handleConfirmOrder = async () => {
        setShowConfirmation(false);
        setIsCheckingOut(true);

        const orderDetails = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
            items: cartItems,
        };

        setTimeout(() => {
            setIsCheckingOut(false);

            if (handleCheckoutSuccess) {
                handleCheckoutSuccess(orderDetails, cartItems);
            }

            alert('Order placed successfully!');
        }, 2000);
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

    // Wishlist handlers
    const addToWishlist = (product) => {
        if (!user) {
            setLoginModalAction('wishlist');
            setLoginModalOpen(true);
            return;
        }

        const exists = wishlistItems.some(item => item.id === product.id);
        if (!exists) {
            setWishlistItems([...wishlistItems, product]);
        }
    };

    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    return (
        <BrowserRouter>
            <Navbar
                user={user}
                onLogin={handleLogin}
                onLogout={handleLogout}
                cartItems={cartItems}
                wishlistItems={wishlistItems}
                orders={orders}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                updateCartQuantity={updateCartQuantity}
                removeFromCart={removeFromCart}
                removeFromWishlist={removeFromWishlist}
                addToCart={addToCart}

                loginFunction={login}
                registerFunction={register}
            />

            <Routes>
                <Route
                    path="/"
                    element={
                        <AuthCheck user={user} requireAuth={false}>
                            <Home
                                user={user}
                                addToCart={addToCart}
                                addToWishlist={addToWishlist}
                                cartItems={cartItems}
                                wishlistItems={wishlistItems}
                                updateCartQuantity={updateCartQuantity}
                                removeFromCart={removeFromCart}
                                removeFromWishlist={removeFromWishlist}
                                searchQuery={searchQuery}
                                orders={orders}
                                onCheckoutSuccess={handleCheckoutSuccess}
                                onConfirm={handleConfirmOrder}
                            />
                        </AuthCheck>
                    }
                />

                <Route path="/auth" element={<Auth />}>
                    <Route 
                        path="login" 
                        element={<Login loginFunction={login} />} 
                    />
                    <Route 
                        path="register" 
                        element={<Register registerFunction={register} />} 
                    />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>

             <LoginPromptModal 
                isOpen={loginModalOpen}
                onClose={() => setLoginModalOpen(false)}
                action={loginModalAction}
            />

            <Footer />
        </BrowserRouter>
    );
};

export default MainLayout;