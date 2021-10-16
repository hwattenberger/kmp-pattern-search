import React, {useState} from "react";
import { useSelector } from 'react-redux'
import LPPStepByStep from './LPPStepByStep'

const LPP = () => {
    const substring = useSelector(state => state.substring.substringValue);
    const lppArr = useSelector(state => state.substring.lpp);
    const [showDetail, setShowDetail] = useState(false);

    const btnShowDetailsName = () => {
        if (!showDetail) return "Show Details"
        return "Hide Details"
    }

    return (
        <>
        <h2 className="font-bold mt-2">Longest Possible Prefix Table:</h2>
        <button className="mt-2 border-2 border-purple-500 hover:border-gray-500 px-2" onClick={() => setShowDetail(!showDetail)}>{btnShowDetailsName()}</button>
        {showDetail && <LPPStepByStep />}
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