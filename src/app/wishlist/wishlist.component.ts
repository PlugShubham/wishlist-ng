import { Component, OnInit,ElementRef,ViewChild,OnDestroy } from '@angular/core';
import { WishlistService } from './wishlist.service';
import {trigger,transition,animate,state,style} from '@angular/animations';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  
})
export class WishlistComponent implements OnInit,OnDestroy {
  wishlist:string[];
  wish:string="";
  paramsSubcription:Subscription;
  @ViewChild('newwish') newwish:ElementRef;
  constructor(
    private wlService:WishlistService,
    private routes:Router,
    private route:ActivatedRoute,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.wishlist = this.wlService.getWishList();
    this.paramsSubcription = this.route.params.subscribe(
      (params:Params)=> {
        this.wish = this.route.snapshot.params['wish'];
      }
    );
  }
  addWishList(){
    this.wlService.addToWishList(this.newwish.nativeElement.value);
    //this.wishlist.push(this.newwish.nativeElement.value);
    this.toastr.success("Wish is Successfully added");
    this.newwish.nativeElement.value='';
  }
  editListItem(wish:string){
    this.routes.navigate(['wishlist',wish]);
    this.wlService.wishEdit.emit(wish); 
    //this.wish = this.route.snapshot.params['wish'];
  }
  goToHintList(){
    this.routes.navigate(['hintlist']);
  }
  ngOnDestroy(){
    this.paramsSubcription.unsubscribe();
  }
}
