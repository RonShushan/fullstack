import React, { Component } from 'react';
import './card.css'


class CardComponent extends Component {
    //name = "CardA"
    // props = {
    //     title:'Card A' ,
    //     description:"Description A",
    //     color:"red"
    // }

    state = {  }

    constructor(props) {
        super(props);
        console.log(props)
    }



    render() { 
        return ( 
            <div>
                <div className="card mainCard" >
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text"> Description Of {this.props.title}</p>
                        <a href="#" className="btn btn-primary">Button of {this.props.title}</a>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CardComponent;

