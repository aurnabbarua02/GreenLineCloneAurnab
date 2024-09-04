import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SharedNavItemsService {

  constructor() { }
  navitems = ['Home', 'About us', 'Service', 'Query', 'Contact us', 'Album']
  navitemLocation = ['/home', '/about-us', '/service', '/query', '/contact', '/album']
  selectedIndex: number = 0;
  setActive(index: number) {
    this.selectedIndex = index;
  }
  getRouterLink(index: number){
    return this.navitemLocation[index];
  }  
 

}
