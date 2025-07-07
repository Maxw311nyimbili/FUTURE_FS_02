import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './../Components/Navbar/Navbar';
import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Error from "../Pages/Error/Error";
import AuthCheck from "../AuthCheck/AuthCheck";
import Footer from "../Components/Footer/Footer";
import { useState } from 'react';

const MainLayout = () => {
    // State for Navbar props
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Handler functions
    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Add other handler functions as needed (for cart, wishlist, etc.)

    return (
        <BrowserRouter>
            {/* navbar with all required props */}
            <Navbar
                user={user}
                onLogin={handleLogin}
                onLogout={handleLogout}
                cartItems={cartItems}
                wishlistItems={wishlistItems}
                orders={orders}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                // Add other props as needed:
                // updateCartQuantity={updateCartQuantity}
                // removeFromCart={removeFromCart}
                // removeFromWishlist={removeFromWishlist}
                // addToCart={addToCart}
            />
            
            <Routes>
                <Route path="/" element={
                    <AuthCheck>
                        <Home/>
                    </AuthCheck>
                } />
                <Route path="auth" element={<Auth/>}>
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>

                {/* not found routes  */}
                <Route path="*" element={<Error/> } />
            </Routes>

            {/* footer component  */}
            <Footer />
        </BrowserRouter>
    );
};

export default MainLayout;