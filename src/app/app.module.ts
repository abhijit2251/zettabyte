import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { UsersService } from './services/users.service';
import { AlbumsService } from './services/albums.service';
import { PhotosService } from './services/photos.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsersService, AlbumsService, PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
