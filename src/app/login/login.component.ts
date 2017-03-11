import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        this.user = new User(0,"user123","pass","","","","","","");
    }
    
<<<<<<< HEAD
    constructor( private formBuilder: FormBuilder,private router: Router ) { }
=======
    constructor( private formBuilder: FormBuilder ) { }
>>>>>>> branch 'master' of https://github.com/dearmohseen/angular.git

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


    submitForm(value : any): void {
        console.log(" Form Submitted Successfully " + value.username + " password " + value.password);
<<<<<<< HEAD
        if(value.username != undefined && value.password != undefined){
            console.log(" Routing to Landing ")
            this.router.navigate( ["landing"]);
        }
        
=======
>>>>>>> branch 'master' of https://github.com/dearmohseen/angular.git
    }
}
