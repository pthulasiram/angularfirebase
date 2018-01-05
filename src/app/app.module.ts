import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { environment } from '../environments/environment.prod';
import { ContactComponent } from './contact/contact.component';
import { AgmDirectionDirective } from './agm-direction/agm-direction.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuDetailComponent } from './menu/menu-detail/menu-detail.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// New imports to update based on AngularFire2 versio
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { ProductComponent } from './dashboard/product/product.component';
import { UploadFileService } from './dashboard/fileupload/uploadfile.service';
import { AddComponent } from './dashboard/product/add/add.component';
import { CarouselComponent } from './carousel/carousel.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MenuComponent,
    ContactComponent,
    AgmDirectionDirective,
    LoginComponent,
    HomeComponent,
    MenuDetailComponent,
    DashboardComponent,
    ProductComponent,
    AddComponent,
    CarouselComponent
  ],
  exports: [AgmDirectionDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjEMcnUebf4uCh5NvG-SpPsSWKsJzqwR8'
    }),
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuard, AuthService, UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
