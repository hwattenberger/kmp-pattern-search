const defaultState = {
    substringValue: "ababd",
    lpp: setLPP("ababd")
}

const substringReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_SUBSTRING':
            return action.data
        default:
            return state
    }
}

export const setSubstring = (substringValue) => {

    const data = {
        substringValue: substringValue,
        lpp: setLPP(substringValue)
    }

    return {
        type: 'SET_SUBSTRING',
        data: data
    }
}

function setLPP(substringValue) {
    const newLPPTableArr = [-1, 0];
    let pos = 2;
    let strt = 0;

    while (pos <= substringValue.length) {
        if(substringValue.charAt(pos-1) === substringValue.charAt(strt)) {
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
    return newLPPTableArr;
}

export default substringReducer;