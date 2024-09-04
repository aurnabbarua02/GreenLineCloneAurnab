import { Component } from '@angular/core';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  images = [
    'https://greenlinebd.com/wp-content/uploads/2020/08/07.jpg',
    'https://greenlinebd.com/wp-content/uploads/2020/08/DSC_0228-2048x1371.jpg',
    'https://greenlinebd.com/wp-content/uploads/2020/08/DSC_0257-2048x1371.jpg',
    'https://greenlinebd.com/wp-content/uploads/2020/08/DSC_0413.jpg',
    'https://greenlinebd.com/wp-content/uploads/2020/08/DSC_0442.jpg',
    'https://greenlinebd.com/wp-content/uploads/2020/08/home-slider2-1.jpg',
    'https://greenlinebd.com/wp-content/uploads/2020/08/home-slider3-1.jpg',
    'https://greenlinebd.com/wp-content/uploads/2020/08/home-slider4-1.jpg'
  ]
}
