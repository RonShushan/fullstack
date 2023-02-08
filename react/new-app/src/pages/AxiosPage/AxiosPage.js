import React, { Component } from 'react';
import axios from 'axios';
import TvCard from '../../components/TvCard';


class AxiosPage extends Component {
    state = { 
        showsUrl: 'http://api.tvmaze.com/shows',
        shows:[],
        showDiv:false,
        nums:[1,2,3,4,5,6,7]
    }

    componentDidMount(){
        console.log("DidMount")

        axios.get(this.state.showsUrl).then(result => {
             console.log("Res : " , result)
            if(result.status == 200){
                this.setState({shows:result.data});
                console.log(result.data)
            }else {
                console.log("Error load data")
            }
        })
    }

    MovieCallBack = (name) =>{
        console.log("Name : " , name)

    }
    
    render() { 
        if(this.state.shows.length)
            console.log("LEN : ",  this.state.shows[0].image.medium)

        return ( 
            <div>
            <button type='button' className='btn btn-primary' onClick={()=>this.MovieCallBack("hello")}>Movie Call back</button>
            <div className="row">
                  
               {    this.state.shows.length && 
                    this.state.shows.map(show =>
                        <TvCard  key={show.id} name={show.name} summary={show.summary} image={show.image ? show.image.medium : ""} callBackFn={this.MovieCallBack}/>  
                    //    <div key={show.id}>
                    //             <img src={show.image.medium} alt="Card image cap" /> 
                    //             <div>{show.name}</div>
                    //             <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
                    //    </div>

                    
                    )
                }
               {/*11222 {this.state.showDiv ? <div>Show Div</div> : <div>Not show div</div> } */}

            
            </div>
                <div className='row'>
                        <div className='col-3'>

                        </div>
                        <div className='col-3'>

                        </div>
                        <div className='col-3'>

                        </div>
                        <div className='col-3'>

                        </div>
                </div>
            </div>
         );
    }
}
 
export default AxiosPage;