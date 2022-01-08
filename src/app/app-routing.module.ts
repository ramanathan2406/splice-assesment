import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PhotosAlbumComponent } from './photos/photos-album/photos-album.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostComponent } from './post/post.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
 
  {
    path:'',
    component:SidenavComponent,
    children: [
      {
        path:'post',
        component:PostComponent
      },
      {
        path:'post/detail/:id',
        component:PostDetailComponent
      },
      {
        path:'photos',
        component:PhotosAlbumComponent
      },
    ]
  },
  { path: "", redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
