import { useState } from "react";
import './temp.css';

function TempController(){
    const [temp, setTemp] = useState(25);
    const [color, setColor] = useState("neutral");

    const handleIncrease = ()=> {
        var curTemp = temp + 1;
        setTemp(curTemp);
        if(curTemp > 25) setColor("red");
        else if(curTemp === 25) setColor("neutral")
        else setColor("green")
    }
    const handleDecrease = ()=> {
        var curTemp = temp - 1;
        setTemp(curTemp);
        if(curTemp < 25) setColor("green");
        else if(curTemp === 25) setColor("neutral")
        else setColor("red")
    }

    return(
        <div className="temp-container">
            <div className={`tempView ${color}`}>
                {temp}°C
            </div>
            <div className="temp-btn">
                <button onClick={handleIncrease} id="plus">+</button>
                <button onClick={handleDecrease} id="minus">-</button>
            </div>
        </div>
    )
}
export default TempController;