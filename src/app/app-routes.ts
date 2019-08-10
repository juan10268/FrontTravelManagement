import { Routes } from '@angular/router';
import { RoomComponent } from './Components/room/room.component';
import { HotelComponent } from './Components/hotel/hotel.component';
import { ReservationComponent } from './Components/reservation/reservation.component';
import { LoginComponent } from './Components/login/login.component';
import { PersonComponent } from './Components/person/person.component';

export const AppRoutes: Routes = [
    {path: '', redirectTo: '/hotel', pathMatch: 'full'},
    {path: 'room', component: RoomComponent},
    {path: 'hotel', component: HotelComponent},
    {path: 'reservation', component: ReservationComponent},
    {path: 'person', component: PersonComponent}
 ];
