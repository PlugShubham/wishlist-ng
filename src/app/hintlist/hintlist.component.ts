import { Component, OnInit } from '@angular/core';
import { HintlistService } from './hintlist.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-hintlist',
  templateUrl: './hintlist.component.html',
  styleUrls: ['./hintlist.component.scss'],
  providers:[]
})
export class HintlistComponent implements OnInit {
  hints:string[];
  constructor(private hlService:HintlistService,
  private toastr:ToastrService) { }

  ngOnInit() {
    this.hints=this.hlService.getHints();
  }
  addToWishListItem(hint:string){
    this.hlService.addToWishList.emit(hint);
    this.toastr.success("Hint is added to WishList Successfully!!")
  }
  
}
