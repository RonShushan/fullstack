import React, { Component } from 'react';
import { connect } from 'react-redux';
class Table extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
        <div>
            <table className="table table-light">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.users.map((user,i)=><tr key={i} >
                        <th scope="row">{user.name}</th>
                        <td>{user.mail}</td>
                        <td>
                            <button type="button" className='btn-primary' onClick={()=>this.props.DeleteUser(i)}>Delete</button>
                            <button type="button" className='btn-primary' onClick={()=>this.props.AddToFavorite(user)}>Favorites</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>


            <hr/>

            {/* <table className="table table-light">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.favorites.map((user,i)=><tr key={i} >
                        <th scope="row">{user.name}</th>
                        <td>{user.mail}</td>
                        <td>
                            <button type="button" className='btn-primary' onClick={()=>this.props.removefromFavorites(i)}>Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table> */}
        </div>  );
    }
}


const mapStateToProps = (state) => {
    console.log("mapStateToPropsFromTable : " , state)
    return {
        users:state.users,
        favorites:state.favorites,
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps")
    return {
        DeleteUser(index){
            dispatch({
                type:"DeleteUser",
                payload:index
            })
        },

        AddToFavorite(user){
            dispatch({
                type:"AddToFavorites",
                payload:user
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
