(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/hotel/hotel.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/hotel/hotel.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n    <h4 align=\"center\">Hotel Page</h4>\n    <div class=\"row\">\n        <div class=\"col s12\">\n            <ul class=\"tabs\">\n                <li class=\"tab col s6\"><a class=\"active\" href=\"#addForm\">Add new hotel</a></li>\n                <li class=\"tab col s6\"><a href=\"#listForm\">Hotel list</a></li>\n            </ul>\n        </div>\n        <div id=\"addForm\" class=\"col s12\">\n            <form class=\"col s12 border border-dark\" #newHotelForm=\"ngForm\" (ngSubmit)=\"addNewHotel(newHotelForm)\">\n                <div style=\"width: 1100px;position: relative;margin-left:auto;margin-right: auto;\">\n                    <div class=\"row\">        \n                        <div class=\"input-field col s6\">\n                            <input type=\"text\" class=\"validate\" id=\"nameHotel\" name=\"nameHotel\" placeholder=\"Name Hotel\" ngModel #nameHotel=\"ngModel\" minlength=\"3\">\n                        </div>\n                        <div class=\"input-field col s6\">\n                            <input type=\"text\" class=\"validate\" id=\"addressHotel\" name=\"addressHotel\" placeholder=\"Address Hotel\" ngModel #addressHotel=\"ngModel\" required minlength=\"3\">\n                        </div>\n                    </div>\n                    <div class=\"row\">                        \n                        <div class=\"input-field col s12\" align=\"center\">\n                            <input type=\"text\" class=\"validate\" id=\"locationHotel\" name=\"locationHotel\" placeholder=\"Hotel location\" ngModel #locationHotel=\"ngModel\" required minlength=\"3\">\n                        </div>\n                    </div>\n                    <div>\n                        <label>\n                            <input type=\"checkbox\" checked=\"checked\" id=\"availableHotel\" name=\"availableHotel\" ngModel #availableHotel=\"ngModel\">\n                            <span>Available</span>\n                        </label>\n                    </div>    \n                    <div class=\"row\">\n                        <div class=\"center-align input-field col s12\">\n                            <button class=\"btn-large btn-submit\" type=\"submit\">Add hotel</button>\n                        </div>\n                    </div>        \n                </div>            \n            </form>\n        </div>\n        <div id=\"listForm\" class=\"col s12\">\n            <div class=\"col s12 border border-dark\" align=\"center\">\n                <div class=\"input-field col s9\">\n                    <input type=\"text\" placeholder=\"Search your hotel for location\" (change)=\"onChangeLocation(nameHotel)\" class=\"validate\" name=\"nameHotel\" ngModel #nameHotel=\"ngModel\" maxlength=\"10\">\n                </div>                \n            </div>\n            <div class=\"row\">\n                <div class=\"col s12\" align=\"center\">\n                    <h5>Hotel List</h5>\n                </div>\n                <table>\n                    <thead>\n                        <th>Name Hotel</th>\n                        <th>Location Hotel</th>\n                        <th>Address Hotel</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let i of oLstHotels\">\n                            <td>{{i.nameHotel}}</td>                            \n                            <td>{{i.locationHotel}}</td>\n                            <td>{{i.addressHotel}}</td>\n                            <a (click)=\"viewMoreDetailsAboutHotel(i)\" class=\"waves-effect waves-light btn-small\">Hotel details</a>                        \n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"modal\" materialize=\"modal\" [materializeParams]=\"model1Params\" [materializeActions]=\"modalActions1\">\n                    <div class=\"modal-content\">\n                        <div class=\"container\">\n                            <form class=\"col s12 border border-dark\" #updateHotelForm=\"ngForm\" *ngFor=\"let k of specifiedHotel\">\n                                <h5 class=\"center-align\">More hotel details</h5>\n                                <div class=\"row\">\n                                    <div class=\"input-field col s4\">\n                                        <input readonly=\"readonly\" value=\"{{k.idHotel}}\" name=\"ID Hotel\">\n                                        <span>ID Hotel</span>\n                                    </div>\n                                    <div class=\"input-field col s8\">\n                                        <input name=\"Name Hotel\" placeholder=\"Write for modify\" id=\"nameHotel\" name=\"nameHotel\" ngModel #nameHotel=\"ngModel\" required minlength=\"3\">\n                                        <span>Name Hotel = {{k.nameHotel}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"input-field col s6\">\n                                        <input name=\"Address Hotel\" placeholder=\"Write for modify\" id=\"locationHotel\" name=\"locationHotel\" ngModel #locationHotel=\"ngModel\" required minlength=\"3\">\n                                        <span>Location Hotel = {{k.locationHotel}} </span>\n                                    </div>\n                                    <div class=\"input-field col s6\">\n                                        <input name=\"Location Hotel\" placeholder=\"Write for modify\" id=\"addressHotel\" name=\"addressHotel\" ngModel #addressHotel=\"ngModel\" required minlength=\"3\">\n                                        <span>Address Hotel = {{k.addressHotel}} </span>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <label>\n                                        <div *ngIf=\"k.availableHotel; else notCheck\">\n                                            <input type=\"checkbox\" checked= \"checked\" (click)='changeStatusHotel(k.idHotel,$event)'/>\n                                            <span>Available Hotel</span>\n                                        </div>\n                                        <ng-template #notCheck>\n                                            <input type=\"checkbox\" (click)='changeStatusHotel(k.idHotel,$event)'/>                                                \n                                            <span>Available Hotel</span>\n                                        </ng-template>\n                                    </label>  \n                                </div>\n                                <div class=\"row\">\n                                    <a (click)=\"updateHotel(updateHotelForm, k)\" class=\"center-align waves-effect waves-light btn-small\">Update</a>    \n                                    <a (click)=\"closeModal()\" class=\"center-align waves-effect waves-light btn-small\">Close</a>        \n                                </div>   \n                            </form>                           \n                        </div>                       \n                    </div>                    \n                </div>                   \n            </div>    \n        </div>\n    </div>    \n</html>    \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/person/person.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/person/person.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n    <h4 align=\"center\">Person Registration Form</h4>\n    <div class=\"container\">\n        <div id=\"addForm\" class=\"col s12\">\n            <form class=\"col s12 border border-dark\" #newPersonForm=\"ngForm\" (ngSubmit)=\"addNewPerson(newPersonForm)\">\n                <div style=\"width: 1100px;position: relative;margin-left:auto;margin-right: auto;\">\n                    <div class=\"row\">\n                        <div class=\"input-field col s6\">\n                            <input type=\"number\" class=\"validate\" id=\"personIdentification\" name=\"personIdentification\" placeholder=\"ID\" (change)=\"searchDocument($event)\" ngModel #personIdentification=\"ngModel\" minlength=\"3\">\n                        </div>\n                        <div class=\"input-field col s6\">\n                            <input type=\"text\" class=\"validate\" id=\"personName\" name=\"personName\" placeholder=\"Name\" ngModel #personName=\"ngModel\" required minlength=\"3\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"input-field col s4\" align=\"center\">\n                            <input type=\"Date\" class=\"validate\" id=\"personDateBirth\" name=\"personDateBirth\" placeholder=\"Date of Birth\" ngModel #personDateBirth=\"ngModel\" required minlength=\"3\">\n                        </div>\n                        <div class=\"input-field col s4\" align=\"center\">\n                             <input type=\"email\" class=\"validate\" id=\"personEmail\" name=\"personEmail\" placeholder=\"Email\" (change)=\"searchForEmailAvailability($event)\" ngModel #personEmail=\"ngModel\" required minlength=\"3\">\n                        </div>\n                        <div class=\"input-field col s4\" align=\"center\">\n                            <input type=\"text\" class=\"validate\" id=\"personPhone\" name=\"personPhone\" placeholder=\"Phone Number\" ngModel #personPhone=\"ngModel\" required minlength=\"3\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col s6\">\n                            <label>Gender</label>\n                            <select class=\"browser-default\" id=\"personGender\" name=\"personGender\" ngModel #personGender=\"ngModel\" required>\n                                <option value=\"Masculine\">Masculine</option>\n                                <option value=\"Femenine\">Femenine</option>\n                                <option value=\"Other\">Other</option>\n                            </select>                             \n                        </div>                  \n                        <div class=\"col s6\">\n                            <label>Document Type</label>\n                            <select class=\"browser-default\" id=\"personTypeDocument\" name=\"personTypeDocument\"  ngModel #personTypeDocument=\"ngModel\" required>\n                                <option value=\"CC\">CC</option>\n                                <option value=\"TI\">TI</option>\n                                <option value=\"CE\">CE</option>\n                                <option value=\"RC\">RC</option>\n                            </select>                             \n                        </div>\n                        <br><br><br>\n                        <div class=\"divider\"></div>\n                        <div class=\"section\">\n                            <h5>Emergency Contact Information</h5>\n                            <div class=\"input-field col s6\" align=\"center\">\n                                <input type=\"text\" class=\"validate\" id=\"personEmergencyContactName\" name=\"personEmergencyContactName\" placeholder=\"Emergency Contact Name\" ngModel #personEmergencyContactName=\"ngModel\" required minlength=\"3\">\n                            </div>\n                            <div class=\"input-field col s6\" align=\"center\">\n                                <input type=\"text\" class=\"validate\" id=\"personEmergencyContactPhone\" name=\"personEmergencyContactPhone\" placeholder=\"Emergency Contact Phone\" ngModel #personEmergencyContactPhone=\"ngModel\" required minlength=\"3\">\n                            </div>                        \n                        </div>\n                        <div class=\"row\">\n                            <div class=\"center-align input-field col s12\">\n                                <button class=\"btn-large btn-submit\" type=\"submit\">Add Person</button>                    \n                            </div>\n                        </div>                           \n                    </div>                      \n                </div>\n            </form>        \n        </div>\n    </div>\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/reservation/reservation.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/reservation/reservation.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n    <h4 align=\"center\">Reservation Page</h4>\n    <div class=\"row\">\n        <div class=\"col s12\">\n            <ul class=\"tabs\">\n                <li class=\"tab col s6\"><a class=\"active\" href=\"#addForm\">Add new reservation</a></li>\n                <li class=\"tab col s6\"><a href=\"#listForm\">Reservation list</a></li>\n            </ul>\n        </div>\n        <div id=\"addForm\" class=\"col s12\">\n            <form class=\"col s12 border border-dark\" #reservationForm=\"ngForm\">\n                <div style=\"width: 1100px;position: relative;margin-left:auto;margin-right: auto;\">\n                    <div class=\"row\">                       \n                        <div class=\"col s9\">\n                            <span>Select for hotel</span>\n                            <select class=\"browser-default\" id=\"IDRoomHotel\" name=\"IDRoomHotel\" (change)=\"lookForRooms(IDRoomHotel)\" ngModel #IDRoomHotel=\"ngModel\" required>\n                                <option *ngFor=\"let i of oLstHotels\" [ngValue]=\"i.idHotel\">{{i.nameHotel}} - {{i.locationHotel}}</option>\n                            </select>                             \n                        </div>                        \n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col s12\" align=\"center\">\n                            <h5>Rooms List Per Hotel</h5>\n                        </div>\n                        <table>\n                            <thead>\n                                <th>Room Name</th>\n                                <th>Base Price</th>\n                                <th>Taxes Percent</th>                                \n                                <th>Price Room</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let i of oLstRooms\">\n                                    <td>{{i.roomName}}</td>\n                                    <td>{{i.basePriceRoom | currency}}</td>\n                                    <td>{{i.totalPriceRoom | percent}}</td>                            \n                                    <td>{{i.totalPriceRoom | currency}}</td>\n                                    <div *ngIf=\"showButtonReservation(i.availableRoom); else notCheck\">\n                                        <a (click)=\"viewMoreAboutReservation(i)\" class=\"waves-effect waves-light btn-small\">Reservation Details</a>                        \n                                    </div>\n                                    <ng-template #notCheck>\n                                        <span>{{reasonWhyNotShow}}</span>\n                                    </ng-template>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div class=\"modal\" materialize=\"modal\" [materializeParams]=\"model1Params\" [materializeActions]=\"modalActions1\">\n                            <div class=\"modal-content\">\n                                <div class=\"container\">\n                                    \n                                        <h5 class=\"center-align\">Details about Reservation</h5>\n                                        <div class=\"row\">                        \n                                            <div class=\"input-field col s4\">\n                                                <input type=\"number\" class=\"validate\" id=\"reservationPersonID\" name=\"reservationPersonID\" placeholder=\"Person ID\" (change)=\"searchDocument($event)\" ngModel #reservationPersonID=\"ngModel\" minlength=\"3\">\n                                                <span>{{namePersonFound}}</span>\n                                            </div>\n                                            <div class=\"input-field col s4\">\n                                                <input type=\"text\" readonly=\"readonly\" id=\"reservationPersonName\" name=\"reservationPersonName\" value=\"{{personName}}\">\n                                                <span>Reservation Person Name</span>\n                                            </div>\n                                            <div class=\"input-field col s4\">\n                                                <input type=\"number\" readonly=\"readonly\" id=\"phonePersonReservation\" name=\"phonePersonReservation\" value=\"{{phonePersonReservation}}\">\n                                                <span>Reservation Person Phone</span>\n                                            </div>\n                                        </div>                       \n                                        <div class=\"row\">\n                                            <div class=\"input-field col s4\" align=\"center\">\n                                                <input type=\"Date\" class=\"validate\" id=\"sinceReservation\" name=\"sinceReservation\" placeholder=\"Date of Birth\" ngModel #sinceReservation=\"ngModel\" required minlength=\"3\">\n                                                <span>Since Reservation</span>\n                                            </div>\n                                            <div class=\"input-field col s4\" align=\"center\">\n                                                <input type=\"Date\" class=\"validate\" id=\"untilReservation\" name=\"untilReservation\" placeholder=\"Date of Birth\" ngModel #untilReservation=\"ngModel\" required minlength=\"3\">\n                                                <span>Until Reservation</span>\n                                            </div>\n                                            <div class=\"input-field col s4\">\n                                                <input type=\"number\" id=\"quantityPersonReservation\" name=\"quantityPersonReservation\" ngModel #quantityPersonReservation=\"ngModel\">\n                                                <span>Quantity Person Reservation</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"input-field col s12\">\n                                                <textarea id=\"descriptionReservation\" class=\"materialize-textarea\" name=\"descriptionReservation\" ngModel #descriptionReservation=\"ngModel\"></textarea>\n                                                <span>Description Reservation</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <a (click)=\"addReservation(reservationForm)\" class=\"center-align waves-effect waves-light btn-small\">Add Reservation</a>    \n                                            <a (click)=\"closeModal()\" class=\"center-align waves-effect waves-light btn-small\">Close</a>       \n                                        </div>                                       \n                                </div>                       \n                            </div>                    \n                        </div>\n                    </div>                          \n                </div>            \n            </form>\n        </div>\n        <div id=\"listForm\" class=\"col s12\">\n            <div class=\"col s12 border border-dark\" align=\"center\">\n                <div class=\"col s6\">\n                    <label>Select a Hotel</label>\n                    <select class=\"browser-default\" id=\"IDHotel\" name=\"IDHotel\" (change)=\"getReservationsForHotel(IDHotel)\" ngModel #IDHotel=\"ngModel\" required>\n                        <option *ngFor=\"let i of oLstHotels\" [ngValue]=\"i.idHotel\">{{i.nameHotel}} - {{i.locationHotel}}</option>\n                    </select>                             \n                </div>\n                <div class=\"input-field col s6\">\n                    <input type=\"number\" class=\"validate\" id=\"personIdentification\"  (change)=\"getReservationForPerson($event)\" name=\"personIdentification\" placeholder=\"Person ID\" minlength=\"3\">\n                    <span>{{namePersonFound}}</span>\n                </div>                \n            </div>\n            <div class=\"row\">\n                <div class=\"col s12\" align=\"center\">\n                    <h5>Reservation List</h5>\n                </div>\n                <table>\n                    <thead>\n                        <th>Person Name</th>\n                        <th>Since Reservation</th>\n                        <th>Until Reservation</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let k of oLstReservations\">\n                            <td>{{k.personName}}</td>                            \n                            <td>{{k.sinceReservation | date: 'dd/MM/yyyy'}}</td>\n                            <td>{{k.untilReservation | date: 'dd/MM/yyyy'}}</td>\n                            <div *ngIf=\"k.activeReservation; else notCheck\">\n                                <a (click)=\"detailsAboutReservation(k)\" class=\"waves-effect waves-light btn-small\">Reservation Details</a>                        \n                            </div>\n                            <ng-template #notCheck>\n                                <span>Reservation was cancelled</span>\n                            </ng-template>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"modal\" materialize=\"modal\" [materializeParams]=\"model2Params\" [materializeActions]=\"modalActions2\">\n                    <div class=\"modal-content\">\n                        <div class=\"container\">\n                            <form class=\"col s12 border border-dark\" #updateHotelForm=\"ngForm\" *ngFor=\"let a of oLstSpecificReservation\">\n                                <h5 class=\"center-align\">Reservation details</h5>\n                                <div class=\"row\">\n                                    <div class=\"input-field col s4\">\n                                        <input readonly=\"readonly\" value=\"{{a.personName}}\" name=\"personName\">\n                                        <span>Person Name Reservation</span>\n                                    </div>\n                                    <div class=\"input-field col s4\">\n                                        <input readonly=\"readonly\" value=\"{{a.phonePersonReservation}}\" name=\"personPhone\">\n                                        <span>Person Phone Reservation</span>\n                                    </div>\n                                    <div class=\"input-field col s4\">\n                                        <input readonly=\"readonly\" value=\"{{a.quantityPersonReservation}}\" name=\"quantityPersonReservation\">\n                                        <span>Quantity Person Reservation</span>\n                                    </div>\n                                </div>\n                                <div class=\"row\">                                    \n                                    <div class=\"input-field col s4\">\n                                        <input readonly=\"readonly\" value=\"{{a.roomName}}\" name=\"roomName\">\n                                        <span>Room Name</span>\n                                    </div>\n                                    <div class=\"input-field col s4\">\n                                        <input readonly=\"readonly\" value=\"{{a.sinceReservation |date: 'dd/MM/yyyy'}}\" name=\"sinceReservation\">\n                                        <span>Since Reservation</span>\n                                    </div>\n                                    <div class=\"input-field col s4\">\n                                        <input readonly=\"readonly\" value=\"{{a.untilReservation |date: 'dd/MM/yyyy'}}\" name=\"untilReservation\">\n                                        <span>Until Reservation</span>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <label>\n                                        <input type=\"checkbox\" checked= \"checked\" (click)='cancelReservation(a.idReservation)'/>\n                                        <span>Reservation Status</span>                                        \n                                    </label>  \n                                </div>\n                                <div class=\"row\">\n                                    <a (click)=\"closeDetailsReservationModal()\" class=\"center-align waves-effect waves-light btn-small\">Close</a>        \n                                </div>   \n                            </form>                           \n                        </div>                       \n                    </div>                    \n                </div>                   \n            </div>    \n        </div>\n    </div>    \n</html>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/room/room.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/room/room.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n    <h4 align=\"center\">Rooms Page</h4>\n    <div class=\"row\">\n        <div class=\"col s12\">\n            <ul class=\"tabs\">\n                <li class=\"tab col s6\"><a class=\"active\" href=\"#addForm\">Add new room for a hotel</a></li>\n                <li class=\"tab col s6\"><a href=\"#listForm\">Rooms list per hotel</a></li>\n            </ul>\n        </div>\n        <div id=\"addForm\" class=\"col s12\">\n            <form class=\"col s12 border border-dark\" #newRoomForm=\"ngForm\" (ngSubmit)=\"addNewRoom(newRoomForm)\">\n                <div style=\"width: 1100px;position: relative;margin-left:auto;margin-right: auto;\">\n                    <div class=\"row\" align=\"center\">\n                        <div class=\"col s7\">\n                            <label>Select a Hotel</label>\n                            <select class=\"browser-default\" id=\"IDRoomHotel\" name=\"IDRoomHotel\" ngModel #IDRoomHotel=\"ngModel\" required>\n                                <option *ngFor=\"let i of oLstHotels\" [ngValue]=\"i.idHotel\">{{i.nameHotel}} - {{i.locationHotel}}</option>\n                            </select>                             \n                        </div>                                             \n                    </div>\n                    <div class=\"row\">\n                        <div class=\"input-field col s6\">\n                            <input type=\"number\" class=\"validate\" id=\"quantityRoom\" name=\"quantityRoom\" placeholder=\"Quantity of rooms\" ngModel #quantityRoom=\"ngModel\" minlength=\"3\">\n                        </div>\n                        <div class=\"input-field col s6\">\n                            <input type=\"text\" class=\"validate\" id=\"roomName\" name=\"roomName\" placeholder=\"Room Name\" ngModel #roomName=\"ngModel\" minlength=\"3\">\n                        </div>\n                    </div>\n                    <div class=\"row\">                        \n                        <div class=\"input-field col s4\">\n                            <input type=\"number\" class=\"validate\" id=\"basePriceRoom\" name=\"basePriceRoom\" value=\"basePrice\" placeholder=\"Base price\" (change)=\"addPrices($event)\" ngModel #basePriceRoom=\"ngModel\" minlength=\"3\">\n                        </div>\n                        <div class=\"input-field col s4\">\n                            <input type=\"number\" class=\"validate\" id=\"taxesPercentRooms\" name=\"taxesPercentRooms\" placeholder=\"Tax Percent Room\" (change)=\"addPrices($event)\" ngModel #taxesPercentRooms=\"ngModel\" required minlength=\"3\">\n                            <span>{{statementPrice}}</span>\n                        </div>\n                        <div class=\"input-field col s4\">\n                            <input type=\"number\" readonly=\"readonly\" value=\"{{oTotalPrice}}\" class=\"validate\" id=\"totalPriceRoom\" name=\"totalPriceRoom\" ngModel #totalPriceRoom=\"ngModel\" minlength=\"3\">\n                            <span>Total Price Room</span>\n                        </div>                        \n                    </div>\n                    <div>\n                        <label>\n                            <input type=\"checkbox\" checked=\"checked\" id=\"availableHotel\" name=\"availableHotel\" ngModel #availableHotel=\"ngModel\">\n                            <span>Room Available</span>\n                        </label>\n                    </div>    \n                    <div class=\"row\">\n                        <div class=\"center-align input-field col s12\">\n                            <button class=\"btn-large btn-submit\" type=\"submit\">Add room</button>\n                        </div>\n                    </div>        \n                </div>            \n            </form>\n        </div>\n        <div id=\"listForm\" class=\"col s12\">\n            <div class=\"col s12 border border-dark\" align=\"center\">\n                <div class=\"col s12\">\n                    <span>Select for hotel</span>\n                    <select class=\"browser-default\" id=\"IDRoomHotel\" name=\"IDRoomHotel\" (change)=\"searchForHotelPerHotel(IDRoomHotel)\" ngModel #IDRoomHotel=\"ngModel\" required>\n                        <option *ngFor=\"let i of oLstHotels\" [ngValue]=\"i.idHotel\">{{i.nameHotel}} - {{i.locationHotel}}</option>\n                    </select>                             \n                </div>                \n            </div>\n            <div class=\"row\">\n                <div class=\"col s12\" align=\"center\">\n                    <h5>List of rooms per hotel</h5>\n                </div>\n                <table>\n                    <thead>\n                        <th>Room Name</th>\n                        <th>Quantity Room</th>\n                        <th>Total price Room</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let i of oLstRooms\">\n                            <td>{{i.roomName}}</td>                            \n                            <td>{{i.quantityRoom}}</td>\n                            <td>{{i.totalPriceRoom}}</td>\n                            <a (click)=\"viewMoreAboutThisRoom(i)\" class=\"waves-effect waves-light btn-small\">About this room</a>                        \n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"modal\" materialize=\"modal\" [materializeParams]=\"model1Params\" [materializeActions]=\"modalActions1\">\n                    <div class=\"modal-content\">\n                        <div class=\"container\">\n                            <form class=\"col s12 border border-dark\" #updateRoomForm=\"ngForm\" *ngFor=\"let k of oLstSpecifiedRoom\">\n                                <h5 class=\"center-align\">About this room</h5>\n                                <div class=\"row\">\n                                    <div class=\"input-field col s4\">\n                                        <input readonly=\"readonly\" value=\"{{k.idRoom}}\" name=\"ID Hotel\">\n                                        <span>ID Room</span>\n                                    </div>\n                                    <div class=\"input-field col s4\">\n                                        <input name=\"Name Hotel\" placeholder=\"Write for modify\" id=\"roomName\" name=\"roomName\" ngModel #roomName=\"ngModel\" required minlength=\"3\">\n                                        <span>Room Name = {{k.roomName}}</span>\n                                    </div>\n                                    <div class=\"input-field col s4\">\n                                        <input name=\"Quantity Room\" placeholder=\"Write for modify\" id=\"quantityRoom\" name=\"quantityRoom\" ngModel #quantityRoom=\"ngModel\" required minlength=\"3\">\n                                        <span>Quantity Room= {{k.quantityRoom}}</span>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"input-field col s4\">\n                                        <input type=\"number\" name=\"Base Price Room\" (change)=updatePrices($event) placeholder=\"Write for modify\" id=\"basePriceRoom\" name=\"basePriceRoom\" ngModel #basePriceRoom=\"ngModel\" required minlength=\"3\">\n                                        <span>Base Price Room= ${{k.basePriceRoom}} </span>\n                                    </div>\n                                    <div class=\"input-field col s4\">\n                                        <input type=\"number\" name=\"Tax Percent Room\" (change)=updatePrices($event) placeholder=\"Write for modify\" id=\"taxesPercentRooms\" name=\"taxesPercentRooms\" ngModel #taxesPercentRooms=\"ngModel\" required minlength=\"3\">\n                                        <span>Percent taxes= ${{k.taxesPercentRooms}}</span>\n                                        <br>\n                                        <span>{{uStatementPrice}}</span>\n                                    </div>\n                                    <div class=\"input-field col s4\">\n                                        <input name=\"Total price room\" value=\"{{uTotalPrice}}\" placeholder=\"Write for modify\" id=\"totalPriceRoom\" name=\"totalPriceRoom\" ngModel #totalPriceRoom=\"ngModel\" required minlength=\"3\">\n                                        <span>Total Price Room= ${{k.totalPriceRoom}} </span>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <label>\n                                        <div *ngIf=\"k.availableRoom; else notCheck\">\n                                            <input type=\"checkbox\" checked= \"checked\" (click)='changeStatusRoom(k.idRoom,$event)'/>\n                                            <span>Available Hotel</span>\n                                        </div>\n                                        <ng-template #notCheck>\n                                            <input type=\"checkbox\" (click)='changeStatusRoom(k.idRoom,$event)'/>                                                \n                                            <span>Available Room</span>\n                                        </ng-template>\n                                    </label>  \n                                </div>\n                                <div class=\"row\">\n                                    <a (click)=\"updateRoom(updateRoomForm, k)\" class=\"center-align waves-effect waves-light btn-small\">Update</a>    \n                                    <a (click)=\"closeModal()\" class=\"center-align waves-effect waves-light btn-small\">Close</a>        \n                                </div>   \n                            </form>                           \n                        </div>                       \n                    </div>                    \n                </div>                   \n            </div>    \n        </div>\n    </div>    \n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/hotel/hotel.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Components/hotel/hotel.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaG90ZWwvaG90ZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/hotel/hotel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/hotel/hotel.component.ts ***!
  \*****************************************************/
/*! exports provided: HotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelComponent", function() { return HotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var src_app_Entities_Hotel_hotel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Entities/Hotel/hotel.service */ "./src/app/Entities/Hotel/hotel.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var HotelComponent = /** @class */ (function () {
    function HotelComponent(oHotelService, oToast) {
        this.oHotelService = oHotelService;
        this.oToast = oToast;
        this.modalActions1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.specifiedHotel = [];
        this.model1Params = [{
                dismissible: false, complete: function () { console.log('Closed'); }
            }];
    }
    HotelComponent.prototype.ngOnInit = function () {
        this.getHotelsList();
    };
    HotelComponent.prototype.addNewHotel = function (oForm) {
        this.oHotelService.addHotel(oForm.value).subscribe(function (data) {
            if (data.success) {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_3__["toast"])('Works fine', 3000);
            }
            else {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_3__["toast"])('Not Works', 3000);
            }
        });
    };
    HotelComponent.prototype.getHotelsList = function () {
        var _this = this;
        this.oHotelService.getHotelsList().subscribe(function (data) {
            data.forEach(function (obj) { return obj.selector = false; });
            _this.oLstHotels = data;
        });
    };
    HotelComponent.prototype.onChangeLocation = function (locationHotel) {
        var _this = this;
        this.oHotelService.searchForLocationHotel(locationHotel.value).subscribe(function (data) {
            data.forEach(function (obj) { return obj.selector = false; });
            _this.oLstLocationHotel = data;
            if (_this.oLstLocationHotel.length > 0) {
                _this.oLstHotels = _this.oLstLocationHotel;
            }
        });
    };
    HotelComponent.prototype.viewMoreDetailsAboutHotel = function (i) {
        var e_1, _a;
        if (i !== undefined) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.oLstHotels), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var oHotels = _c.value;
                    if (oHotels.idHotel === i.idHotel) {
                        this.oHotel = oHotels;
                        this.specifiedHotel.push(this.oHotel);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.openModal();
        }
    };
    HotelComponent.prototype.updateHotel = function (updateForm, specificForm) {
        this.oHotelService.updateHotel(updateForm.value, specificForm, this.checkboxActive).subscribe(function (data) {
            if (data.success) {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_3__["toast"])('Works fine', 3000);
            }
            else {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_3__["toast"])('Not Works', 3000);
            }
        });
        this.closeModal();
    };
    HotelComponent.prototype.openModal = function () {
        this.modalActions1.emit({ action: 'modal', params: ['open'] });
    };
    HotelComponent.prototype.closeModal = function () {
        this.modalActions1.emit({ action: 'modal', params: ['close'] });
        this.specifiedHotel.splice(0);
    };
    HotelComponent.prototype.changeStatusHotel = function (idHotel, availability) {
        var newStatus = availability.target.checked;
        this.checkboxActive = newStatus;
        this.oHotelService.changeStatusHotel(idHotel, newStatus).subscribe(function (data) {
            if (data.idHotel != null) {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_3__["toast"])('Works fine', 3000);
            }
            else {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_3__["toast"])('Not Works', 3000);
            }
        });
        this.getHotelsList();
    };
    HotelComponent.ctorParameters = function () { return [
        { type: src_app_Entities_Hotel_hotel_service__WEBPACK_IMPORTED_MODULE_4__["HotelService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    HotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel',
            template: __webpack_require__(/*! raw-loader!./hotel.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/hotel/hotel.component.html"),
            styles: [__webpack_require__(/*! ./hotel.component.scss */ "./src/app/Components/hotel/hotel.component.scss")]
        })
    ], HotelComponent);
    return HotelComponent;
}());



