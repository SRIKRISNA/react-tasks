import WebHeader from "./header";
import WebSidebar from "./sidebar";
import img2 from "./home1.jpg";

function Webpage() {
    return (
        <div style={{background:"#fff", padding:"0px 20px", margin:"20px 50px"}}>
            <WebHeader />
            <div className="mainn">
                <div className="main-container">
                    <div className="upper-sec">
                        <div>
                            <h1 style={{fontSize:"65px"}}>KAGE NORE.</h1>
                        </div>
                        <div id="right-name">
                            <p>Abbdch crjn</p>
                            <p>Sunny G</p>
                        </div>
                    </div>
                    <div id="img-sec">
                        <img src={img2} height="500px"></img>
                    </div>
                </div>
                <div className="sideb">
                    <WebSidebar />
                </div>
            </div>
        </div>
    )
}
export default Webpage;