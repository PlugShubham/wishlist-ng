import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist-edit',
  templateUrl: './wishlist-edit.component.html',
  styleUrls: ['./wishlist-edit.component.scss']
})
export class WishlistEditComponent implements OnInit {
  wish:string='';
  showWish:boolean=false;
  constructor(private wlService:WishlistService,
  private toastr:ToastrService) { }

  ngOnInit() {
    this.wlService.wishEdit.subscribe(
      (wish:string)=>{
        this.wish=wish;
        this.showWish=true;
      }
    );
  }
  deleteItem(){
    this.wlService.deleteItem(this.wish);
    this.toastr.error("Wish is Deleted!!");
    this.showWish=false;
  }
}
