import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { SharedNavItemsService } from '../shared-nav-items.service';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, FooterComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {  
  constructor(public sharedNavItem: SharedNavItemsService){}
    
}
