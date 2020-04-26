import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestApiService } from "../shared/rest-api.service";
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {
  step = 0;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  Patient: any = [];
  itemValue = "";
  items: Observable<any[]>;

  constructor(public restApi: RestApiService, public db: AngularFireDatabase) { 
    this.items = db.list('items').valueChanges();
  }
  onSubmit() {
    this.db.list('items').push({content: this.itemValue});
    this.itemValue = '';
  }
  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   idCtrl: ['', Validators.required],
    //   dobYearCtrl: ['', Validators.required],
    //   dateCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   roomIdCtrl: ['', Validators.required],
    //   typeCodeCtrl: ['', Validators.required]
    // });
    this.loadPatients();
  }

  loadPatients() {
    return this.restApi.getPatients().subscribe((data: {}) => {
      this.Patient = data;
    })
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}


