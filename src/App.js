import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import MoviePanel from './Components//MoviePanel';
import { fetchMovies } from './reducer';



class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.props.fetchMovies("http://localhost:8888/movies");
  }


  render() {


    if (this.props.isLoading === true) {
      return (
        <h2>The page is loading...</h2>
      )
    }
    if (this.props.hasError === true) {
      return (
        <h2>Sorry. Unable to reach server...</h2>
      )
    }

    let movies = [{ mylist: this.props.mylist }, { recommendations: this.props.recommendations }];
    console.log(movies);
    let button = { mylist: "REMOVE", recommendations: "ADD" };
    return (
      <div >
        <ul className="outtercontainer">
          {movies.map(list => {
            return (
              <li className="outterlist">
                <MoviePanel
                  list={Object.values(list)[0]}
                  title={Object.keys(list)[0]}
                  button={button[Object.keys(list)[0]]}
                />
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    recommendations: state.recommendations,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: (url) => { dispatch(fetchMovies(url)); }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

