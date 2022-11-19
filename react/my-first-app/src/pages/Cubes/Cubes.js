import React, { Component } from 'react'
import './Cubes.css'

class Cubes extends Component {

    state = {
        red: 0,
        green: 0,
        blue: 0
    }

    constructor(props) {
        super(props);
    }

    setScore(score) {
        if (score == 0)
            this.setState({ red: 0, green: 0, blue: 0 })
        else
            //red = question ? if true : if false
            this.setState(
                {
                    red: this.state.red + score >= 0 ? this.state.red + score : 0,
                    green: this.state.green + score >= 0 ? this.state.green + score : 0,
                    blue: this.state.blue + score >= 0 ? this.state.blue + score : 0
                }, () => {
                    console.log("this.state")
                })

        // if(this.state.red < 0 )
        //     this.setState({red:0})

        // if(this.state.green < 0 )
        //     this.setState({green:0})

        // if(this.state.blue < 0 )
        //     this.setState({blue:0})
    }

    setColor(color) {
        //this.setState({[color]:this.state[color]+1})

        if (color == 'red')
            this.setState({ red: this.state.red + 1 })
        if (color == 'green')
            this.setState({ green: this.state.green + 1 })
        if (color == 'blue')
            this.setState({ blue: this.state.blue + 1 })

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <div className='cubeContainer'>
                    <div className='cube red' onClick={() => this.setColor('red')}></div>
                    <div className='cube green' onClick={() => this.setColor('green')}></div>
                    <div className='cube blue' onClick={() => this.setColor('blue')}></div>
                </div>
                <hr />
                <div className='buttons'>
                    <button type='button' className='btn-primary m-2' onClick={() => this.setScore(1)}>+1</button>
                    <button type='button' className='btn-primary m-2' onClick={() => this.setScore(-5)}>-5</button>
                    <button type='button' className='btn-primary m-2' onClick={() => this.setScore(0)}>clear</button>
                </div>
                <hr />
                <div className='cubeinfo'>
                    <p>red:{this.state.red}</p>
                    <p>green:{this.state.green}</p>
                    <p>blue:{this.state.blue}</p>
                </div>
            </div>
        );
    }
}

export default Cubes;