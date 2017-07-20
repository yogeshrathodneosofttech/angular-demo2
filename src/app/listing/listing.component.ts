import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl }  from '@angular/forms';

import * as Globals from '../global/global';

import * as _ from 'lodash';

import { DetailComponent } from '../detail/detail.component';
import { MessageService } from '../services/comment.service';

@Component({
	selector: 'app-listing',
	templateUrl: './listing.component.html',
	styleUrls: ['./listing.component.css']
})
export class ListingComponent {
	cartTotal:any;
  values = '';
  users:any[] = [];

  constructor (private router: Router, private messageService: MessageService ) {}

	ngOnInit() {
    // Get all Users
    this.messageService.getComments('users').subscribe( (response) => {
      _.forEach(response, (userInfo) => {
        this.users.push(userInfo);
      });
    },err => {
        console.log(err);
      });
  }

  getUserDetails(item) {
    this.router.navigate(['/DetailComponent', item.id]);
  }

  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
  }

}
