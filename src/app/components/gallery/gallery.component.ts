import { Component, Inject, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { Gallery } from '../../models/gallery.interface';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit, AfterViewInit {
  gallery: Gallery[] = [];
  constructor(private galleryService: GalleryService) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.getAllGallery();
  }
  getAllGallery() {
    this.galleryService.getGallery().subscribe((res: Gallery[]) => {
      this.gallery = res;
    });
  }
}
