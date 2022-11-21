
import img1 from "./home2.jpg";
function WebSidebar() {
    return (
        <>
            <div className="sidebar-container">
                <div style={{textAlign:"center", margin:"0px 0px 150px 0px"}}>
                    <p>Antony M</p>
                    <p>Sunny G</p>
                </div>
                <div id="img-sec">
                    <img src={img1} height="200px"></img>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorum adipisci minima nostrum explicabo culpa aperiam dolore nulla quasi dicta?</p>
                </div>
            </div>
        </>
    )
}
export default WebSidebar;