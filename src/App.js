import React from "react"
import "./App.css"
import { useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index"
const App = () => {
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
    return (
        <>
            <div className="container">
                <h1>Increment/Decrement counter</h1>
                <h4>using React and Redux</h4>

                <div className="quantity">
                    <a title="Decrement" onClick={()=>dispatch(decNumber())} className="quantity_minus"><span> - </span></a>
                    <input type="text" name="quantity" className="quantity_input" value={myState} />
                    <a title="Increment" onClick={()=>dispatch(incNumber())} className="quantity_plus"><span> + </span></a>
                </div>
            </div>
        </>
    )
}

export default App;
