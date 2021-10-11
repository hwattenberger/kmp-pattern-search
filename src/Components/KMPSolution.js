import React, {useState, useEffect} from "react";
import { useSelector } from 'react-redux'

const KMPSolution = () => {
    const string = useSelector(state => state.string);
    const substring = useSelector(state => state.substring.substringValue);
    const lppArr = useSelector(state => state.substring.lpp);

    const [kmpArr, setKmpArr] = useState([]);
    const [numberSubs, setNumberSubs] = useState(0);

    useEffect(() => {
        if (lppArr.length>0) calculateAnswer();
    }, [string, lppArr])


    function calculateAnswer() {
        let currSub = -1;
        let currStr = 0;
        const tempArr = new Array(string.length).fill(0);
        let tempNumSubs = 0;

        while (currStr < string.length) {
            if (string.charAt(currStr) === substring.charAt(currSub+1)) {
                currSub++;
                currStr++;
                if (currSub === substring.length-1) {
                    tempNumSubs++;
                    for (let i = 0; i<substring.length; i++) {  //For visualizing
                        tempArr[currStr-i-1] = 1
                    }
                }
            }
            else if (currSub > -1)  {
                currSub = lppArr[currSub]
            }
            else currStr++
        }
        setKmpArr(tempArr);
        setNumberSubs(tempNumSubs);
    }

    function kmtClassName(ix) {
        const alwaysInclude = "w-6 px-2 m-1";

        if(kmpArr[ix] === 1) return `${alwaysInclude} bg-purple-200`;
        return `${alwaysInclude} bg-blue-200`;
    }

    return (
        <>
        <h2 className="font-bold mt-2">KMT Solution:</h2>
        <div className="flex mt-2">
            {[...string].map((kmpValue, ix) => (
                <div key={ix} className={kmtClassName(ix)}>{kmpValue}</div>
            ))}
        </div>
        <p className="mt-2">Number of substrings in string: <span className="font-bold">{numberSubs}</span></p>
        </>
    )
}

export default KMPSolution;