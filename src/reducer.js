import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const InitState = {
    mylist: [],
    recommendations: [],
    isLoading: false,
    hasError: false
};

export const removeMyList = { type: "REMOVE", id: "" };
export const addMyList = { type: "ADD", id: "" }

export function fetchMovies(url, page) {
    return (dispatch) => {
        dispatch(loadPage());
        axios.get(url, page)
            .then((response) => {
                dispatch(saveMovies(response.data));
            })
            .catch((err) => {
                dispatch(errorPage(err));
            })
    }
}

function loadPage() {
    return {
        type: "LOAD_PAGE",
    }
}

function errorPage(err){
    return {
        type: "ERROR_PAGE"
    }
}

function saveMovies(data){
    return {
        type: "SAVE_MOVIES",
        data: data
    }
}

const reducer = (state = InitState, action) => {
    console.log("action: " + action.type);
    console.log(action);
    switch (action.type) {
        case "LOAD_PAGE":{
            return {
                ...state,
                isLoading: true
            }
        }
        case "ERROR_PAGE":{
            return{
                ...state,
                isLoading: false,
                hasError: true
            }
        }
        case "SAVE_MOVIES":{
            let newList = action.data.movies.mylist;
            console.log(newList);
            let newRecommendations = action.data.movies.recommendations;
            console.log(newRecommendations);
            return{
                ...state,
                isLoading: false,
                errorPage: false,
                mylist: newList,
                recommendations: newRecommendations
            }
        }
        case "REMOVE": {
            let newList = state.mylist.filter(x => x.id !== action.id);
            let addRecommendationsItem = state.mylist.filter(x => x.id === action.id);
            let newRecommendations = [...state.recommendations, ...addRecommendationsItem];
            console.log(newList);
            return {
                ...state,
                mylist: newList,
                recommendations: newRecommendations
            }
        };
        case "ADD": {
            let addItem = state.recommendations.filter(x => x.id === action.id);
            let newList = [...state.mylist, ...addItem];
            let newRecommendations = state.recommendations.filter(x => x.id !== action.id);
            return {
                ...state,
                recommendations: newRecommendations,
                mylist: newList
            }
        };

        default:
            return state;
    }
};
const store = createStore(reducer, InitState, applyMiddleware(thunk));
export default store;
