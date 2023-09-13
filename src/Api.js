//https://reqres.in/ 
//This website has Free Api's, we can send free Api calls from here.
//Using fetch Api to receive data from Api of reqres.in

import React from 'react'

export default class Api extends React.Component{

    constructor(){
        super();
        this.state = {
            userdata : null
        }
    }

    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2").then( (resp)=> {
            resp.json().then( (result)=> {
                this.setState( {userdata : result.data})
            } )
        } )
    }

    render(){

        return(
            <div>
                <h1>Using Fetch Api to receive data from a website who is sending data through an Api</h1>
                { this.state.userdata? 
                    this.state.userdata.map( (item,i) => <div><p>
                         {item.id} ---- {item.first_name}----{item.email} </p></div> ) 
                :
                 <h4>The Fetch Api has not received the data yet</h4>
                }
            </div>
        )
    }
}