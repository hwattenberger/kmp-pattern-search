import React from "react";
import { useSelector } from 'react-redux'


const LPP = () => {
    const substring = useSelector(state => state.substring.substringValue);
    const lppArr = useSelector(state => state.substring.lpp);

    return (
        <>
        <h2 className="font-bold mt-2">Longest Possible Prefix Table:</h2>
        <div className="flex mt-2">
            <div className="w-6 px-2 m-1 bg-purple-200"> </div>
            {[...substring].map((subValue, ix) => (
                <div key={ix} className="w-6 px-2 m-1 bg-purple-200">{subValue}</div>
            ))}
        </div>
        <div className="flex mt-2">
            {lppArr.map((subValue, ix) => (
                <div key={ix} className="w-6 px-2 m-1 bg-purple-200">{subValue}</div>
            ))}
        </div>
        </>
    )
}

export default LPP;