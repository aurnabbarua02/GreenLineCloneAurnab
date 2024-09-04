import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { SharedNavItemsService } from './shared-nav-items.service';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { QueryComponent } from './query/query.component';
import { ContactComponent } from './contact/contact.component';
import { AlbumComponent } from './album/album.component';
import { CounterDhakaComponent } from './counter-dhaka/counter-dhaka.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent, ServiceComponent, QueryComponent, ContactComponent, AlbumComponent, CounterDhakaComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // titles = ['Green Line - E-ticketing', 'About us - Green Line', 'Service - Green Line'];

  
  constructor(public sharedNavItem: SharedNavItemsService){}
}
