import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import * as _ from 'lodash';

import * as Globals from '../global/global';
import { MessageService } from '../services/comment.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	userId:any = 1;
	userInfo:any;
	cartItems: number;
  subscription: Subscription;
  cartFull:any[] = [];

  constructor(
  		private activatedRoute: ActivatedRoute,
  		private messageService: MessageService
	){}

  ngOnInit() {
  	// subscribe to router event
  	this.activatedRoute.params.subscribe((params: Params) => {
  		this.userId = params.id;
  	});

  	// Get all Users
  	this.messageService.getComments(`users/${this.userId}`).subscribe( (response) => {
  		this.userInfo = response;
  	},err => {
  		console.log(err);
  	});

  	this.subscription = this.messageService.navItem$.subscribe( (item) => {
  		this.cartItems = item;
  	});
  }

  addToCart(productId) {
  	var productsExists = _.includes(this.cartFull, productId);
  	if ( productsExists !== true ) {
  		this.cartFull.push(productId);
	  	console.log("this.cartFull", this.cartFull);
	  	++this.cartItems;
	  	this.messageService.changeNav(this.cartItems);
  	} else {
  		alert('Product Already Exists in Cart!!');
  	}
  	return;
  }

  handleEvent(event) {
      console.log("event", event);

  }

}
