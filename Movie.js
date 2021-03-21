//Movie – a component that represents movie data (i.e. image, synopsis, rating, etc…)

import React from 'react';
import Movie from './Movie';

export default class Movie extends React.Component {
    constructor() {
        super();
        this.state = {
            showCounter: true
        };
    } 

    render() {
        return (
            <div>
                {this.state.showCounter ? <Movie /> : null}
            </div>
        );
    }

    componentImage() {
        setInterval(() => {
            this.setState({
                showCounter: false
            });
        }, 11000);
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                showCounter: false
            });
        }, 11000);
    }
}