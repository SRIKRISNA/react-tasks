import './webpage.css';

function WebHeader(){
    return(
        <>  
            <div className="header">
                <div className="Logo"><h1>ARCH BURG<sup>1/2</sup></h1></div>
                <div className="contact"><p>email@email.com</p> <p>+110 888 999</p></div>
                <div className="menu">
                    <nav id="menu">
                        <a href="#">Projects</a>
                        <a href="#">About</a>
                        <a href="#">Contacts</a>
                    </nav>
                </div>
            </div>
            
        </>
    )
}
export default WebHeader;