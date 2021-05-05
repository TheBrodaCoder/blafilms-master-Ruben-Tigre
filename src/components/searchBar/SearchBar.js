import React, {useState} from 'react'
import './SearchBar.css'
import { useDispatch } from 'react-redux'
import { addSearched } from '../../reducers/movieReducer'
import movieService from '../../service/movieService'
import { addUrl } from '../../reducers/searchReducer'

const SearchBar = (props) => {
    const [searching, setSearching] = useState('')
    const dispatch = useDispatch()

    const handleChange = (evt) => {
        setSearching(evt.target.value)
    }

    const HandleClick = async () => {
        dispatch({type: 'RESTARTMOVIES'})
        dispatch({type: 'RESTARTURL'})
        const searched = await movieService.handleSearch(searching, 1)
        const searchedAsAction = addSearched(searched.Search || [])
        console.log(searchedAsAction)
        dispatch(searchedAsAction)
        const urlAsAction = addUrl(searching) 
        dispatch(urlAsAction)

    }

    return (
        <div className="search">
            <input type="text" placeholder="Search..." value={searching} onChange={handleChange}/>
            <button onClick={HandleClick}>Enviar</button>
        </div>
    )
}

export default SearchBar
