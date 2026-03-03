import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html', 
  styleUrl: './albums.css'   
})
export class Albums implements OnInit { 
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(a => a.id !== id);
    this.albumService.deleteAlbum(id).subscribe();
  }
}