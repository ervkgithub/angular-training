import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
// import { LoginComponent } from './login/login.component';
import { MainService } from './main.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { InputformatDirective } from './inputformat.directive';
import { SummaryPipe } from './summary.pipe';
import { HighlightComponent } from './highlight/highlight.component';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail', component: ProductDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    // LoginComponent,
    DataBindingComponent,
    ProductsComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    InputformatDirective,
    SummaryPipe,
    HighlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    FormsModule,
    LoginModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