/***/ }),

/***/ "./src/app/Components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/Components/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Components/person/person.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Components/person/person.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGVyc29uL3BlcnNvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/person/person.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/person/person.component.ts ***!
  \*******************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_Entities_Person_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Entities/Person/person.service */ "./src/app/Entities/Person/person.service.ts");







var PersonComponent = /** @class */ (function () {
    function PersonComponent(toastrService, oPersonService) {
        this.toastrService = toastrService;
        this.oPersonService = oPersonService;
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.addNewPerson = function (personForm) {
        this.oPersonService.addPerson(personForm.value).subscribe(function (data) {
            if (data.personID !== null) {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_3__["toast"])('Works Fine', 3000);
            }
            else {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_3__["toast"])('Not Works', 3000);
            }
        });
    };
    PersonComponent.prototype.searchDocument = function (event) {
        this.oPersonService.searchForDocument(event.target.value).subscribe(function (data) {
            if (data === true) {
                event.target.value = '';
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_3__["toast"])('Person ID exists already', 3000);
            }
        });
    };
    PersonComponent.prototype.searchForEmailAvailability = function (event) {
        this.oPersonService.searchForEmailAvailability(event.target.value).subscribe(function (data) {
            if (data === true) {
                event.target.value = '';
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_3__["toast"])('This email already exists', 3000);
            }
        });
    };
    PersonComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: src_app_Entities_Person_person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"] }
    ]; };
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! raw-loader!./person.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.scss */ "./src/app/Components/person/person.component.scss")]
        })
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/Components/reservation/reservation.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Components/reservation/reservation.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/reservation/reservation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/reservation/reservation.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationComponent", function() { return ReservationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Entities_Hotel_hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Entities/Hotel/hotel.service */ "./src/app/Entities/Hotel/hotel.service.ts");
/* harmony import */ var src_app_Entities_Person_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Entities/Person/person.service */ "./src/app/Entities/Person/person.service.ts");
/* harmony import */ var src_app_Entities_Room_room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Entities/Room/room.service */ "./src/app/Entities/Room/room.service.ts");
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var src_app_Entities_Reservation_reservation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Entities/Reservation/reservation.service */ "./src/app/Entities/Reservation/reservation.service.ts");







