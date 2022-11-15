import React, { Component } from 'react';

class Home extends Component {
    name = "ron";
    state = {}


    constructor(props) {
        super(props);
        this.name = "s1"
        console.log("Name :", this.name)
    }
    render() {
        return (<div>
            <div>
                this is Home page
            </div>
        </div>
        );
    }
}

export default Home;