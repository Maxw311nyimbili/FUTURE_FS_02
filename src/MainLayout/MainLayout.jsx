import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Layout Components
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

// Pages
import Home from '../Pages/Home/Home';
import Auth from '../Pages/Auth/Auth';
import Login from '../Pages/Auth/Login/Login';
import Register from '../Pages/Auth/Register/Register';
import Error from '../Pages/Error/Error';

// Auth check
import AuthCheck from '../AuthCheck/AuthCheck';

const MainLayout = () => {
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Auth handlers
    const handleLogin = (userData) => setUser(userData);
    const handleLogout = () => setUser(null);
    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    // Cart handlers
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
            alert('Please login to add items to wishlist');
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
            />

            <Routes>
                <Route
                    path="/"
                    element={
                        <AuthCheck>
                            <Home />
                        </AuthCheck>
                    }
                />
                <Route path="/auth" element={<Auth />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default MainLayout;
