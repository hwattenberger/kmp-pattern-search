import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setSubstring } from "../reducers/substringReducer";
import { setString } from "../reducers/stringReducer";

const InputValues = () => {
    const dispatch = useDispatch();
    const string = useSelector(state => state.string);
    const substring = useSelector(state => state.substring.substringValue);

    function handleSubChange(e) {
        dispatch(setSubstring(e.target.value))
    }

    function handleStrChange(e) {
        dispatch(setString(e.target.value));
    }

    return (
        <div className="flex flex-row">
            <label>
                Substring:
                <input type="text" name="substring" value={substring} onChange={handleSubChange} className="p-1 ml-1 mr-4 border border-gray-300 focus:border-gray-700 rounded"></input>
            </label>
            <label>
                String:
                <input type="text" name="string" value={string} onChange={handleStrChange} className="p-1 ml-1 mr-1 border border-gray-300 focus:border-gray-700 rounded"></input>
            </label>
        </div>
    )
}

export default InputValues;