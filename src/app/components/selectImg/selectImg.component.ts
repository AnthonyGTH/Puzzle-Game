import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetPhotosService } from '../../services/get-photos.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'selectImg',
  templateUrl: './selectImg.component.html',
  styleUrls: ['./selectImg.component.scss'],
})
export class SelectComponent implements OnInit {
  constructor(private GetPhotos: GetPhotosService, protected sanitizer: DomSanitizer) {}

  @Output() selectedImg: EventEmitter<string> = new EventEmitter();

  img = '';
  imgs = [];
  selectImg: string;

  slideOpts = {
    effect: 'flip',
    slidesPerView: 2,
    loop: false,
    centeredSlides: true,
    spaceBetween: 30,
    zoom: false,
  };

  ngOnInit() {
    this.imgs = this.GetPhotos.getPhotos();
  }

  changeImg(img) {
    this.selectedImg.emit(img);
  }

  addPhoto(e) {
    const file = e.target.files[0];
    const photo = URL.createObjectURL(file);
    this.imgs.push({
      id: this.imgs.length,
      img: this.sanitizer.bypassSecurityTrustResourceUrl(photo),
    });
  }
}
