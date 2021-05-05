
export const addSearched = (fetchedArray) => {
    return {
        type: 'NEW_SEARCH',
        data: fetchedArray
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_SEARCH':
            return action.data
        case 'RESTARTMOVIES':
            return []
        default:
            return state
    }
}

export default reducer