import React from 'react'


const Test = ({name, setName}) => {
    return (
      <div>
        <h1>The name is: {name}</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
    );
  };

// class Test extends Component{
    
//        state={ isLoggedIn : false};
    
//     render(){
//         return (
//      <div>
//         {!this.state.isLoggedIn ? (
//            <h1>You are not logged in </h1>
//          ) : (
//             <h1>Congratulation, you are logged in!</h1>
//         )}
//         <button onClick={(e) => this.setState({ isLoggedIn : true})}>
//             Login
//         </button>
         

//        </div>
//         );
//      }
    
// }

export default Test;