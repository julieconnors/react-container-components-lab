import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            searchTerm: "",
            reviews: []
        }
    }

    onChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchQuery(this.state.query)
    }

    fetchQuery = (query) => {
        fetch(URL + `&query=${query}`)
        .then(res => res.json())
        .then(json => this.setState({
            reviews: json.results
        }))
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} type="text" placeholder="Search Movies"/>
                    <input type="submit" />
                </form>
                <div className="searchable-movie-reviews">{this.state.reviews.map(review => <MovieReviews headline={review.headline} summary={review.summary_short}/>)}</div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;