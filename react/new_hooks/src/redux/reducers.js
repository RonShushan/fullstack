
const initialState = {
  users:[],
  favorites:[]
};


function rootReducer(state = initialState, action) {
    let favorites;

    switch (action.type) {
        case 'FillUsers':
            console.log('Users', action);
            state = { ...state, users: action.payload }
            break;

        case 'AddtoFavorite':
            favorites = [...state.favorites];
            favorites.push(action.payload)
            console.log("Add : " , action.payload , favorites)
            state = { ...state, favorites}
            break;

        case 'DeleteFavorite':
            favorites = [...state.favorites];
            let index = favorites.findIndex(user=>user.id == action.payload)
            if(index != -1)
             favorites.splice(index,1)

            state = { ...state, favorites}
            break;
    }

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
