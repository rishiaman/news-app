import React from 'react';

const InputField =(props)=> {

  return (
   <div className="inputField">
     <input 
     className='input'
     placeholder={props.placeholder}
     type={props.type}
     value={props.value}
     onChange={(e)=>{props.onChange(e.target.value)}}
     />
   </div>
  );
}

export default  InputField;