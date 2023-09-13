
//JWT Authentication

import React from 'react'

export default class Login extends React.Component{

    constructor(){

        super();
        this.state={
            email : null,
            password : null,
            login : false,
            token : null
        }
    }

    //Note: fetch funtion's brackets are having two parameters 1.url and 2. object with method and body.
    login() {
        fetch('http://127.0.0.1:5000/api/login',
            {
                method: "POST",
                body: JSON.stringify(this.state)
            }).then((resp) => {
                resp.json().then((result) => {
                    console.warn("result", result);
                })
            })
    }

    render(){

        return(
            <div>
                Email : <input type="email" onChange={ (e)=>{ this.setState( {email : "e.target.value"})}} /> <br/>
                Password : <input type="password" onChange={ (e)=>{ this.setState( {password : "e.target.value"})}} /> <br/>
                <button onClick={ ()=> {this.login()} } > Login </button>
            </div>
        )
    }
}