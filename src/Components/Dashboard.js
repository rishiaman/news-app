import React, { Component } from 'react';


class Dashboard extends Component{

    render(){
    return(
    <div>
    <div className="inputField">
     <textarea 
     className='input'
     placeholder='Type your news to upload...'
     type='textarea'
     onChange={(e)=>{console.log(e)}}
     />
    </div>
    <button className='btnDash'>submit </button>

    <div className="inputField">
     <textarea 
     className='input'
     placeholder='Type headlines...'
     type='textarea'
     onChange={(e)=>{console.log(e)}}
     />
    </div>
    <button 
     className='btnDash'>submit</button>

    <div className="inputField">
     <input  
     type='file'
     onChange={(e)=>{console.log(e)}}
     />
         <button 
     className='btnDash'>upload</button>
   </div>
   </div>);
    }

}


export default  Dashboard;