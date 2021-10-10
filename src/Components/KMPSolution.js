import React, {useState, useEffect} from "react";

const KMPSolution = ({string, lppArr, substring}) => {
    const [kmpArr, setKmpArr] = useState([]);
    const [numberSubs, setNumberSubs] = useState(0);

    useEffect(() => {
        if (lppArr.length>0) calculateAnswer();
    }, [string, lppArr])


    function calculateAnswer() {
        let currSub = 0;
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
            else if (currSub > 0)  {
                currSub = lppArr[currSub]
            }
            else currStr++
        }
        setKmpArr(tempArr);
        setNumberSubs(tempNumSubs);
    }

    function kmtClassName(ix) {
        const alwaysInclude = "w-3 px-3 m-1";

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
        <p className="mt-2">Number of substrings in main: <span className="font-bold">{numberSubs}</span></p>
        </>
    )
}

export default KMPSolution;