var ReservationComponent = /** @class */ (function () {
    function ReservationComponent(oHotelService, oPersonService, oRoomService, oReservationService) {
        this.oHotelService = oHotelService;
        this.oPersonService = oPersonService;
        this.oRoomService = oRoomService;
        this.oReservationService = oReservationService;
        this.oLstSpecificReservation = [];
        this.modalActions1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalActions2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.model1Params = [{
                dismissible: false, complete: function () { console.log('Closed'); }
            }];
        this.model2Params = [{
                dismissible: false, complete: function () { console.log('Closed'); }
            }];
    }
    ReservationComponent.prototype.ngOnInit = function () {
        this.getHotels();
        this.getAllReservations();
    };
    ReservationComponent.prototype.getHotels = function () {
        var _this = this;
        this.oHotelService.getHotelsList().subscribe(function (data) {
            data.forEach(function (obj) { return obj.selector = false; });
            _this.oLstHotels = data;
            console.log(data);
        });
    };
    ReservationComponent.prototype.getAllReservations = function () {
        var _this = this;
        this.oReservationService.getAllReservations().subscribe(function (data) {
            data.forEach(function (obj) { return obj.selector = false; });
            _this.oLstReservations = data;
        });
    };
    ReservationComponent.prototype.getReservationsForHotel = function (event) {
        if (event.name === 'IDHotel') {
            this.oSearchHotel = event.value;
        }
        this.getReservationForHotelAndPerson();
    };
    ReservationComponent.prototype.getReservationForPerson = function (event) {
        if (event.target.id === 'personIdentification') {
            this.oSearchPerson = event.target.value;
        }
        this.getReservationForHotelAndPerson();
    };
    ReservationComponent.prototype.getReservationForHotelAndPerson = function () {
        var _this = this;
        if (this.oSearchHotel !== null || this.oSearchPerson !== null) {
            this.oReservationService.searchReservationsForPersonAndHotel(this.oSearchPerson, this.oSearchHotel).subscribe(function (data) {
                data.forEach(function (obj) { return obj.selector = false; });
                _this.oLstReservations = data;
                console.log(data);
            });
        }
    };
    ReservationComponent.prototype.lookForRooms = function (IDHotel) {
        var _this = this;
        this.oRoomService.listRoomsByHotel(IDHotel.value).subscribe(function (data) {
            data.forEach(function (obj) { return obj.selector = false; });
            _this.oLstRooms = data;
        });
    };
    ReservationComponent.prototype.showButtonReservation = function (availableRoom) {
        var approvedButton = true;
        if (availableRoom === 'false') {
            approvedButton = false;
            this.reasonWhyNotShow = 'This room is not available';
        }
        return approvedButton;
    };
    ReservationComponent.prototype.searchDocument = function (event) {
        var _this = this;
        this.oPersonService.searchForPersonID(event.target.value).subscribe(function (data) {
            if (data.personIdentification !== null) {
                _this.personName = data[0].personName;
                _this.phonePersonReservation = data[0].personPhone;
            }
            else {
                event.target.value = '';
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["toast"])('Person ID exists already', 3000);
            }
        });
    };
    ReservationComponent.prototype.detailsAboutReservation = function (i) {
        var e_1, _a;
        if (i !== undefined) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.oLstReservations), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var oReservations = _c.value;
                    if (oReservations.idReservation === i.idReservation) {
                        this.oReservation = oReservations;
                        this.oLstSpecificReservation.push(this.oReservation);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.openModalDetails();
        }
    };
    ReservationComponent.prototype.viewMoreAboutReservation = function (i) {
        this.oIdRoom = i.idRoom;
        this.openReservationModal();
    };
    ReservationComponent.prototype.openModalDetails = function () {
        this.modalActions2.emit({ action: 'modal', params: ['open'] });
    };
    ReservationComponent.prototype.openReservationModal = function () {
        this.modalActions1.emit({ action: 'modal', params: ['open'] });
    };
    ReservationComponent.prototype.addReservation = function (oForm) {
        this.oReservationService.addReservation(oForm.value, this.phonePersonReservation, this.oIdRoom).subscribe(function (data) {
            if (data.personID !== null) {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["toast"])('Works Fine', 3000);
            }
            else {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["toast"])('Not Works', 3000);
            }
        });
        this.closeModal();
    };
    ReservationComponent.prototype.cancelReservation = function (idReservation) {
        this.oReservationService.cancelReservation(idReservation).subscribe(function (data) {
            if (data.idReservation != null) {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["toast"])('Reservation cancelled', 3000);
            }
            else {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["toast"])('Problem cancelling this reservation', 3000);
            }
        });
        this.closeDetailsReservationModal();
        this.getAllReservations();
    };
    ReservationComponent.prototype.closeDetailsReservationModal = function () {
        this.modalActions2.emit({ action: 'modal', params: ['close'] });
    };
    ReservationComponent.prototype.closeModal = function () {
        this.modalActions1.emit({ action: 'modal', params: ['close'] });
    };
    ReservationComponent.ctorParameters = function () { return [
        { type: src_app_Entities_Hotel_hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"] },
        { type: src_app_Entities_Person_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"] },
        { type: src_app_Entities_Room_room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"] },
        { type: src_app_Entities_Reservation_reservation_service__WEBPACK_IMPORTED_MODULE_6__["ReservationService"] }
    ]; };
    ReservationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reservation',
            template: __webpack_require__(/*! raw-loader!./reservation.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/reservation/reservation.component.html"),
            styles: [__webpack_require__(/*! ./reservation.component.scss */ "./src/app/Components/reservation/reservation.component.scss")]
        })
    ], ReservationComponent);
    return ReservationComponent;
}());



