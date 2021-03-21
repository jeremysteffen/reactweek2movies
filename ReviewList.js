import React from 'react';
import ReviewList from './ReviewList';

export default class ReviewList extends React.Component {
    constructor() {
        super();
        this.state = {
            showCounter: true
        };
    } 

    render() {
        return (
            <div>
                {this.state.showCounter ? <ReviewList /> : null}
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