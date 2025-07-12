import { X, LogIn, Heart, ShoppingCart } from "lucide-react";

const LoginPromptModal = ({ isOpen, onClose, action, onLoginClick }) => {
    if (!isOpen) return null;

    const getModalContent = () => {
        switch (action) {
            case 'wishlist':
                return {
                    icon: <Heart className="w-12 h-12 text-red-500" />,
                    title: 'Add to Wishlist',
                    message: 'Please login to save items to your wishlist and access them from any device.'
                };
            case 'cart':
                return {
                    icon: <ShoppingCart className="w-12 h-12 text-[#029fae]" />,
                    title: 'Add to Cart',
                    message: 'Please login to add items to your cart and proceed with checkout.'
                };
            default:
                return {
                    icon: <LogIn className="w-12 h-12 text-gray-500" />,
                    title: 'Login Required',
                    message: 'Please login to continue with this action.'
                };
        }
    };

    const { icon, title, message } = getModalContent();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            ></div>
            
            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                    <X className="w-4 h-4 text-gray-600" />
                </button>

                {/* Content */}
                <div className="p-8 text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        {icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-[#272343] mb-4">
                        {title}
                    </h3>

                    {/* Message */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {message}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                            onClick={() => {
                                onClose();
                                onLoginClick();
                            }}
                            className="px-6 py-3 bg-gradient-to-r from-[#029fae] to-[#027a85] hover:from-[#027a85] hover:to-[#025d66] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <LogIn className="w-5 h-5" />
                            Login Now
                        </button>
                        
                        <button
                            onClick={onClose}
                            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                        >
                            Maybe Later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { LoginPromptModal };
