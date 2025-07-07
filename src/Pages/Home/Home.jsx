import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import ClientAndRecentProducts from "../../Components/last/last";
import Client from "../../Components/Client/Client";
import Cards from "../../Components/Cards/Cards";
import App1 from "../../Components/demo/demo";
import App from './../../Components/App/App';
import Features from './../../Components/Features/Features';
import BerkshireHathaway from './../../Components/BerkshireHathaway/BerkshireHathaway';

const Home = () => {
    return (
        <div>



            {/* banner component  */}
           {/* <div className="w-full min-h-[500px] md:min-h-[650px] lg:min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
                <Banner></Banner>
            </div> */}
            {/* delivery component */}
            {/* <div className="delivery_component w-full min-h-[#150px]">
                <Delivery></Delivery>
            </div> */}


            {/* brand component  */}
            {/* <div className="brand flex items-center h-[171px] justify-center w-full mt-8 mb-8">
                <Brand></Brand>
            </div> */}

            {/* Combined Banner, Delivery & Brand Components */}
            <div className="w-full">
                <App />
            </div>

            <div className="w-full">
                <App1 />
            </div>

            {/* <div className="w-full">
                <BerkshireHathaway />
            </div> */}

            <div className="w-full">
                <ClientAndRecentProducts/>
            </div>

            {/* features component */}
            {/* <div className="w-full flex items-center justify-center mb-[80px]">
                <Features></Features>
            </div> */}

            {/* features component */}
            {/* <div className="w-full flex items-center justify-center mb-[80px]">
                <Categories></Categories>
            </div> */}

            {/* product component  */}
            {/* <div className="w-full flex items-center justify-center pb-[80px]">
                <Product></Product>
            </div> */}


            {/* client say component  */}
            {/* <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pb-[80px] pt-[80px]">

                <Client></Client>

            </div> */}


            {/* Recent component  */}
            {/* <div className="w-full flex items-center justify-center pb-[80px] pt-[80px]">
                <Recent></Recent>
            </div> */}

        </div>
    );
};

export default Home;