/***/ }),

/***/ "./src/app/Components/room/room.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Components/room/room.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcm9vbS9yb29tLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/room/room.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/room/room.component.ts ***!
  \***************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Entities_Hotel_hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Entities/Hotel/hotel.service */ "./src/app/Entities/Hotel/hotel.service.ts");
/* harmony import */ var src_app_Entities_Room_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Entities/Room/room.service */ "./src/app/Entities/Room/room.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");






var RoomComponent = /** @class */ (function () {
    function RoomComponent(oHotelService, oRoomService, toastrService) {
        this.oHotelService = oHotelService;
        this.oRoomService = oRoomService;
        this.toastrService = toastrService;
        this.modalActions1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.oLstSpecifiedRoom = [];
        this.model1Params = [{
                dismissible: false, complete: function () { console.log('Closed'); }
            }];
    }
    RoomComponent.prototype.ngOnInit = function () {
        this.getHotelsList();
        this.getRoomsList();
    };
    RoomComponent.prototype.getRoomsList = function () {
        var _this = this;
        this.oRoomService.getListRooms().subscribe(function (data) {
            data.forEach(function (obj) { return obj.selector = false; });
            _this.oLstRooms = data;
        });
    };
    RoomComponent.prototype.getHotelsList = function () {
        var _this = this;
        this.oHotelService.getHotelsList().subscribe(function (data) {
            data.forEach(function (obj) { return obj.selector = false; });
            _this.oLstHotels = data;
        });
    };
    RoomComponent.prototype.addPrices = function (event) {
        if (event.target.id === 'basePriceRoom') {
            this.oBasePriceRoom = event.target.value;
        }
        else if (event.target.id === 'taxesPercentRooms') {
            this.oTaxesPrice = event.target.value;
        }
        if (this.oBasePriceRoom != null && this.oTaxesPrice != null) {
            this.oSumTaxesBasePrice = this.oBasePriceRoom * (this.oTaxesPrice / 100);
            this.statementPrice = 'Taxes Cost: $' + this.oSumTaxesBasePrice;
            this.oTotalPrice = +this.oBasePriceRoom + +this.oSumTaxesBasePrice;
        }
    };
    RoomComponent.prototype.updatePrices = function (event) {
        if (event.target.id === 'basePriceRoom') {
            this.uBasePriceRoom = event.target.value;
        }
        else if (event.target.id === 'taxesPercentRooms') {
            this.uTaxesPrice = event.target.value;
        }
        if (this.uBasePriceRoom != null && this.uTaxesPrice != null) {
            this.uSumTaxesBasePrice = this.uBasePriceRoom * (this.uTaxesPrice / 100);
            this.uStatementPrice = 'Taxes Cost: $' + this.uSumTaxesBasePrice;
            this.uTotalPrice = +this.uBasePriceRoom + +this.uSumTaxesBasePrice;
        }
    };
    RoomComponent.prototype.addNewRoom = function (form) {
        this.oRoomService.addRoom(form.value, this.oTotalPrice).subscribe(function (data) {
            if (data === true) {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["toast"])('Works Fine', 3000);
            }
            else {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["toast"])('Not Works', 3000);
            }
        });
    };
    RoomComponent.prototype.viewMoreAboutThisRoom = function (i) {
        var e_1, _a;
        if (i !== undefined) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.oLstRooms), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var oRoom = _c.value;
                    if (oRoom.idRoom === i.idRoom) {
                        this.oRoomInList = oRoom;
                        this.oLstSpecifiedRoom.push(this.oRoomInList);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.openModal();
        }
    };
    RoomComponent.prototype.changeStatusRoom = function (idRoom, availability) {
        var newStatus = availability.target.checked;
        this.checkboxActive = newStatus;
        this.oRoomService.changeStatusRoom(idRoom, newStatus).subscribe(function (data) {
            if (data.idRoom != null) {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["toast"])('Works fine', 3000);
            }
            else {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["toast"])('Not Works', 3000);
            }
        });
        this.getHotelsList();
    };
    RoomComponent.prototype.searchForHotelPerHotel = function (oHotelID) {
        var _this = this;
        this.oRoomService.listRoomsByHotel(oHotelID.value).subscribe(function (data) {
            data.forEach(function (obj) { return obj.selector = false; });
            _this.oLstRooms = data;
        });
    };
    RoomComponent.prototype.updateRoom = function (updateForm, specificForm) {
        this.oRoomService.updateRoom(updateForm.value, specificForm, this.checkboxActive, this.uTotalPrice).subscribe(function (data) {
            if (data.success) {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["toast"])('Works fine', 3000);
            }
            else {
                Object(angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["toast"])('Not Works', 3000);
            }
        });
        this.closeModal();
    };
    RoomComponent.prototype.openModal = function () {
        this.modalActions1.emit({ action: 'modal', params: ['open'] });
    };
    RoomComponent.prototype.closeModal = function () {
        this.modalActions1.emit({ action: 'modal', params: ['close'] });
        this.oLstSpecifiedRoom.splice(0);
    };
    RoomComponent.ctorParameters = function () { return [
        { type: src_app_Entities_Hotel_hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"] },
        { type: src_app_Entities_Room_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! raw-loader!./room.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.scss */ "./src/app/Components/room/room.component.scss")]
        })
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/Entities/Hotel/hotel.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Entities/Hotel/hotel.service.ts ***!
  \*************************************************/
