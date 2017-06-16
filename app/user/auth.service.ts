import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable} from 'rxjs/RX'

@Injectable()
export class AuthService {
    currentUser: IUser

    constructor(private http: Http){}

    loginUser(userName: string, password: string){
        // this.currentUser = {
        //     id: 1,
        //     userName: userName,
        //     firstName: 'taeyo',
        //     lastName: 'kim' 
        // }

      let header = new Headers({
        'Content-Type' : 'application/json'
      });
      let options = new RequestOptions({
        headers : header
      });
      let loginInfo = { username: userName, password: password };

      return this.http
            .post('/api/login', JSON.stringify(loginInfo), options)
            .do((response) =>{
              if(response)
                this.currentUser = <IUser>response.json().user;
            })
            .catch(err => {
                return Observable.of(false);
            })

        // console.log(this.currentUser);
    }

    checkAuthStatus(){
        return this.http.get('/api/currentIdentity')
            .map((res: any) => {
                if(res._body){
                    console.log(res)
                    return res.json();     
                }else{
                    return {}
                }
            })
            .do(currentUser => {
                if(!!currentUser.userName){
                    this.currentUser = currentUser;
                }
            }).subscribe();  //self-observable
    }

    handleError(error:Response){
      return Observable.throw(error.statusText);
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let header = new Headers({
        'Content-Type' : 'application/json'
        });
        let options = new RequestOptions({
            headers : header
        });

        return this.http
            .put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
            
    }

    logout(){
        this.currentUser = undefined;

        let header = new Headers({
        'Content-Type' : 'application/json'
        });
        let options = new RequestOptions({
            headers : header
        });

        return this.http
            .post(`/api/logout`, JSON.stringify({}), options);
    }
}