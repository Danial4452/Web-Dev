import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {
  album!: Album;
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      this.albumService.getAlbum(id).subscribe({
        next: (data) => {
          this.album = data;
          this.loaded = true;
        },
        error: (err) => {
          console.error('Ошибка загрузки альбома:', err);
        }
      });
    });
  }

  saveTitle() {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe({
        next: (updatedAlbum) => {
          alert('Title updated successfully!');
          console.log('Server response:', updatedAlbum);
        },
        error: (err) => {
          console.error('Error updating title:', err);
        }
      });
    }
  }
}