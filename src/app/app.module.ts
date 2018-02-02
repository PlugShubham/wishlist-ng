import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistEditComponent } from './wishlist/wishlist-edit/wishlist-edit.component';
import { HintlistComponent } from './hintlist/hintlist.component';
import { AboutComponent } from './about/about.component';
import { WishlistService } from './wishlist/wishlist.service';
import { HintlistService } from './hintlist/hintlist.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    WishlistEditComponent,
    HintlistComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
  ],
  providers:[WishlistService,HintlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
