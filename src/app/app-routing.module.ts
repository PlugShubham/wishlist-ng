import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HintlistComponent } from './hintlist/hintlist.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"",component:WishlistComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"hintlist",component:HintlistComponent},
  {path:"about",component:AboutComponent},
  {path:"wishlist/:wish",component:WishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
