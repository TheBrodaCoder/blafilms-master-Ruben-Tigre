import React from 'react'
import { ReactComponent as ChevronLeft } from '../../chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../chevron-right.svg'
import MovieItem from '../movieItem/MovieItem'

import { useSelector, useDispatch } from 'react-redux'
import { addUrl } from '../../reducers/searchReducer'
import { addSearched } from '../../reducers/movieReducer'

import movieService from '../../service/movieService'

const MovieList = (props) => {

    const dispatch = useDispatch()
    const searchResult = useSelector(state => state.movies) || []
    const urlObject = useSelector(state => state.search)

    const managePage = (page, change) => { 
        let result = page + change
        return result < 0 ? 0 : result
    }

    const handlePage = async ( num ) => {
        dispatch({type: 'RESTARTMOVIES'})
        let page = managePage(urlObject.page, num)
        const response = await movieService.handleSearch(urlObject.url, page)
        const searchedAsAction = addSearched(response.Search)
        dispatch(searchedAsAction)
        const urlAsAction = addUrl(urlObject.url, page)
        dispatch(urlAsAction)
    }

    return (
        <>
        {searchResult.length === 0 ? (
            <div className="search-initial">
                No results yet
            </div>
            
          ) : (
            <div className="search-results">
              <div className="chevron">
                <ChevronLeft onClick={() => handlePage(-1)}/>
              </div>
              <div className="search-results-list">
                {searchResult.map(result => (
                  <MovieItem key={result.imdbID} imdbID={result.imdbID} Poster={result.Poster} Title={result.Title} Type={result.Type} Year={result.Year}/>
                ))}
              </div>
              <div className="chevron">
                <ChevronRight onClick={() => handlePage(1)}/>
              </div>
            </div>
        )}
        </>
    )
}
export default MovieList
