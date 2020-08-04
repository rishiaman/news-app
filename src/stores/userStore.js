import {extendObservable} from 'mobx';

class UserStore{
    constructor(){
        extendObservable(this,{

            loading:false,
            isLoggedIn: false,
            userName: ''
        })
    }
}

export default new UserStore();