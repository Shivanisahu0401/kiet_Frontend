import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = (props) => {
    return(
        <div> 
            <Navbar page="home"/>
            <div className="homepage-main-container">
            "Turn your imagination into reality with our powerful image generator, where creativity meets technology!"
            </div>
        </div>
    )
}

export default HomePage;