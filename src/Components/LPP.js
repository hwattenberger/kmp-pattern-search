import React, {useState, useEffect} from "react";

const LPP = ({substring, lppArr, setLppArr}) => {

    useEffect(() => {
        setLPP();
    }, [substring])

    function setLPP() {
        const newLPPTableArr = [-1, 0];
        let pos = 2;
        let strt = 0;

        while (pos <= substring.length) {
            if(substring.charAt(pos-1) === substring.charAt(strt)) {
                newLPPTableArr[pos] = strt+1;
                pos++;
                strt++;
            }
            else if (strt > 0) {
                strt = newLPPTableArr[strt];
            }
            else {
                newLPPTableArr[pos] = 0;
                pos++;
            }
        }
        setLppArr(newLPPTableArr);
    }

    return (
        <>
        <h2 className="font-bold mt-2">Longest Possible Prefix Table:</h2>
        <div className="flex mt-2">
            <div className="w-3 px-3 m-1 bg-purple-200"> </div>
            {[...substring].map((subValue, ix) => (
                <div key={ix} className="w-3 px-3 m-1 bg-purple-200">{subValue}</div>
            ))}
        </div>
        <div className="flex mt-2">
            {lppArr.map((subValue, ix) => (
                <div key={ix} className="w-3 px-3 m-1 bg-purple-200">{subValue}</div>
            ))}
        </div>
        </>
    )
}

export default LPP;