/*! exports provided: HotelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelService", function() { return HotelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _urlroute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../urlroute */ "./src/app/Entities/urlroute.ts");




var HotelService = /** @class */ (function () {
    function HotelService(oHttpClient, urlRoute) {
        this.oHttpClient = oHttpClient;
        this.urlRoute = urlRoute;
        this.routeUrl = this.urlRoute.getRoute();
    }
    HotelService.prototype.addHotel = function (oHotel) {
        if (oHotel.availableHotel === '') {
            oHotel.availableHotel = 'false';
        }
        var newHotel = {
            IDHotel: oHotel.IDHotel,
            nameHotel: oHotel.nameHotel,
            addressHotel: oHotel.addressHotel,
            availableHotel: oHotel.availableHotel,
            locationHotel: oHotel.locationHotel
        };
        return this.oHttpClient.post(this.routeUrl + '/Hotel/AddHotel', newHotel);
    };
    HotelService.prototype.getHotelsList = function () {
        return this.oHttpClient.get(this.routeUrl + '/Hotel/ListHotels');
    };
    HotelService.prototype.changeStatusHotel = function (idHotel, newStatus) {
        return this.oHttpClient.get(this.routeUrl + '/Hotel/ChangeStatusHotel?idHotel=' + idHotel + '&newStatus=' + newStatus);
    };
    HotelService.prototype.searchForLocationHotel = function (locationHotel) {
        return this.oHttpClient.get(this.routeUrl + '/Hotel/HotelsByLocation?locationHotel=' + locationHotel);
    };
    HotelService.prototype.updateHotel = function (updateHotel, specificFile, availabilityHotel) {
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
    };
    HotelService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _urlroute__WEBPACK_IMPORTED_MODULE_3__["URLRoute"] }
    ]; };
    HotelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HotelService);
    return HotelService;
}());



