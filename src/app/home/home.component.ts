import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule, Router } from '@angular/router';
import { SharedNavItemsService } from '../shared-nav-items.service';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, HeaderComponent, FooterComponent, RouterModule, GalleryModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  
  constructor(public sharedNavItem: SharedNavItemsService, public router: Router){}
  

  images!: GalleryItem[];

  ngOnInit() {
    this.images = [
      new ImageItem({ src: 'https://greenlinebd.com/wp-content/uploads/2020/08/home-slider2.jpg'}),
      new ImageItem({ src: 'https://greenlinebd.com/wp-content/uploads/2020/08/home-slider4.jpg'}),
      new ImageItem({ src: 'https://greenlinebd.com/wp-content/uploads/2020/08/home-slider3.jpg'})
    ];
  }

  section2_icon = ['work', 'business', 'phone', 'location_on']
  section2_header = ['About us', 'Service', 'Query', 'Contact us']
  section2_description = [
    'Find details about our service...',
    'See our details services...',
    'Ask us, if you have any question...',
    'Visit our office for help...'    
  ]
  counters = ['Dhaka', 'Chattogram', 'Khulna', 'Sylhet', 'Rangpur']
  selectedCounter: string = ""
  counterIndex!: number
  counterLocation = ['/counter-dhaka']
  
  onSelectChange(value: any) {
    this.selectedCounter = value.target.value;
    this.counterIndex = this.counters.indexOf(this.selectedCounter)
    if (this.counterIndex !== -1) {
      this.router.navigate([this.counterLocation[this.counterIndex]]);
    }
  }

}
