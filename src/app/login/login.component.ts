import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

    loginForm: FormGroup;

    constructor( formBuilder: FormBuilder ) {

    this.loginForm = formBuilder.group({
        
        username : '',
        password : ''
        
    });

   }
    
    submitForm(value : any): void {
        console.log(" Form Submitted Successfully " + value);
    }
}