/***/ }),

/***/ "./src/app/Entities/Person/person.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Entities/Person/person.service.ts ***!
  \***************************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _urlroute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../urlroute */ "./src/app/Entities/urlroute.ts");




var PersonService = /** @class */ (function () {
    function PersonService(oHttpClient, urlRoute) {
        this.oHttpClient = oHttpClient;
        this.urlRoute = urlRoute;
        this.routeUrl = this.urlRoute.getRoute();
    }
    PersonService.prototype.addPerson = function (oPerson) {
        var newPerson = {
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
    };
    PersonService.prototype.searchForDocument = function (personIdentification) {
        return this.oHttpClient.get(this.routeUrl + '/Person/SearchForDocument?personIdentification=' + personIdentification);
    };
    PersonService.prototype.searchForEmailAvailability = function (emailPerson) {
        return this.oHttpClient.get(this.routeUrl + '/Person/SearchForEmail?personEmail=' + emailPerson);
    };
    PersonService.prototype.searchForPersonID = function (idPerson) {
        return this.oHttpClient.get(this.routeUrl + '/Person/PersonByID?idPerson=' + idPerson);
    };
    PersonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _urlroute__WEBPACK_IMPORTED_MODULE_3__["URLRoute"] }
    ]; };
    PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/Entities/Reservation/reservation.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/Entities/Reservation/reservation.service.ts ***!
  \*************************************************************/
