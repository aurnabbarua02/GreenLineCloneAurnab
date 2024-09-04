import { Component } from '@angular/core';
import { SharedNavItemsService } from '../shared-nav-items.service';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {  
  constructor(public sharedNavItem: SharedNavItemsService){}

}
