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
  console.log('called setInputValue')
val = val.trim();
if(val.length>15){
  return;
}
this.setState({
  [property]:val
})
console.log(this.state.userName + this.state.password)
}

resetForm(){
  this.setState({
    userName:'',
    password:'',
    buttonDisabled:false
  })
}

async doLogin() {

  console.log('called')
  if (!this.state.userName) {
    return;
  }

  if (!this.state.password) {
    return;
  }

  this.setState({
    buttonDisabled: true
  })

  try{
    UserStore.isLoggedIn = true;
    UserStore.userName = this.state.userName
    console.log('logged in in loginform line 52'+ this.state.userName + this.state.password)
  }catch{

  }

}

render(){
  return (
   <div className="loginForm">
    Account Login
    <InputField
    type='text'
    placeholder='Username*'
    value={this.state.userName ? this.state.userName:''}
    onChange={(value)=>this.setInputValue('userName', value)}
    />

    <InputField
    type='password'
    placeholder='password*'
    value={this.state.password ? this.state.password:''}
    onChange={(val)=>this.setInputValue('password', val)}
    />
    <SubmitButton
    text='Login'
    disabled={this.state.buttonDisabled}
    onClick={()=>this.doLogin()}
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