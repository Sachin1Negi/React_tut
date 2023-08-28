// Two type of components : 1.Class components 2. Class components.

//Using Class component.

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
//USING LIFE CYCLE METHODS 
//1. ComponentDidMount 2. ComponentDidUpdate 3. ComponentWillUnmount
//Note : we can use console of web, it also shows good errors sometimes so keep that in check as well.

import React from 'react'

export default class About extends React.Component{

    constructor(){

        //forgot to add '=' after this.state 
        //forgot to write super as well
        super()
        this.state = {
            name : 'sachin',
            company : 'samsung'
        }
    }

    componentDidUpdate(){
        console.warn("code reached in componentdidupdate")
       if( this.state.name === 'Anil' )
        this.setState( {name : 'rahul', company : 'Google'})
    }

    render(){

        return(
            <div>
                <h1> name : {this.state.name} </h1>
                <h2> company : {this.state.company} </h2>
                <button onClick = { () => {this.setState({ name : 'Anil' }) } } > ClickMe </button> 
            </div>
        )
    }
}
