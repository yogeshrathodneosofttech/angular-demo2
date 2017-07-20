/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DetailComponent } from '../detail/detail.component';
import { Observable } from 'rxjs/Rx';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MessageService {

    postsEndPoint:any = `https://reqres.in/api/users`;
    baseEndPoint:any = `https://jsonplaceholder.typicode.com/`;

    private _navItemSource = new BehaviorSubject<number>(0);
    navItem$ = this._navItemSource.asObservable();



    // service command
    changeNav(number) {
        this._navItemSource.next( number );
    }

    constructor (private http: Http) {}

    getComments(relativeUrl) : Observable<Comment[]> {

        // ...using get request
        return this.http.get( this.baseEndPoint + relativeUrl )
        // ...and calling .json() on the response to return data
        .map((res:Response) => res.json())
        //...errors if any
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

}