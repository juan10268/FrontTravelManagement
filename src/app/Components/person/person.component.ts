import { Component, OnInit, EventEmitter } from '@angular/core';
import 'materialize-css';
import 'angular2-materialize';
import { NgForm } from '@angular/forms';
import { HotelService } from 'src/app/Entities/Hotel/hotel.service';
import { ToastrService } from 'ngx-toastr';
import { MaterializeAction, toast } from 'angular2-materialize';
import { PersonService } from 'src/app/Entities/Person/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  personIdentification: any;

  constructor(private toastrService: ToastrService, private oPersonService: PersonService) { }

  ngOnInit() {

  }

  addNewPerson(personForm: NgForm) {
    this.oPersonService.addPerson(personForm.value).subscribe((data: any) => {
      if (data.personID !== null) {
        toast('Works Fine', 3000);
      } else {
        toast('Not Works', 3000);
      }
    });
  }

  searchDocument(event) {
    this.oPersonService.searchForDocument(event.target.value).subscribe((data: any) => {
      if (data === true) {
        event.target.value = '';
        toast('Person ID exists already', 3000);
      }
    });
  }

  searchForEmailAvailability(event) {
    this.oPersonService.searchForEmailAvailability(event.target.value).subscribe((data: any) => {
      if (data === true) {
        event.target.value = '';
        toast('This email already exists', 3000);
      }
    });
  }
}
