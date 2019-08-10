import { Component, OnInit, EventEmitter } from '@angular/core';
import { HotelService } from 'src/app/Entities/Hotel/hotel.service';
import { RoomService } from 'src/app/Entities/Room/room.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { toast, MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  modalActions1 = new EventEmitter<string | MaterializeAction>();
  oLstHotels: any[];
  oLstRooms: any[];
  oBasePriceRoom: number;
  oTaxesPrice: number;
  oSumTaxesBasePrice: number;
  oTotalPrice: any;
  uBasePriceRoom: number;
  uTaxesPrice: number;
  uSumTaxesBasePrice: number;
  uTotalPrice: any;
  oRoomInList: any;
  oLstSpecifiedRoom: any[] = [];
  statementPrice: any;
  uStatementPrice: any;
  checkboxActive: any;
  model1Params = [ {
    dismissible: false, complete: () => { console.log('Closed'); }
  }];

  constructor(private oHotelService: HotelService, private oRoomService: RoomService, private toastrService: ToastrService) {}

  ngOnInit() {
    this.getHotelsList();
    this.getRoomsList();
  }

  getRoomsList() {
    this.oRoomService.getListRooms().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.oLstRooms = data;
    });
  }

  getHotelsList() {
    this.oHotelService.getHotelsList().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.oLstHotels = data;
    });
  }

  addPrices(event) {
    if (event.target.id === 'basePriceRoom') {
      this.oBasePriceRoom = event.target.value;
    } else if (event.target.id === 'taxesPercentRooms') {
      this.oTaxesPrice = event.target.value;
    }
    if (this.oBasePriceRoom != null && this.oTaxesPrice != null) {
      this.oSumTaxesBasePrice = this.oBasePriceRoom * (this.oTaxesPrice / 100);
      this.statementPrice = 'Taxes Cost: $' + this.oSumTaxesBasePrice;
      this.oTotalPrice = +this.oBasePriceRoom + +this.oSumTaxesBasePrice;
    }
  }

  updatePrices(event) {
    if (event.target.id === 'basePriceRoom') {
      this.uBasePriceRoom = event.target.value;
    } else if (event.target.id === 'taxesPercentRooms') {
      this.uTaxesPrice = event.target.value;
    }
    if (this.uBasePriceRoom != null && this.uTaxesPrice != null) {
      this.uSumTaxesBasePrice = this.uBasePriceRoom * (this.uTaxesPrice / 100);
      this.uStatementPrice = 'Taxes Cost: $' + this.uSumTaxesBasePrice;
      this.uTotalPrice = +this.uBasePriceRoom + +this.uSumTaxesBasePrice;
    }
  }

  addNewRoom(form: NgForm) {
    this.oRoomService.addRoom(form.value, this.oTotalPrice).subscribe((data: any) => {
      if (data === true) {
        toast('Works Fine', 3000);
      } else {
        toast('Not Works', 3000);
      }
    });
  }

  viewMoreAboutThisRoom(i) {
    if (i !== undefined) {
      for (const oRoom of this.oLstRooms) {
        if (oRoom.idRoom === i.idRoom) {
          this.oRoomInList = oRoom;
          this.oLstSpecifiedRoom.push(this.oRoomInList);
        }
      }
      this.openModal();
    }
  }

  changeStatusRoom(idRoom, availability) {
    const newStatus = availability.target.checked;
    this.checkboxActive = newStatus;
    this.oRoomService.changeStatusRoom(idRoom, newStatus).subscribe((data: any) => {
      if (data.idRoom != null) {
        toast('Works fine', 3000);
      } else {
        toast('Not Works', 3000);
      }
    });
    this.getHotelsList();
  }

  searchForHotelPerHotel(oHotelID) {
    this.oRoomService.listRoomsByHotel(oHotelID.value).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.oLstRooms = data;
    });
  }

  updateRoom(updateForm, specificForm) {
    this.oRoomService.updateRoom(updateForm.value, specificForm, this.checkboxActive, this.uTotalPrice).subscribe((data: any) => {
      if (data.success) {
        toast('Works fine', 3000);
      } else {
        toast('Not Works', 3000);
      }
    });
    this.closeModal();
  }

  openModal() {
    this.modalActions1.emit({ action: 'modal', params: ['open'] });
  }

  closeModal() {
    this.modalActions1.emit({ action: 'modal', params: ['close'] });
    this.oLstSpecifiedRoom.splice(0);
  }
}
