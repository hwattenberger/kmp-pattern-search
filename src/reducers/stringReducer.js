const stringReducer = (state = "ababcabcabababd", action) => {
    switch (action.type) {
        case 'SET_STRING':
            return action.data
        default:
            return state
    }
}

export const setString = (stringValue) => {
    return {
        type: 'SET_STRING',
        data: stringValue
    }
}

export default stringReducer;