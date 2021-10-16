import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'


const LPPStepByStep = () => {
    const substring = useSelector(state => state.substring.substringValue);
    const [stepLppArr, setStepLppArr] = useState([-1, 0]);
    const [pos, setPos] = useState(2);
    const [start, setStart] = useState(0);

    useEffect(() => {
        setStepLppArr([-1, 0]);
        setPos(2);
        setStart(0);
    }, [substring])

    function nextStep() {
        const newLPPTableArr = [...stepLppArr];
        let newPos = pos;
        let newStart = start;

        if(substring.charAt(newPos-1) === substring.charAt(newStart)) {
            newLPPTableArr[newPos] = newStart+1;
            newPos++;
            newStart++;
        }
        else if (newStart > 0) {
            newStart = newLPPTableArr[newStart];
        }
        else {
            newLPPTableArr[newPos] = 0;
            newPos++;
        }

        setStepLppArr(newLPPTableArr);
        setPos(newPos);
        setStart(newStart);
    }

    function doneLoop() {
        if (pos <= substring.length) return false;
        return true;
    }

    function classNameArr(ix) {
        let className = "w-6 px-2 m-1 bg-purple-200"
        if (ix === start) className = className + " border-t-2 border-red-500"
        if (ix === pos-1) className = className + " border-b-2 border-yellow-500"
        return className
    }

    return (
        <div className="ml-4 mt-4 bg-gray-100 w-min p-1">
            <h2 className="font-bold mt-2">Details:</h2>
            pos: <span className="border-b-2 border-yellow-500">{pos}</span>  start: <span className="border-b-2 border-red-500">{start}</span>
            <div className="flex mt-2">
                <div className="w-6 px-2 m-1 bg-purple-200"> </div>
                {[...substring].map((subValue, ix) => (
                    <div key={ix} className={classNameArr(ix)}>{subValue}</div>
                ))}
            </div>
            <div className="flex mt-2">
                {stepLppArr.map((subValue, ix) => (
                    <div key={ix} className="w-6 px-2 m-1 bg-purple-200">{subValue}</div>
                ))}
            </div>
            {doneLoop() ? "Complete" : <button className="mt-2 border-2 border-purple-500 hover:border-gray-500 px-2" onClick={nextStep}>Next</button>}
        </div>
    )
}

export default LPPStepByStep;