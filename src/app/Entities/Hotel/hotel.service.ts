import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from './hotel.model';
import { URLRoute } from '../urlroute';

@Injectable()
export class HotelService {
    constructor(private oHttpClient: HttpClient, private urlRoute: URLRoute) {}

    readonly routeUrl = this.urlRoute.getRoute();

    addHotel(oHotel: Hotel) {
        if (oHotel.availableHotel === '') {
            oHotel.availableHotel = 'false';
        }
        const newHotel: Hotel = {
            IDHotel: oHotel.IDHotel,
            nameHotel: oHotel.nameHotel,
            addressHotel: oHotel.addressHotel,
            availableHotel: oHotel.availableHotel,
            locationHotel: oHotel.locationHotel
        };
        return this.oHttpClient.post(this.routeUrl + '/Hotel/AddHotel', newHotel);
    }

    getHotelsList() {
        return this.oHttpClient.get(this.routeUrl + '/Hotel/ListHotels');
    }

    changeStatusHotel(idHotel, newStatus) {
        return this.oHttpClient.get(this.routeUrl + '/Hotel/ChangeStatusHotel?idHotel=' + idHotel + '&newStatus=' + newStatus);
    }

    searchForLocationHotel(locationHotel) {
        return this.oHttpClient.get(this.routeUrl + '/Hotel/HotelsByLocation?locationHotel=' + locationHotel);
    }

    updateHotel(updateHotel: Hotel, specificFile, availabilityHotel) {
        updateHotel.IDHotel = specificFile.idHotel;
        if (availabilityHotel === undefined) {
            updateHotel.availableHotel = specificFile.availableHotel;
        }
        if (updateHotel.addressHotel === '') {
            updateHotel.addressHotel = specificFile.addressHotel;
        }
        if (updateHotel.locationHotel === '') {
            updateHotel.locationHotel = specificFile.locationHotel;
        }
        if (updateHotel.nameHotel === '') {
            updateHotel.nameHotel = specificFile.nameHotel;
        }
        return this.oHttpClient.post(this.routeUrl + '/Hotel/UpdateHotel', updateHotel);
    }
}
