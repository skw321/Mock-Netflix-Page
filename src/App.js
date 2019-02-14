import React, { Component } from 'react';
import './App.css';
import { removeMyList, addMyList } from './reducer.js';
import { connect } from "react-redux";


class App extends Component {

  constructor(props) {
    super(props);

  }

  handleRemove = (e) => {
    console.log(e.target.id);
    this.props.removeMyList(parseInt(e.target.id));
  }

  handleAdd = (e) => {
    this.props.addMyList(parseInt(e.target.id));
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">Mylist</h2>
        <ul className="container">

          {this.props.mylist.map(ele => {
            return (
              <li className="list">             
                <span className="overlay"></span>
                <img src={ele.img} className="image" />
                <span >{ele.title}</span>
                <button className="button" id={ele.id} onClick={this.handleRemove}> Remove </button>
              </li>
            )
          })}
        </ul>
        <h2 className="title">Recommendations </h2>
        <ul className="container">

          {this.props.recommendations.map(ele => {
            return (
              <li className="list">      
                <span className="overlay"></span>
                <img src={ele.img} className="image" />
                <span >{ele.title}</span>
                <button className="button" id={ele.id} onClick={this.handleAdd}> ADD </button>
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
    recommendations: state.recommendations
  };
};


const mapDispatchToProps = dispatch => {
  return {
    removeMyList: (id) => { removeMyList.id = id; dispatch(removeMyList); },
    addMyList: (id) => { addMyList.id = id; dispatch(addMyList); }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

