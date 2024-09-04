import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { QueryComponent } from './query/query.component';
import { ContactComponent } from './contact/contact.component';
import { AlbumComponent } from './album/album.component';
import { CounterDhakaComponent } from './counter-dhaka/counter-dhaka.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'query', component: QueryComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'album', component: AlbumComponent},
    {path: 'counter-dhaka', component: CounterDhakaComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})
export class AppRoutingModule { }