/*! exports provided: ReservationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationService", function() { return ReservationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _urlroute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../urlroute */ "./src/app/Entities/urlroute.ts");




var ReservationService = /** @class */ (function () {
    function ReservationService(oHttpClient, urlRoute) {
        this.oHttpClient = oHttpClient;
        this.urlRoute = urlRoute;
        this.routeUrl = this.urlRoute.getRoute();
    }
    ReservationService.prototype.addReservation = function (oReservation, phonePersonReservation, idRoom) {
        oReservation.reservationRoomID = idRoom;
        oReservation.phonePersonReservation = phonePersonReservation;
        if (typeof oReservation.activeReservation) {
            oReservation.activeReservation = true;
        }
        console.log(oReservation);
        var newReservation = {
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
    };
    ReservationService.prototype.getAllReservations = function () {
        return this.oHttpClient.get(this.routeUrl + '/Reservations/getAllReservations');
    };
    ReservationService.prototype.searchReservationsForPersonAndHotel = function (personID, hotelId) {
        if (typeof personID === 'undefined') {
            personID = null;
        }
        else if (typeof hotelId === 'undefined') {
            hotelId = null;
        }
        var completeGet = '?personId=' + personID + '&&hotelId=' + hotelId;
        return this.oHttpClient.get(this.routeUrl + '/Reservations/SearchReservationsForPersonAndHotel' + completeGet);
    };
    ReservationService.prototype.cancelReservation = function (idReservation) {
        return this.oHttpClient.get(this.routeUrl + '/Reservations/CancelReservation?idReservation=' + idReservation);
    };
    ReservationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _urlroute__WEBPACK_IMPORTED_MODULE_3__["URLRoute"] }
    ]; };
    ReservationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ReservationService);
    return ReservationService;
}());



