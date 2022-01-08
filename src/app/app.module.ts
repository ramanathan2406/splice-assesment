import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule,MatSidenavContent} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './auth/login/login.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PostComponent } from './post/post.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PhotosAlbumComponent } from './photos/photos-album/photos-album.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import {
  HeaderComponent,
} from "./layouts/header/header.component";
import { HeaderTwoComponent } from './header-two/header-two.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostComponent,
    PostDetailComponent,
    PhotosAlbumComponent,
    HeaderComponent,
    HeaderTwoComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCheckboxModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDialogModule
  ],
  exports: [],

  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
