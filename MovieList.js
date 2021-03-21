import React from 'react';
import MovieList from './MovieList';

export default class MovieList extends React.Component {
    constructor() {
        super();
        this.state = {
            showCounter: true
        };
    } 

    render() {
        return (
            <div>
                {this.state.showCounter ? <MovieList /> : null}
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                showCounter: false
            });
        }, 11000);
    }
}