/***/ }),

/***/ "./src/app/Entities/Room/room.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Entities/Room/room.service.ts ***!
  \***********************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _urlroute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../urlroute */ "./src/app/Entities/urlroute.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RoomService = /** @class */ (function () {
    function RoomService(oHttpClient, urlRoute) {
        this.oHttpClient = oHttpClient;
        this.urlRoute = urlRoute;
        this.routeUrl = this.urlRoute.getRoute();
    }
    RoomService.prototype.addRoom = function (oRoom, oTotalPrice) {
        var newRoom = {
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
    };
    RoomService.prototype.listRoomsByHotel = function (idHotel) {
        return this.oHttpClient.get(this.routeUrl + '/Room/SearchRoomsForHotel?idHotel=' + idHotel);
    };
    RoomService.prototype.changeStatusRoom = function (idRoom, newStatus) {
        return this.oHttpClient.get(this.routeUrl + '/Room/ChangeStatusRoom?idRoom=' + idRoom + '&&newStatus=' + newStatus);
    };
    RoomService.prototype.getListRooms = function () {
        return this.oHttpClient.get(this.routeUrl + '/Room/ListRooms');
    };
    RoomService.prototype.updateRoom = function (roomUpdate, specificFile, availabilityRoom, totalPrice) {
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
    };
    RoomService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _urlroute__WEBPACK_IMPORTED_MODULE_2__["URLRoute"] }
    ]; };
    RoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/Entities/urlroute.ts":
/*!**************************************!*\
  !*** ./src/app/Entities/urlroute.ts ***!
  \**************************************/
/*! exports provided: URLRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLRoute", function() { return URLRoute; });
var URLRoute = /** @class */ (function () {
    function URLRoute() {
    }
    URLRoute.prototype.getRoute = function () {
        return 'http://travelmanagementjp.azurewebsites.net';
    };
    return URLRoute;
}());



/***/ }),

/***/ "./src/app/app-routes.ts":
/*!*******************************!*\
  !*** ./src/app/app-routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _Components_room_room_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/room/room.component */ "./src/app/Components/room/room.component.ts");
/* harmony import */ var _Components_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/hotel/hotel.component */ "./src/app/Components/hotel/hotel.component.ts");
/* harmony import */ var _Components_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/reservation/reservation.component */ "./src/app/Components/reservation/reservation.component.ts");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _Components_person_person_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/person/person.component */ "./src/app/Components/person/person.component.ts");





var AppRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'room', component: _Components_room_room_component__WEBPACK_IMPORTED_MODULE_0__["RoomComponent"] },
    { path: 'hotel', component: _Components_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_1__["HotelComponent"] },
    { path: 'reservation', component: _Components_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_2__["ReservationComponent"] },
    { path: 'person', component: _Components_person_person_component__WEBPACK_IMPORTED_MODULE_4__["PersonComponent"] }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routes */ "./src/app/app-routes.ts");




var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["AppRoutes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HotelManagement';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_room_room_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/room/room.component */ "./src/app/Components/room/room.component.ts");
/* harmony import */ var _Components_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/hotel/hotel.component */ "./src/app/Components/hotel/hotel.component.ts");
/* harmony import */ var _Components_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/reservation/reservation.component */ "./src/app/Components/reservation/reservation.component.ts");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routes */ "./src/app/app-routes.ts");
/* harmony import */ var _Entities_Hotel_hotel_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Entities/Hotel/hotel.service */ "./src/app/Entities/Hotel/hotel.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Entities_urlroute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Entities/urlroute */ "./src/app/Entities/urlroute.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _Components_person_person_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/person/person.component */ "./src/app/Components/person/person.component.ts");
/* harmony import */ var _Entities_Person_person_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Entities/Person/person.service */ "./src/app/Entities/Person/person.service.ts");
/* harmony import */ var _Entities_Room_room_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Entities/Room/room.service */ "./src/app/Entities/Room/room.service.ts");
/* harmony import */ var _Entities_Reservation_reservation_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Entities/Reservation/reservation.service */ "./src/app/Entities/Reservation/reservation.service.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _Components_room_room_component__WEBPACK_IMPORTED_MODULE_9__["RoomComponent"],
                _Components_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_10__["HotelComponent"],
                _Components_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_11__["ReservationComponent"],
                _Components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _Components_person_person_component__WEBPACK_IMPORTED_MODULE_19__["PersonComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_materialize__WEBPACK_IMPORTED_MODULE_5__["MaterializeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_14__["AppRoutes"])
            ],
            providers: [_Entities_Hotel_hotel_service__WEBPACK_IMPORTED_MODULE_15__["HotelService"], _Entities_urlroute__WEBPACK_IMPORTED_MODULE_17__["URLRoute"], _Entities_Person_person_service__WEBPACK_IMPORTED_MODULE_20__["PersonService"], _Entities_Room_room_service__WEBPACK_IMPORTED_MODULE_21__["RoomService"], _Entities_Reservation_reservation_service__WEBPACK_IMPORTED_MODULE_22__["ReservationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ASUS\TravelManagement\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map