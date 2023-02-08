
const initialState = {
    color: "RED",
    num: 15,
    users: [],
    favorites: [],
};


//{name:"",mail:""}
// initialState = {color:"green"}
function rootReducer(state = initialState, action) {
    //type payload
    switch (action.type) {
        case 'ChangeColor':
            console.log('ColorChange', action);
            state = { ...state, color: action.payload }
            break;

        case 'ChangeNumber':
                state = { ...state, num: action.payload }
        break;

        case 'FillUsers' : 
            state = { ...state, users: action.payload }
            break;

        case 'SaveNumber':
            let num = state.num;

            if (action.payload == 1) {
                num += 1;
                state = { ...state, color: "BLUE", num: num }
            }
            if (action.payload == 0) {
                num = 0
                state = { ...state, color: "RED", num: num }
            }
            if (action.payload == -1) {
                num -= 1
                state = { ...state, color: "GREEN", num: num }
            }
            break;

        case "AddUser":
            let users = [...state.users]
            users.push(action.payload)
            state = { ...state, users }
            break;

        case "DeleteUser":
            let users1 = [...state.users]
            users1.splice(action.payload, 1)
            state = { ...state, users: users1 }
            break;

        case "AddToFavorites":
            let favorites = [...state.favorites]
            favorites.push(action.payload)
            state = { ...state, favorites }
    }

    //add favorite button to single user
    //add favorite table under users table


    //let day = "";

    // if(new Date().getDay() == 0){
    //     day = "Sunday"
    // }

    // if(new Date().getDay() == 1){
    //     day = "Monday"
    // }

    // switch (new Date().getDay()) {
    //     case 0:
    //       day = "Sunday";
    //       break;
    //     case 1:
    //       day = "Monday";
    //       break;
    //     case 2:
    //        day = "Tuesday";
    //       break;
    //     case 3:
    //       day = "Wednesday";
    //       break;
    //     case 4:
    //       day = "Thursday";
    //       break;
    //     case 5:
    //       day = "Friday";
    //       break;
    //     case 6:
    //       day = "Saturday";
    //   }



    return state;
}

export default rootReducer;









































// import moment from "moment";
// import Utils from '../api/Utils';


// let initState = {
//   scanModalOpen: false,
//   scanned: false,
//   timeStatus: 24,
//   language: "heb",
//   camera: "back",
//   currentDate: "",
//   currentHour: moment().format('hh:mm'),
//   stateButtonText: "WORKER ID",
//   fontLoaded: false,
//   position: "on",
//   version: "0.04",
//   contactText: "",
// }


// var weekDayName = moment().format('dddd');
// var MonthName = moment().format('MMMM');
// var MonthNum = moment().format('MM');
// var DayNum = moment().format('DD');
// var HebFormat = moment().format('DD/MM/YYYY')
// var CurrentYear = moment().format('YYYY');
// initState = { ...initState, currentDate: Utils.TranslateDate(initState.language) + ", " + MonthName + " " + DayNum + ", " + CurrentYear }


// export default reducers = (state = initState, action) => {
//   switch (action.type) {
//     case 'changeModalState':
//       state = { ...state, scanModalOpen: action.payload }
//       break;

//     case 'changeScanedState':
//       state = { ...state, scanned: action.payload }
//       break;

//     case 'ChangeStateButtonText':
//       state = { ...state, stateButtonText: action.payload }
//       break;

//     case 'changeFontLoaded':
//       state = { ...state, fontLoaded: action.payload }
//       break;

//     case 'changePosition':
//       state = { ...state, position: action.payload }
//       break;

//     case 'changeTimeState':
//       state = { ...state, timeStatus: action.payload }
//       let cTime = action.payload == 12 ? moment().format('hh:mm') : moment().format('HH:mm')
//       state = { ...state, currentHour: cTime };
//       break;

//     case 'changeCurrentTime':
//       state = { ...state, currentHour: action.payload }
//       break;

//   }

//   return state;
// }
