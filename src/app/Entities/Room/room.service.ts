import { Injectable } from '@angular/core';
import { URLRoute } from '../urlroute';
import { Room } from './room.model';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../Hotel/hotel.model';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class RoomService {
    oHotel: Hotel;
    constructor(private oHttpClient: HttpClient, private urlRoute: URLRoute) {}

    readonly routeUrl = this.urlRoute.getRoute();

    addRoom(oRoom: Room, oTotalPrice) {
        const newRoom: Room = {
            IDRoom: oRoom.IDRoom,
            IDRoomHotel: oRoom.IDRoomHotel,
            roomName: oRoom.roomName,
            availableRoom: oRoom.availableRoom,
            totalPriceRoom: oTotalPrice,
            taxesPercentRooms: oRoom.taxesPercentRooms,
            basePriceRoom: oRoom.basePriceRoom,
            quantityRoom: oRoom.quantityRoom
        };
        return this.oHttpClient.post(this.routeUrl + '/Room/AddRoom', newRoom);
    }

    listRoomsByHotel(idHotel) {
        return this.oHttpClient.get(this.routeUrl + '/Room/SearchRoomsForHotel?idHotel=' + idHotel);
    }

    changeStatusRoom(idRoom, newStatus) {
        return this.oHttpClient.get(this.routeUrl + '/Room/ChangeStatusRoom?idRoom=' + idRoom + '&&newStatus=' + newStatus);
    }

    getListRooms() {
        return this.oHttpClient.get(this.routeUrl + '/Room/ListRooms');
    }

    updateRoom(roomUpdate: Room, specificFile, availabilityRoom, totalPrice) {
        roomUpdate.IDRoom = specificFile.idRoom;
        if (roomUpdate.roomName === '') {
            roomUpdate.roomName = specificFile.roomName;
        }
        if (availabilityRoom === undefined) {
            roomUpdate.availableRoom = specificFile.availableRoom;
        }
        if (typeof roomUpdate.IDRoomHotel) {
            roomUpdate.IDRoomHotel = specificFile.idRoom;
        }
        if (typeof roomUpdate.quantityRoom) {
            roomUpdate.quantityRoom = specificFile.quantityRoom;
        }
        if (typeof roomUpdate.basePriceRoom) {
            roomUpdate.basePriceRoom = specificFile.basePriceRoom;
        }
        if (typeof roomUpdate.taxesPercentRooms) {
            roomUpdate.taxesPercentRooms = specificFile.taxesPercentRooms;
        }
        if (typeof totalPrice) {
            roomUpdate.totalPriceRoom = specificFile.totalPriceRoom;
        }
        return this.oHttpClient.post(this.routeUrl + '/Room/UpdateRoom', roomUpdate);
    }
}
