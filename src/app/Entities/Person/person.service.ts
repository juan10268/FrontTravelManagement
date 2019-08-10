import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLRoute } from '../urlroute';
import { Person } from './person.model';

@Injectable()
export class PersonService {

  constructor(private oHttpClient: HttpClient, private urlRoute: URLRoute) {}

  readonly routeUrl = this.urlRoute.getRoute();

  addPerson(oPerson: Person) {
    const newPerson: Person = {
      personIdentification: oPerson.personIdentification,
      personTypeDocument: oPerson.personTypeDocument,
      personName: oPerson.personName,
      personDateBirth: oPerson.personDateBirth,
      personGender: oPerson.personGender,
      personEmail: oPerson.personEmail,
      personPhone: oPerson.personPhone,
      personEmergencyContactName: oPerson.personEmergencyContactName,
      personEmergencyContactPhone: oPerson.personEmergencyContactPhone
    };
    return this.oHttpClient.post(this.routeUrl + '/Person/AddPerson', newPerson);
  }

  searchForDocument(personIdentification) {
    return this.oHttpClient.get(this.routeUrl + '/Person/SearchForDocument?personIdentification=' + personIdentification);
  }

  searchForEmailAvailability(emailPerson) {
    return this.oHttpClient.get(this.routeUrl + '/Person/SearchForEmail?personEmail=' + emailPerson);
  }

  searchForPersonID(idPerson) {
    return this.oHttpClient.get(this.routeUrl + '/Person/PersonByID?idPerson=' + idPerson);
  }
}
