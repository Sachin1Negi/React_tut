// Two type of components : 1.Class components 2. Functional components.

////Using Class component.

//import React from 'react';

//// Using Class, Note : we must extend React.Component, else it doen't run.

// export default class About extends React.Component {

//     render() {
//         return( 
//             <div>
//             <h1> This is About component</h1>
//             <h3> So how are you all doing.</h3>
//             </div>
//         )
//     }
// }

////Using Funtion 

// function About(){

//     return(
//         <div>
//             <h1> Using Functions </h1>
//         </div>
//     )
// }

// export default About

//Using Class with Constructor and state variables.
// import React from 'react'

// export default class About extends React.Component {

//     constructor(){
//         super()
//         this.state = {
//             Name : "Sachin",
//             Company : "Samsung",
//             Ctc : 25
//         }
//     }

//     //Note : I had to write this.state.Name, this.Name did not work,
//     render(){
//         return (
//             <div>
//                 <h1> Name of employee : {this.state.Name}</h1>
//                 <h1> Salary of employee : {this.state.Ctc / 12} lakh rupees</h1>
//             </div>
//         )
//     }
// }


////USING FUNTIONS WITH USESTATE HOOK, HELPS FUNTIONS TO USE STATE LIKE FUNCTIONALITY OF THE CLASS

//this time i need to impport more stuff.

// import React, {useState} from 'react'

// //had difficulties in remembering the syntax.
// //count : state, setcount : setstate.

// function About ()
// {
// //I wrote this odd syntax for usestate which is wrong, usestate is not a funtion but a class
// //once imported we can simply use : const[state, setState] = usestate(initial value)
// // Note : In the below program, even when I had two counts, one before updation and one after updation,
// //still both showed the same value i.e value after updation.
// // It might be happening because after setcount it renders again.
//     // usestate()
//     // {
//       const[count, setcount] = useState(100) 
//     // }

//     return (
//         <div>
//             <h1> current value : {count}</h1>
//             { count === 100 ? setcount( count + 1) : "" }
//             <h1> updated value : {count} </h1>
//         </div>
//     )
// }

// export default About;


////////////////////////////////////////////

//USING setState() in class

//Notes: I wrote spelling of constructor but it did not give me the exact error.

// import React from 'react';

// export default class About extends React.Component {

//     constructor(){

//         super()
//         this.state = {
//             name : 'sachin',
//             company : 'samsung',
//             ctc : 26
//         }
//     }

//     update()
//     {   //Never forget to use console.warn to check wether the code has reached the right place or not.
//         //I wrote two different brackets in this.setState( {}, {}) and it gave me error, right way is shown
//         console.warn("Reached at update() ")
//         this.setState( { name : 'Anil Sidhu', company : 'Adobe'}
//         )

//     }

//     render(){

//         return (
//             <div>
//                 <p> Name of employee : {this.state.name}</p>
//                 <p> company : {this.state.company}</p>
//                 <button onClick = { ()=> {this.update()} } > Click me </button>
//             </div>
//         )
//     }
// }

////////////////////////////////////////////////////////
// //USING LIFE CYCLE METHODS 
// //1. ComponentDidMount 2. ComponentDidUpdate 3. ComponentWillUnmount
// //Note : we can use console of web, it also shows good errors sometimes so keep that in check as well.

// import React from 'react'

// export default class About extends React.Component{

//     constructor(){

//         //forgot to add '=' after this.state 
//         //forgot to write super as well
//         super()
//         this.state = {
//             name : 'sachin',
//             company : 'samsung'
//         }
//     }

//     componentDidUpdate(){
//         console.warn("code reached in componentdidupdate")
//        if( this.state.name === 'Anil' )
//         this.setState( {name : 'rahul', company : 'Google'})
//     }

//     render(){

//         return(
//             <div>
//                 <h1> name : {this.state.name} </h1>
//                 <h2> company : {this.state.company} </h2>
//                 <button onClick = { () => { this.setState({ name : 'Anil' }) } } > ClickMe </button> 
//             </div>
//         )
//     }
// }

//React StrictMode in your index.js file (if you use create-react-app). 
//strict mode checks for potential problems and caused to run some lifecycle methods twice (like constructor, render, componentShouldUpdate, etc).
//Strict mode checks are run in development mode only; they do not impact the production build.

//////////////////////////////////////////////////////////////

//Hooks in functions to use Life cycle methods: Using "useEffect" hook
//Note : The react hook useEffect helps in adding componentDidUpdate and componentDidMount combined lifecycle in React's funtional component.
// we can add multiple useEffect hooks in a sigle component.

// import React , {useState, useEffect} from 'react'

// function About()
//  {

//     const[ count, setCount ] = useState(100)  //count = state  and setCount = setState.

//     //useEffect : ( takes two parameters , 1. function passed to the hook, 2. [] : it tells the hook when to re-render the component. )
//     //useEffect()  is called according to the second codition passed in its arguments , within square brackets.
//     //eg. [props] : if props values are changed then this hook is called again.,  [] : this hook will be called once only when the component is rendered to the screen.
//     // Note: Passing an empty array as a second argument to useEffect fucntion call makes it work like componentDedMount. 
//     useEffect(  () => {
//         console.warn(" useEffect called : similar to componentDidUpdate");
//     },
//     [count == 160]
//     )
//     //setCount( val ) will from now on update the  value of count to val.

//     return(

//         <div>
//             { console.warn("return inside function is called 1") }
//             <h1>initial value of count : {count}</h1>
//             {/* { console.warn("return inside function is called 2") } */}
//             {/* <h1>{ count == 100? setCount( 500 ) : "" } New value : {count}</h1> */}
//             {/* { console.warn("return inside function is called 3") } */}
//         </div>
//     )

//  }

// export default About;