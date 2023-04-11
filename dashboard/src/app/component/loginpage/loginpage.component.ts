import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import mixpanel from 'mixpanel-browser';
import { MixpanelserviceService } from 'src/app/mixpanelservice.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
formGroup: any;
  constructor(private mixpanelService: MixpanelserviceService){
    mixpanel.init('11b25c9684cd81a697eb5776a555af3e');
 }

 ngOnInit() {
  this.formGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
}
 trackSignin() {
  mixpanel.track('Signin', {
    username: this.formGroup.value.username,
    date: new Date(),
  });
}

  
}
