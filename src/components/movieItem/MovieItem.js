import React from 'react'
import placeholderImg from '../../placeholder.png'

const MovieItem = (props) => {
    return (
        <div className="search-item">
            <img
                src={props.Poster === 'N/A' ? placeholderImg : props.Poster}
                alt="poster"
            />
            <div className="search-item-data">
              <div className="title">{props.Title}</div>
              <div className="meta">{`${props.Type} | ${props.Year}`}</div>
            </div>
        </div>
    )
}

export default MovieItem
