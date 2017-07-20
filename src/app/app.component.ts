import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl }  from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import * as Globals from './global/global';

import * as _ from 'lodash';

import { DetailComponent } from './detail/detail.component';
import { MessageService } from './services/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartTotal:any;
  values = '';
  users:any[] = [];
  cartItems:any = 0;
  subscription: Subscription;

  constructor (private router: Router, private messageService: MessageService ) {}

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }

  ngOnInit() {
    // Get all comments
    this.messageService.getComments('users').subscribe( (response) => {
      _.forEach(response, (userInfo) => {
        this.users.push(userInfo);
      });
    },err => {
        console.log(err);
      });

    this.subscription = this.messageService.navItem$.subscribe( (item) => {
      this.cartItems = item;
    });
  }

  getUserDetails(item) {
    console.log("item", item);
    this.router.navigate(['/DetailComponent', item.id]);
  }

  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
  }

}
