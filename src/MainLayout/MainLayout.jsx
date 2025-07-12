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
    const [orders, setOrders] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [loginModalAction, setLoginModalAction] = useState('');

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