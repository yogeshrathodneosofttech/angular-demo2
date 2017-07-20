import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';

import { MessageService } from './services/comment.service';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
   { path: 'ListingComponent', component: ListingComponent },
   { path: 'FormComponent', component: FormComponent },
   { path: 'DetailComponent/:id', component: DetailComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    FormComponent,
    DetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
