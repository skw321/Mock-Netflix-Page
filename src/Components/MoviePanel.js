import React, { Component } from 'react';
import './MoviePanel.css';
import { removeMyList, addMyList } from '../reducer';
import { connect } from "react-redux";

class MoviePanel extends Component {
  constructor(props) {
    super(props);

  }

  handleRemove = (e) => {
    console.log(e.target.id);
    this.props.removeMyList(parseInt(e.target.id));
  }

  handleAdd = (e) => {
    this.props.addMyList(parseInt(e.target.id));
    console.log("add");
  }

  render() {

    let onClick = { mylist: this.handleRemove, recommendations: this.handleAdd };
    console.log(this.props.list);
    console.log(this.props.title);
    return (
     

      <div className="inner">
         <h2 className="title">{this.props.title}</h2>
        <ul className="container">
       
          {this.props.list.map(ele => {
            return (
              <li className="list">
                <span className="overlay"></span>
                <img src={ele.img} className="image" />
                <span >{ele.title}</span>
                <button className="button"
                  id={ele.id}
                  onClick={onClick[this.props.title]}> {this.props.button} </button>
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
  };
};


const mapDispatchToProps = dispatch => {
  return {
    removeMyList: (id) => { removeMyList.id = id; dispatch(removeMyList); },
    addMyList: (id) => { addMyList.id = id; dispatch(addMyList); },
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePanel);


