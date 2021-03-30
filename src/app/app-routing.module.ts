import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E404Component } from './core/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
// import { UserLoginNewComponent } from './user/user-login/user-login-new.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestReviewsComponent } from './request/request-reviews/request-reviews.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';

  



const routes: Routes = [
  
  { path:"", redirectTo: "/request/list", pathMatch:"full"},
  { path: 'core/home', component:HomeComponent},
  { path: 'core/about', component:AboutComponent},

  { path: 'user/list', component: UserListComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'user/login', component: UserLoginComponent },
  // { path: 'user/loginnew', component: UserLoginNewComponent },
  // {path: '**', component:UserListComponent},

  { path: 'vendor/list', component: VendorListComponent },
  { path: 'vendor/detail/:id', component:VendorDetailComponent },
  { path: 'vendor/create', component: VendorCreateComponent },
  { path: 'vendor/edit/:id', component: VendorEditComponent },
  // { path: '**', component:VendorListComponent},
  
  { path: 'product/list', component: ProductListComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  // { path: '**', component:ProductListComponent},
  
  { path: 'request/list', component: RequestListComponent },
  { path: 'request/detail/:id', component: RequestDetailComponent },
  { path: 'request/create', component: RequestCreateComponent },
  { path: 'request/edit/:id', component: RequestEditComponent },
  { path: 'request/lines/:id', component: RequestLinesComponent },
  { path: 'request/reviews', component: RequestReviewsComponent },
  { path: 'request/reviewitem/:id', component: RequestReviewItemComponent },
  { path: 'requestlines/create/:id', component: RequestlineCreateComponent },
  { path: 'requestlines/edit/:id', component: RequestlineEditComponent },
  
  // { path: '**', component:HomeComponent},


  { path:"**", component:E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
