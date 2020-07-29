import React, { Component } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from '../stores/userStore';
import {Link} from 'react-router-dom';

class LoginForm extends Component{

  constructor(props){
    super(props);
    this.state={
      userName:'',
      password:'',
      buttonDisabled:false
    }
  }

setInputValue(property,val){
val = val.trim();
if(val.length>12){
  return;
}
this.setState({
  [property]:val
})
}

resetForm(){
  this.setState({
    userName:'',
    password:'',
    buttonDisabled:false
  })
}

async doLogin(){

if(!this.state.userName){
  return;
}

if(!this.state.password){
  return;
}


}

render(){
  return (
   <div className="loginForm">
    Account Login
    <InputField
    type='text'
    placeholder='Username*'
    value={console.log()}
    onChange={(val)=>console.log(val)}
    />

    <InputField
    type='password'
    placeholder='password*'
    value={console.log()}
    onChange={(val)=>console.log(val)}
    />

    <SubmitButton
    text='Login'
    />
  <Link to="/#">
  <ul>Forgot Username/Password?</ul>
  </Link>
  <Link to="/#">
  <ul>  Don't Have an Account Sign up?</ul>
    </Link>
   </div>
  );
}
}

export default LoginForm;