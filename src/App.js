import React, { Component } from 'react';
import './App.css';
import {observer} from 'mobx-react';
import UserStore from './stores/userStore';
import SubmitButton from './Components/SubmitButton';
import LoginForm from './Components/LoginForm';
import {BrowserRouter as Router} from 'react-router-dom';
class App extends Component {

  async componentDidMount(){
    try{

      let res = await fetch('/login', {
        method:'post',
        headers:{
          'Accept':'application/json',
          'content-type': 'application/json'
        }
      });
      let result = res.json();
      if(result && result.sucess){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.userName=result.userName;
      }else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }catch(ex){
      console.error(ex);
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }


  async doLogout(){
    try{

      let res = await fetch('/logout', {
        method:'post',
        headers:{
          'Accept':'application/json',
          'content-type': 'application/json'
        }
      });
      let result = res.json();
      if(result && result.sucess){
        UserStore.isLoggedIn = false;
        UserStore.userName='';
      }
    }catch(ex){
      console.error(ex);
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  render(){
    if(UserStore.loading){
      return(
        <div className="App">
        <div className="container">
       Loading, Please wait...
         </div>
         </div>
      );
    }else{
      if(UserStore.isLoggedIn){
        return(
          <div className="App">
          <div className="container">
         Welcome {UserStore.userName}
            <SubmitButton 
            text={'Logout'}
            disabled={false}
            onClick={()=>{this.doLogout()}}
            />
           </div>
           </div>
        );
      }
    }


  return (
    <Router>
    <div className="App">
    <div className="container">
     <LoginForm />
     </div>
    </div>
    </Router>
  );
}
}

export default observer(App);
