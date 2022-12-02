import React, { Component } from 'react'
import ShowComponent from '../../components/ShowComponent';
import './Home.css'
import CardComponent from './../../components/CardComponent';
import FunctionComponent from './../../components/FunctionComponent';


class Home extends Component {
    //JS Start
    color = "red";

    state = {
        name: "shay",
        titles: ['card A', 'card B', 'card C', 'card D', 'card E'],
        description: ['description card A', 'description card B', 'description card C', 'description card D', 'description card E']
    }

    constructor(props) {
        super(props);
    }




    render() {
        return (
            <div className='p-5'>
                <div className='row'>
                    <div className="col-3">
                        <FunctionComponent title={this.state.titles[0]} description={this.state.description[0]} color="red" />
                    </div>
                    <div className="col-3">
                        <FunctionComponent title={this.state.titles[1]} description={this.state.description[1]} color="red" />
                    </div>
                    <div className="col-3">
                        <FunctionComponent description={this.state.description[2]} title={this.state.titles[2]} color="red" />
                    </div>
                    <div className="col-3">
                        <FunctionComponent title={this.state.titles[3]} description={this.state.description[3]} color="red" />
                    </div>
                    <div className="col-3">
                        <FunctionComponent title={this.state.titles[4]} description={this.state.description[4]} color="red" />
                    </div>
                    <div className="col-3">
                        <FunctionComponent title="Function component" description={this.state.description[4]} color="red" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;