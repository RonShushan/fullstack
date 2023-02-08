import React, { Component } from 'react';
import { connect } from 'react-redux';


class Numbers extends Component {
    render() { 
        return ( 
            <div className='mt-5 numbersButtons'>
                <button type='button' className='btn btn-primary' onClick={()=>this.props.SaveNumber(1)}>+</button>
                <span className='p-3'>{this.props.num}</span>
                <button type='button' className='btn btn-primary' onClick={()=>this.props.SaveNumber(-1)}>-</button>
                <button type='button' className='btn btn-primary ml-2' onClick={()=>this.props.SaveNumber(0)}>clear</button>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        num: state.num,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SaveNumber(Action){
            dispatch({
                type:"SaveNumber",
                payload:Action //-1,0,1
            })
        }

        // ChangeColorInReducer(colorValue){
        //     dispatch({
        //         type:"ChangeColor",
        //         payload:colorValue
        //     })
        // }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Numbers);
