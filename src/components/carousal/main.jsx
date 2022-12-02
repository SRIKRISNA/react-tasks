import banner1 from "./banner1.jpg";
import banner2 from "./banner2.jpg";
import banner3 from "./banner3.jpg";
import banner4 from "./banner4.jpg";

import './carousal.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Carousal() {
    return (
        <>
            {/* <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}> */}
            <Carousel>
                <div>
                    <img src={banner1}></img>
                    <h2 className="banner" style={{ backgroundColor:"#000"}}>Hong Kong</h2>
                </div>
                <div>
                    <img src={banner2}></img>
                    <h2 className="banner clearfix">Japan</h2>
                </div>
                <div>
                    <img src={banner3}></img>
                    <h2 className="banner clearfix">Italy</h2>
                </div>
                <div>
                    <img src={banner4}></img>
                    <h2 className="banner clearfix">France</h2>
                </div>
            </Carousel>
        </>
    )
}
export default Carousal;