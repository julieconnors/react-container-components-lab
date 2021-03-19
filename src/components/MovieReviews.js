// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = (props) => (
        <div className="review-list">
            <div className="review">
                <h4>{props.headline}</h4>
                <p>{props.summary}</p>
            </div>
        </div>
    )

export default MovieReviews;