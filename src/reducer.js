const InitState = {
    mylist: [
        {
            'title': 'Futurama',
            'id': 1,
            'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        },
        {
            'title': 'The Interview',
            'id': 2,
            'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {
            'title': 'Gilmore Girls',
            'id': 3,
            'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
    ],
    recommendations: [
        {
            'title': 'Family Guy',
            'id': 4,
            'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
        },
        {
            'title': 'The Croods',
            'id': 5,
            'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
        },
        {
            'title': 'Friends',
            'id': 6,
            'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
        }
    ]
};

export const removeMyList = { type: "REMOVE", id: "" };
export const addMyList = { type: "ADD", id: "" }

// export function applyPromoCode(promo) {

//   return (dispatch) => {
//     console.log(promo);
//     //dispatch(tenPercentOFF());
//   };
// }

// function tenPercentOFF() {
//   return {
//     type: "10%OFF"
//   };
// }

const reducer = (state = InitState, action) => {
    console.log("action: " + action.type);
    console.log(action);
    switch (action.type) {
        case "REMOVE": {
            let newList = state.mylist.filter(x => x.id !== action.id);
            console.log(newList);
            return {
                ...state,
                mylist: newList
            }
        };
        case "ADD": {
            let addItem = state.recommendations.filter(x => x.id === action.id);
            let newList = [...state.mylist,...addItem];
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

export default reducer;
