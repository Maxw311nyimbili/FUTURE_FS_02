
import { X, Award, Users, Heart, Truck, ShieldCheck, Clock } from "lucide-react";

const VelourModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>
            
            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
                >
                    <X className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
                </button>

                {/* Header Section */}
                <div className="bg-gradient-to-r from-[#029fae] to-[#027a85] text-white p-8 rounded-t-2xl">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-2">Velour</h2>
                        <p className="text-xl text-white/90">Crafting Comfort Since 1985</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                    {/* About Section with Hero Image */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-[#272343] mb-6 flex items-center gap-2">
                            <Award className="w-6 h-6 text-[#029fae]" />
                            About Velour
                        </h3>
                        
                        {/* Hero Image Section */}
                        <div className="mb-8">
                            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                                    alt="Velour Furniture Showroom"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h4 className="text-xl font-bold mb-1">Our Flagship Showroom</h4>
                                    <p className="text-white/90">Experience luxury furniture in our modern gallery</p>
                                </div>
                            </div>
                        </div>

                        {/* Text Content with Side Images */}
                        <div className="grid lg:grid-cols-3 gap-8 items-start">
                            {/* Main Text Content */}
                            <div className="lg:col-span-2">
                                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                    For nearly four decades, Velour has been at the forefront of luxury furniture design, 
                                    creating pieces that seamlessly blend comfort, style, and sustainability. Founded in 1985 
                                    by master craftsman Henri Velour, our company has grown from a small workshop in the heart 
                                    of Europe to a globally recognized brand synonymous with quality and innovation.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Every piece in our collection tells a story of meticulous attention to detail, 
                                    using only the finest materials sourced from sustainable suppliers worldwide. 
                                    Our commitment to environmental responsibility drives us to create furniture that not 
                                    only enhances your living space but also contributes to a better future.
                                </p>
                            </div>
                            
                            {/* Side Image */}
                            <div className="lg:col-span-1">
                                <div className="relative">
                                    <img 
                                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        alt="Velour Craftsmanship"
                                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                                    <div className="absolute bottom-3 left-3 text-white">
                                        <p className="text-sm font-medium">Handcrafted Excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid with Background Images */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <img 
                                    src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Expert Craftsmanship"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10">
                                <Users className="w-10 h-10 text-[#029fae] mb-3" />
                                <h4 className="text-lg font-semibold text-[#272343] mb-2">Expert Craftsmanship</h4>
                                <p className="text-gray-600 text-sm">
                                    Over 200 skilled artisans dedicated to creating exceptional furniture pieces
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <img 
                                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Sustainable Materials"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10">
                                <Heart className="w-10 h-10 text-[#029fae] mb-3" />
                                <h4 className="text-lg font-semibold text-[#272343] mb-2">Sustainable Materials</h4>
                                <p className="text-gray-600 text-sm">
                                    100% eco-friendly materials sourced from certified sustainable suppliers
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <img 
                                    src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Award Winning Design"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10">
                                <Award className="w-10 h-10 text-[#029fae] mb-3" />
                                <h4 className="text-lg font-semibold text-[#272343] mb-2">Award Winning</h4>
                                <p className="text-gray-600 text-sm">
                                    Recipient of 15+ international design awards for innovation and quality
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-[#272343] mb-6 text-center">Our Latest Collection</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img 
                                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                    alt="Modern Living Room"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img 
                                    src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                    alt="Elegant Dining"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img 
                                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                    alt="Luxury Bedroom"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img 
                                    src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                                    alt="Office Workspace"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl mb-8">
                        <h3 className="text-xl font-bold text-[#272343] mb-4">Our Promise to You</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-3">
                                <Truck className="w-8 h-8 text-[#029fae]" />
                                <div>
                                    <h4 className="font-semibold text-[#272343]">Free Delivery</h4>
                                    <p className="text-sm text-gray-600">Worldwide shipping</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-8 h-8 text-[#029fae]" />
                                <div>
                                    <h4 className="font-semibold text-[#272343]">Lifetime Warranty</h4>
                                    <p className="text-sm text-gray-600">Quality guarantee</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <Clock className="w-8 h-8 text-[#029fae]" />
                                <div>
                                    <h4 className="font-semibold text-[#272343]">24/7 Support</h4>
                                    <p className="text-sm text-gray-600">Always here to help</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <button 
                            onClick={onClose}
                            className="bg-gradient-to-r from-[#029fae] to-[#027a85] hover:from-[#027a85] hover:to-[#025d66] text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Explore Our Collection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { VelourModal };