import React from 'react';
import Stars from './Star';

export default class Stars extends React.Component {
    constructor() {
        super();
        this.state = {
            showCounter: true
        };
    } 

    render() {
        return (
            <div>
                {this.state.showCounter ? <Stars /> : null}
            </div>
        );
    }

    componentStars() {
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