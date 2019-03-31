import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { GadgetComponent } from './gadgets/gadget/gadget.component';
import { BrandsComponent } from './brands/brands.component';
import { EditBrandComponent } from './brands/edit-brand/edit-brand.component';
import { BrandComponent } from './brands/brand/brand.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gadgets', component: GadgetsComponent },
  { path: 'gadgets/:id/:name', component: GadgetComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'brands/:id/edit', component: EditBrandComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    GadgetsComponent,
    GadgetComponent,
    BrandsComponent,
    EditBrandComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
