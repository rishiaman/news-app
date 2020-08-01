import {extendObservable} from 'mobx';

class UserStore{
    constructor(){
        extendObservable(this,{

            loading:false,
            isLoggedIn: true,
            userName: 'rishi'
        })
    }
}

export default new UserStore();