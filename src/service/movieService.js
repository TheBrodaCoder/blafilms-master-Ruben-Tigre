import axios from 'axios'
const baseURL = `https://www.omdbapi.com/?apikey=a461e386&`

const handleSearch = async (strToSearch, page) => {
    let response = []

    if (!page) {
        response = await axios.get(`${baseURL}s=${strToSearch}`)
        console.log('if', response);
        if (response.data.Response === 'False' ) {
            return []
        } 
    } else {
        response = await axios.get(`${baseURL}s=${strToSearch}&page=${page}`)
        console.log('else', response);

        if (response.data.Response === 'False' ) {
            return []
        }
    }
    
    return response.data
}
const getThatMovie = async (movie_ID) => {
    const response = await axios.get(`${baseURL}i=${movie_ID}`)

    return response.data
}

// eslint-disable-next-line
export default {
    handleSearch, getThatMovie
};