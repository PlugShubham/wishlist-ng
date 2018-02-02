import { EventEmitter, Injectable } from "@angular/core";
import { HintlistService } from "../hintlist/hintlist.service";

@Injectable()
export class WishlistService {
    wishEdit = new EventEmitter<string>();
    private wishlist:string[]=[
        "Adidas Sneakers",
        "Bose Speaker"
    ];
    constructor(private hlService:HintlistService){
        this.hlService.addToWishList.subscribe(
            (hint:string)=>{
                this.wishlist.push(hint);
            }
        );
    }
    getWishList(){
        return this.wishlist;
    }

    addToWishList(wish:string){
        if(!(wish === '')){
            this.wishlist.push(wish);
        } 
    }
    deleteItem(wish:string){
        let index = this.wishlist.indexOf(wish);
        this.wishlist.splice(index,1);
    } 
    
}