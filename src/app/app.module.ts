import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MaterializeModule} from 'angular2-materialize';
import 'materialize-css';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './Components/room/room.component';
import { HotelComponent } from './Components/hotel/hotel.component';
import { ReservationComponent } from './Components/reservation/reservation.component';
import { LoginComponent } from './Components/login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routes';
import { HotelService } from './Entities/Hotel/hotel.service';
import { HttpClientModule } from '@angular/common/http';
import { URLRoute } from './Entities/urlroute';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './Components/person/person.component';
import { PersonService } from './Entities/Person/person.service';
import { RoomService } from './Entities/Room/room.service';
import { ReservationService } from './Entities/Reservation/reservation.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HotelComponent,
    ReservationComponent,
    LoginComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    MaterializeModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [HotelService, URLRoute, PersonService, RoomService, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
