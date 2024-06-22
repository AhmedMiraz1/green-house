import AboutBuilding from "../../components/AboutBuilding";
import Coupons from "../../components/Coupons";
import Map from "../../components/Map";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutBuilding/>

            <Coupons/>
            <Map/>
            
        </div>
    );
};

export default Home;