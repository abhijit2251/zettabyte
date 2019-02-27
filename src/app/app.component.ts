import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { AlbumsService } from './services/albums.service';
import { PhotosService } from './services/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZettaByte';
  userAry:any = [];
  albumAry:any = [];
  show:boolean = false;
  tempAlbumAry = [];
  photoDataAry:any = [];
  tempPhotoAry = [];
  showPhotos:boolean = false;

  constructor(private usersService: UsersService, private albumsService:AlbumsService, private photosService:PhotosService){
    this.users();
    this.albums();
    this.photos();
  }
   users(){
    this.usersService.getUsers().subscribe(userData =>{
      this.userAry = userData;
    });
   }  

   albums(){
     this.albumsService.getAlbums().subscribe(albumData =>{
      this.albumAry = albumData;
     });
   }

   onClickUser(userId){
    for(let albumIndex in this.albumAry){
      if(userId == this.albumAry[albumIndex]['userId']){
        this.tempAlbumAry.push({userId:this.albumAry[albumIndex]['userId'], id:this.albumAry[albumIndex]['id'],title:this.albumAry[albumIndex]['title']});
      }
    }
    this.show = !this.show;
  }

  onBackClickAlbum(){
    this.show = !this.show;
    this.tempAlbumAry = [];
  }

   photos(){
     this.photosService.getPhotos().subscribe(photoData =>{
      this.photoDataAry = photoData
     });
   }

   onClickAlbum(userId){
    this.tempPhotoAry = [];
    this.showPhotos = !this.showPhotos;
    for(let photoIndex in this.photoDataAry){
      if(this.photoDataAry[photoIndex]['albumId'] == userId){
        this.tempPhotoAry.push({albumId:this.photoDataAry[photoIndex]['albumId'], id:this.photoDataAry[photoIndex]['id'], title:this.photoDataAry[photoIndex]['title'],url:this.photoDataAry[photoIndex]['url'], thumbnailUrl:this.photoDataAry[photoIndex]['thumbnailUrl']});        
        this.tempPhotoAry = this.tempPhotoAry.slice(0,5);
      }
    }
  }

  onBackClickPhoto(){
    this.showPhotos = !this.showPhotos; 
  }

}
