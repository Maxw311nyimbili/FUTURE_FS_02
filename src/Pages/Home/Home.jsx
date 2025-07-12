import { useState } from "react"; 
import ClientAndRecentProducts from "../../Components/last/last";
import App1 from "../../Components/demo/demo";
import App from './../../Components/App/App';


const Home = ({
    user,
    addToCart,
    addToWishlist,
    cartItems,
    wishlistItems,
    updateCartQuantity,
    removeFromCart,
    removeFromWishlist,
    searchQuery,
    orders,
}) => {
    return (
        <div>

            {/* Combined Banner, Delivery & Brand Components */}
            <div className="w-full">
                <App />
            </div>

            <div className="w-full">
                <App1
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
            </div>

            <div className="w-full">
                <ClientAndRecentProducts/>
            </div>

        </div>
    );
};

export default Home;