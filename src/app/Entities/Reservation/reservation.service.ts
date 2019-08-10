import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLRoute } from '../urlroute';
import { Reservation } from './reservation.model';
import { ReturnStatement } from '@angular/compiler';

@Injectable()
export class ReservationService {
    constructor(private oHttpClient: HttpClient, private urlRoute: URLRoute) {}

    readonly routeUrl = this.urlRoute.getRoute();

    addReservation(oReservation: Reservation, phonePersonReservation, idRoom) {
        oReservation.reservationRoomID = idRoom;
        oReservation.phonePersonReservation = phonePersonReservation;
        if (typeof oReservation.activeReservation) {
            oReservation.activeReservation = true;
        }
        console.log(oReservation);
        const newReservation: Reservation = {
            reservationPersonID: oReservation.reservationPersonID,
            IDReservation: oReservation.IDReservation,
            reservationRoomID: oReservation.reservationRoomID,
            activeReservation: oReservation.activeReservation,
            phonePersonReservation: oReservation.phonePersonReservation,
            sinceReservation: oReservation.sinceReservation,
            untilReservation: oReservation.untilReservation,
            quantityPersonReservation: oReservation.quantityPersonReservation,
            descriptionReservation: oReservation.descriptionReservation
        };
        return this.oHttpClient.post(this.routeUrl + '/Reservations/AddReservation', newReservation);
    }

    getAllReservations() {
        return this.oHttpClient.get(this.routeUrl + '/Reservations/getAllReservations');
    }

    searchReservationsForPersonAndHotel(personID , hotelId) {
        if (typeof personID === 'undefined') {
            personID = null;
        } else if (typeof hotelId === 'undefined') {
            hotelId = null;
        }
        const completeGet = '?personId=' + personID + '&&hotelId=' + hotelId;
        return this.oHttpClient.get(this.routeUrl + '/Reservations/SearchReservationsForPersonAndHotel' + completeGet);
    }

    cancelReservation(idReservation) {
        return this.oHttpClient.get(this.routeUrl + '/Reservations/CancelReservation?idReservation=' + idReservation);
    }
}
