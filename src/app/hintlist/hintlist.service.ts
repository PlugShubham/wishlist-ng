import { EventEmitter } from "@angular/core";

export class HintlistService{
    addToWishList= new EventEmitter<string>();
    private hints:string[]=[
        "Shirts","pants","shorts","car","bike","speaker","foreign trips"
    ];
    getHints(){
        return this.hints;
    }
}