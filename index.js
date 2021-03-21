import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
//import SecondCounterContainer from './second-counter-container';
//import Container from './container';
//import NewsFeed from './components/news-feed'
//import reportWebVitals from './reportWebVitals';

import MovieList from './MovieList';
import Movie from './Movie';
import Stars from './Stars';
import ReviewList from './ReviewList';
import Review from './Review';
import ReviewForm from './ReviewForm';

ReactDOM.render(
    <MovieList />,
  document.getElementById('root')
);

ReactDOM.render(
  <Movie />,
document.getElementById('root')
);

ReactDOM.render(
  <Stars />,
document.getElementById('root')
);

ReactDOM.render(
  <ReviewList />,
document.getElementById('root')
);

ReactDOM.render(
  <Review />,
document.getElementById('root')
);

ReactDOM.render(
  <ReviewForm />,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
