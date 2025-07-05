import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

const Delivery = () => {
    return (
        <div className="lg:container bg-white mx-auto shadow-md p-4 sm:p-6 lg:p-7 rounded-2xl mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
                <div className="delivery_wrapper p-4 lg:p-0">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <p><Percent size='2.5rem' className="sm:w-12 sm:h-12 lg:w-12 lg:h-12 text-[#272343]" /></p>
                        <div>
                            <h4 className="text-sm sm:text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2.5">Discount</h4>
                            <p className="text-xs sm:text-sm text-[#9a9caa] font-inter font-normal">every week new sales</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper p-4 lg:p-0">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <p><Truck size='2.5rem' className="sm:w-12 sm:h-12 lg:w-12 lg:h-12 text-[#272343]" /></p>
                        <div>
                            <h4 className="text-sm sm:text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2.5">Free Delivery</h4>
                            <p className="text-xs sm:text-sm text-[#9a9caa] font-inter font-normal">100% Free for all orders</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper p-4 lg:p-0">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <p><Clock3 size='2.5rem' className="sm:w-12 sm:h-12 lg:w-12 lg:h-12 text-[#272343]" /></p>
                        <div>
                            <h4 className="text-sm sm:text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2.5">Great Support 24/7</h4>
                            <p className="text-xs sm:text-sm text-[#9a9caa] font-inter font-normal">We care your experiences</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper p-4 lg:p-0">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <p><ShieldCheck size='2.5rem' className="sm:w-12 sm:h-12 lg:w-12 lg:h-12 text-[#272343]" /></p>
                        <div>
                            <h4 className="text-sm sm:text-base text-[#272343] capitalize font-inter font-medium mb-1 sm:mb-2.5">Secure Payment</h4>
                            <p className="text-xs sm:text-sm text-[#9a9caa] font-inter font-normal">100% Secure Payment Method</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;