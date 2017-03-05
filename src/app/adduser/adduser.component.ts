import { Component, OnInit } from '@angular/core';
import { User } from '../shared/entity/user';
import {
    DxTextBoxModule, DxButtonModule, DxValidatorModule,
    DxValidationSummaryModule, DevExtremeModule
} from 'devextreme-angular';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent implements OnInit {

    user: User;
    addUserForm: FormGroup;
    
    ngOnInit() {
        this.initializeUser();
        this.buildForm();
    }

    initializeUser(){
        this.user = new User(0,"","","","","","","","");
    }
    
    constructor( private formBuilder: FormBuilder ) { }

    buildForm(): void {

        this.addUserForm = this.formBuilder.group( {
            'username': [this.user.userName,
                         [
                            Validators.required, Validators.minLength( 5 ), Validators.maxLength( 30 )]
                         ],
            'password': [this.user.password, 
                         [ Validators.required, Validators.minLength( 3 ), Validators.maxLength( 30 )]],
            'email': [this.user.email,
                             [
                               Validators.required, Validators.minLength( 7 ), Validators.maxLength( 255 )]
                             ],
            'firstname': [this.user.firstName,
                         [
                          Validators.required, Validators.minLength( 5 ), Validators.maxLength( 30 )]
                        ],
            'lastname': [this.user.lastName,
                         [
                          Validators.required, Validators.maxLength( 30 )]
                         ],
            
        });
    }
    
    showConfirmationDialog(user: User) { 
        console.log(" showConfirmationDialog " + user.userName +" password :" + user.password + 
                " First Name :" + user.firstName + 
                " Last Name :" + user.lastName+ 
                " email :" +user.email );
       
    }

}
