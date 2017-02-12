import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DxTextBoxModule } from 'devextreme-angular';
import { User } from '../shared/entity/user';

@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    user: User;

    ngOnInit() {
        this.initializeUser();
        this.buildForm();
    }

    initializeUser(){
        this.user = new User(0,"user123","passmmm","","","","","","");
    }
    
    constructor( private formBuilder: FormBuilder ) { }

    buildForm(): void {

        this.loginForm = this.formBuilder.group( {
            'username': [this.user.userName,
                         [
                            Validators.required, Validators.minLength( 5 ), Validators.maxLength( 30 )]
                         ],
            'password': [this.user.password, 
                         [ Validators.required, Validators.minLength( 3 ), Validators.maxLength( 30 )]]
        });
    }


    submitForm( value: any): void {
        console.log( " Username : " + value.username + " Password : " + value.password);
    }
}
