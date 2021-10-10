import React from "react";

const InputValues = ({substring, setSubstring, string, setString}) => {

    function handleSubChange(e) {
        setSubstring(e.target.value);
    }

    function handleStrChange(e) {
        setString(e.target.value);
    }

    return (
        <div className="flex flex-row">
            <label>
                Substring:
                <input type="text" name="substring" value={substring} onChange={handleSubChange} className="ml-1 mr-1 border border-gray-300 focus:border-gray-700 rounded"></input>
            </label>
            <label>
                String:
                <input type="text" name="string" value={string} onChange={handleStrChange} className="ml-1 mr-1 border border-gray-300 focus:border-gray-700 rounded"></input>
            </label>
            {/* <button className="ml-2 border-2 border-purple-500 hover:border-gray-500 px-2">Go</button> */}
        </div>
    )
}

export default InputValues;