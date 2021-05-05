
export const addUrl = (url, page) => {
    return {
        type: 'NEW_URL',
        data: {
            url,
            page: page || 1
        }
    }
}

const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case 'NEW_URL':
            return action.data
        case 'RESTARTURL':
            return {url: '', page: 1}
        default:
            return state
    }
}

export default searchReducer