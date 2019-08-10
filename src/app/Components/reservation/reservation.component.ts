import { Component, OnInit, EventEmitter } from '@angular/core';
import { HotelService } from 'src/app/Entities/Hotel/hotel.service';
import { PersonService } from 'src/app/Entities/Person/person.service';
import { RoomService } from 'src/app/Entities/Room/room.service';
import { MaterializeAction, toast } from 'angular2-materialize';
import { ReservationService } from 'src/app/Entities/Reservation/reservation.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  oSearchHotel: any[];
  oSearchPerson: any[];
  personName: any;
  phonePersonReservation: any;
  oLstHotels: any[];
  oLstRooms: any[];
  oIdRoom: any;
  oReservation: any;
  oLstReservations: any[];
  oLstSpecificReservation: any[] = [];
  reasonWhyNotShow: any;
  modalActions1 = new EventEmitter<string | MaterializeAction>();
  modalActions2 = new EventEmitter<string | MaterializeAction>();
  model1Params = [ {
    dismissible: false, complete: () => { console.log('Closed'); }
  }];
  model2Params = [ {
    dismissible: false, complete: () => { console.log('Closed'); }
  }];


  constructor(private oHotelService: HotelService, private oPersonService: PersonService, private oRoomService: RoomService,
              private oReservationService: ReservationService) { }

  ngOnInit() {
    this.getHotels();
    this.getAllReservations();
  }

  getHotels() {
    this.oHotelService.getHotelsList().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.oLstHotels = data;
      console.log(data);
    });
  }

  getAllReservations() {
    this.oReservationService.getAllReservations().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.oLstReservations = data;
    });
  }

  getReservationsForHotel(event) {
    if (event.name === 'IDHotel') {
      this.oSearchHotel = event.value;
    }
    this.getReservationForHotelAndPerson();
  }

  getReservationForPerson(event) {
    if (event.target.id === 'personIdentification') {
      this.oSearchPerson = event.target.value;
    }
    this.getReservationForHotelAndPerson();
  }

  getReservationForHotelAndPerson() {
    if (this.oSearchHotel !== null || this.oSearchPerson !== null) {
      this.oReservationService.searchReservationsForPersonAndHotel(this.oSearchPerson, this.oSearchHotel).subscribe((data: any) => {
        data.forEach(obj => obj.selector = false);
        this.oLstReservations = data;
        console.log(data);
      });
    }
  }

  lookForRooms(IDHotel) {
    this.oRoomService.listRoomsByHotel(IDHotel.value).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.oLstRooms = data;
    });
  }

  showButtonReservation(availableRoom) {
    let approvedButton = true;
    if (availableRoom === 'false') {
      approvedButton = false;
      this.reasonWhyNotShow = 'This room is not available';
    }
    return approvedButton;
  }

  searchDocument(event) {
    this.oPersonService.searchForPersonID(event.target.value).subscribe((data: any) => {
      if (data.personIdentification !== null) {
        this.personName = data[0].personName;
        this.phonePersonReservation = data[0].personPhone;
      } else {
        event.target.value = '';
        toast('Person ID exists already', 3000);
      }
    });
  }

  detailsAboutReservation(i) {
    if (i !== undefined) {
      for (const oReservations of this.oLstReservations) {
        if (oReservations.idReservation === i.idReservation) {
          this.oReservation = oReservations;
          this.oLstSpecificReservation.push(this.oReservation);
        }
      }
      this.openModalDetails();
    }
  }

  viewMoreAboutReservation(i) {
    this.oIdRoom = i.idRoom;
    this.openReservationModal();
  }

  openModalDetails() {
    this.modalActions2.emit({ action: 'modal', params: ['open'] });
  }

  openReservationModal() {
    this.modalActions1.emit({ action: 'modal', params: ['open'] });
  }

  addReservation(oForm: NgForm) {
    this.oReservationService.addReservation(oForm.value, this.phonePersonReservation, this.oIdRoom).subscribe((data: any) => {
      if (data.personID !== null) {
        toast('Works Fine', 3000);
      } else {
        toast('Not Works', 3000);
      }
    });
    this.closeModal();
  }

  cancelReservation(idReservation) {
    this.oReservationService.cancelReservation(idReservation).subscribe((data: any) => {
      if (data.idReservation != null) {
        toast('Reservation cancelled', 3000);
      } else {
        toast('Problem cancelling this reservation' , 3000);
      }
    });
    this.closeDetailsReservationModal();
    this.getAllReservations();
  }

  closeDetailsReservationModal() {
    this.modalActions2.emit({ action: 'modal', params: ['close'] });
  }

  closeModal() {
    this.modalActions1.emit({ action: 'modal', params: ['close'] });
  }
}
