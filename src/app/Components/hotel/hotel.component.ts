import { Component, OnInit, EventEmitter } from '@angular/core';
import 'materialize-css';
import 'angular2-materialize';
import { NgForm } from '@angular/forms';
import { HotelService } from 'src/app/Entities/Hotel/hotel.service';
import { ToastrService } from 'ngx-toastr';
import { MaterializeAction, toast } from 'angular2-materialize';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  modalActions1 = new EventEmitter<string | MaterializeAction>();
  oLstHotels: any[];
  checkboxActive: any;
  specifiedHotel: any[] = [];
  oHotel: any;
  oLstLocationHotel: any[];
  model1Params = [ {
    dismissible: false, complete: () => { console.log('Closed'); }
  }];


  constructor(private oHotelService: HotelService, private oToast: ToastrService) { }

  ngOnInit() {
    this.getHotelsList();
  }

  addNewHotel(oForm: NgForm) {
    this.oHotelService.addHotel(oForm.value).subscribe((data: any) => {
      if (data.success) {
        toast('Works fine', 3000);
      } else {
        toast('Not Works', 3000);
      }
    });
  }

  getHotelsList() {
    this.oHotelService.getHotelsList().subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.oLstHotels = data;
    });
  }

  onChangeLocation(locationHotel) {
    this.oHotelService.searchForLocationHotel(locationHotel.value).subscribe((data: any) => {
      data.forEach(obj => obj.selector = false);
      this.oLstLocationHotel = data;
      if (this.oLstLocationHotel.length > 0) {
        this.oLstHotels = this.oLstLocationHotel;
      }
    });
  }

  viewMoreDetailsAboutHotel(i) {
    if (i !== undefined) {
      for (const oHotels of this.oLstHotels) {
        if (oHotels.idHotel === i.idHotel) {
          this.oHotel = oHotels;
          this.specifiedHotel.push(this.oHotel);
        }
      }
      this.openModal();
    }
  }

  updateHotel(updateForm, specificForm) {
    this.oHotelService.updateHotel(updateForm.value, specificForm, this.checkboxActive).subscribe((data: any) => {
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
    this.specifiedHotel.splice(0);
  }

  changeStatusHotel(idHotel, availability) {
    const newStatus = availability.target.checked;
    this.checkboxActive = newStatus;
    this.oHotelService.changeStatusHotel(idHotel, newStatus).subscribe((data: any) => {
      if (data.idHotel != null) {
        toast('Works fine', 3000);
      } else {
        toast('Not Works', 3000);
      }
    });
    this.getHotelsList();
  }
}
