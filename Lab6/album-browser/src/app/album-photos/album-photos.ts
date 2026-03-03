import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Photo } from '../models/photo.model';
import { AlbumService } from '../services/album';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css'
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.albumId = Number(params.get('id'));
      this.albumService.getAlbumPhotos(this.albumId).subscribe(data => {
        this.photos = data;
      });
    });
  }
}