import React from 'react'
import './App.css'
import SearchBar from './components/searchBar/SearchBar'
import MovieList from './components/movieList/MovieList'

function App(props) {


  return (
    <div className="App">
      <SearchBar store={props.store}/>
      <MovieList store={props.store}/>
    </div>
  )
}

export default App
