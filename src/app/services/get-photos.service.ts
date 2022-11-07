import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetPhotosService {
  constructor() {}
  public initPhoto() {
    const allImgs = this.getPhotos();
    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const ramdomImg = getRandomInt(0, allImgs.length);
    const img: string = allImgs[ramdomImg].img;
    return img;
  }
  public getPhotos() {
    const imgs = [
      { id: 0, img: '../../assets/img/1.jpg' },
      { id: 1, img: '../../assets/img/2.jpg' },
      { id: 2, img: '../../assets/img/3.jpg' },
      { id: 3, img: '../../assets/img/4.jpg' },
      { id: 4, img: '../../assets/img/5.jpg' },
      { id: 5, img: '../../assets/img/6.jpg' },
    ];
    return imgs;
  }
}
