import React, { Component } from 'react'
import CardComponent from '../../components/CardComponent';
// import ShowComponent from '../../components/ShowComponent';
import './Home.css'

class Home extends Component {
    //JS Start

    state = {
        name: "ron",
        titles: ['card A', 'card B', 'card C', 'card D', 'card E']
    }


    // constructor(props) {
    //     super(props);
    // }



    //HTML Start
    render() {
        return (
            <div className='p-5'>

                <hr />
                <div className='row'>
                    <div className="col-3">
                        <CardComponent />
                    </div>
                    <div className="col-3">
                        <CardComponent />
                    </div>
                    <div className="col-3">
                        <CardComponent />
                    </div>
                    <div className="col-3">
                        <CardComponent />
                    </div>
                    <div className="col-3">
                        <CardComponent />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;