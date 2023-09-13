//Note: Read all the notes properly, they show the mistakes I made during the practice.
//will make a form and submit it and store all data in state of class.

// import React from 'react';

// export default class Form extends React.Component{

//     constructor(){

//         super();
//         this.state = {
//             user_name : "",
//             password : ""
//         }
//     }

//     submit(){
//         console.warn(this.state);   
//         //this.state has all the latest and updated information of the states.         
//     }

//         render(){

//             return(
//                 <div>
//                     <h1>Form Handling</h1>
//                     Name : <input type='text' placeholder="Enter Name" onChange={(e) => { this.setState({user_name : e.target.value}) }} /> <br /> <br />
//                     Password : <input type='password' placeholder="Enter Password" onChange={(e) => {this.setState({ password : e.target.value}) }} /> <br /> <br />
//                     <button onClick = { ()=> {this.submit()} }>Submit</button>
//                 </div>
//             )
//         }
    
// }

//Note: You get the error coz in input tag in jsx should be self closing, so after return always jsx script should write.
//Note 2 : I made an error, I did not write onChange() in form after inputting the data. so the data was never updated so we need to do two things 1. use onChange() 2. within onChange use this.setState() to update the state values.
//Note 3 : I wrote the onChnge syntax wrong. onChange = { () => {} } ,, onChange uses '=' , it is equal to an object, object takes funtion as an input.  onChange = { (event) => { this.setState( {user : e.target.value} )  }}   .............
// so onChange takes a funtion within its object and the funtion takes an event inside it, which is the value which user wrote inside the form. then using useState we update the value of the states.






/////////////////////////////////////////////////////////////////////////

//Learning toggling
// we can use ternary operator to toggle between true or false value.
// we can use !currentState , which toggles the current state.
// we can also use a circular array in case we have more than two screens to show. the value of array increases or decreases and each value represent a screen. after final value you again come to first value or screen.

// import React from 'react' 

// export default class Form extends React.Component {

//     constructor(){

//         super();
//         this.state = {
//             toggle : true
//         }
//     }

//     render() {

//         return (

//             <div>
//               <h1> Trying using toggling</h1>
//               { this.state.toggle ?  <h1> Show</h1> : <h1> Hide </h1> }
//               Button :  <button onClick={()=>{ this.setState( {toggle : !this.state.toggle} ) }}> Submit </button>
//             </div>
//         )
//     }
// }

//Doublts : can't we pass values inside the funtion called at onClick even or ther events.
//Even if parameters are passed do we simply write the parameters or do we have to write the data-type as well.
//Note : you only print the component on the web, so writing HTML at places other than the return( ) like in some funtions has no meaning at all.
// render () is used to display content on the DOM.
// When you feel like everything is correct try again start the react app using : npm start.
//Rather than using hide and show on the toggle we can even import a component and display it or hide it .


//////////////////////////////////////////////////

//Making a form and validating it.

// import React from 'react'

// export default class Form extends React.Component {

//     constructor(){

//         super();
//         this.state = {
//             user_name : "",
//             password : "",
//             name_error : "",
//             password_error : ""
//         }
//     }

//     validate(){

//         if( !this.state.user_name.includes("@") && this.state.password.length < 10){
 
//             this.setState( {name_error : "the name doesn't include @ which is must"});
//             this.setState( {password_error : "password length should be greater than 10"});
//         }
//         else if( !this.state.user_name.includes('@') ){

//             this.setState( {name_error : "the name doesn't include @ which is must"});
//             this.setState( { password_error : ""});
//         }
//         else if( this.state.password.length < 10){
//             this.setState( {password_error : "password length should be greater than 10"});
//             this.setState( { name_error : ""});
//         }
//         else{

//             this.setState( { password_error : ""});
//             this.setState( { name_error : ""});
//             alert("The details has been set successfully");
//         }

//     }

//     render(){

//         return(

//             <div>
//                 <h1>Form with validation</h1>
//                 UserName : <input type="text" onChange = { (e)=> { this.setState( {user_name : e.target.value} ) }}  />
//                 <p style={ {color:"red", font_size:"12px"}}> {this.state.name_error}</p>
//                 <br/> <br/>
//                 Password : <input type="text" onChange = { (e)=> { this.setState( {password : e.target.value} ) }}  />
//                 <p style={ {color:"red", font_size:"12px"}}> {this.state.password_error}</p>
//                 <br/> <br/>
//                 <button onClick = { ()=> {this.validate()}} >Submit</button>
//             </div>
//         )
//     }
// }
