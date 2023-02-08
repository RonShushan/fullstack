import React, { Component } from 'react'
import ShowComponent from '../../components/ShowComponent';
import './Home.css'
import CardComponent from './../../components/CardComponent';
import FunctionComponent from './../../components/FunctionComponent';

//rfce

class Home extends Component {
    //JS Start
    color = "red";

    state = {
        name:"shay",
        titles:['card A','card B','card C','card D','card E'],
        description:['description card A' , 'description card B' , 'description card C', 'description card D', 'description card E']
    }

    constructor(props) {
        super(props);
    }


    cardClicked = (index) => {
        console.log("Index : " , index , this.state.description[index])
    }


    render() { 
        return ( 
            <div className='p-5'>
               <div className='row'>
                    <div className="col-3">
                        <FunctionComponent  cardClickedFn={this.cardClicked} title={this.state.titles[0]} description={this.state.description[0]} index='0'/>
                    </div>
                    <div className="col-3">
                        <FunctionComponent cardClickedFn={this.cardClicked} title={this.state.titles[1]} description={this.state.description[1]} index="1"/>
                    </div>
                    <div className="col-3">
                        <FunctionComponent cardClickedFn={this.cardClicked} description={this.state.description[2]} title={this.state.titles[2]}  index="2"/>
                    </div>
                    <div className="col-3">
                        <FunctionComponent cardClickedFn={this.cardClicked} title={this.state.titles[3]} description={this.state.description[3]} index="3"/>
                    </div>
                    <div className="col-3">
                        <FunctionComponent cardClickedFn={this.cardClicked} title={this.state.titles[4]} description={this.state.description[4]} index="4"/>
                    </div>
                    <div className="col-3">
                        <FunctionComponent cardClickedFn={this.cardClicked} title="Function component" description={this.state.description[4]} index="5" />
                    </div>
               </div>
            </div>
        );
    }
}
 
export default Home;