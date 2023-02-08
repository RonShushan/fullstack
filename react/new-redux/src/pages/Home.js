import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';


class Home extends Component {

    // props = {
    //     color:"RED",
    //     changeColorFN:changeColorFN()
    // }
    num = 10;

    render() { 
        console.log(" PROPS :" , this.props)
        return ( 
            <div>
                <div>Home Page</div>
                <div className='mt-2'>{this.props.color}</div>
                <div className='mt-2'>{this.props.num}</div>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-1 box red' onClick={()=>this.props.ChangeColorInReducer('RED')}></div>
                    <div className='col-1 box blue' onClick={()=>this.props.ChangeColorInReducer('BLUE')} ></div>
                    <div className='col-1 box green' onClick={()=>this.props.ChangeColorInReducer('GREEN')}></div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    console.log("mapStateToProps")
    return {
        color: state.color,
        num:state.number
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps")
    return {

        ChangeColorInReducer(colorValue){
            dispatch({
                type:"ChangeColor",
                payload:colorValue
            })
        }

          //this.props = {
          //  color:"red";
          //ChangeColorInReducer:ChangeColorInReducer()
       // }

        // ChangeHomePageTitleRedux(value) {
        //     console.log("4: MapDispatchToPropsChangeHomePageTitle : ")
        //     dispatch({
        //         type: 'changeHomePageTitle',
        //         payload: value
        //     })
        // },
    }
}

// הצג מספר אשר מגיע מה REDUCER
// בנה 3 כפתורים
// הוסף , הורד , נקה
// 
export default connect(mapStateToProps, mapDispatchToProps)(Home);