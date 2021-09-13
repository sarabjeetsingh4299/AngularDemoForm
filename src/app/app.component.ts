import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo'
   
  /*reactive form*/
  formValue = {};

  userLogin(){
    
     console.log(this.loginForm.value);
     
     }

     loginForm= new FormGroup({
      rffName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      rflName:new FormControl('',[Validators.required,Validators.minLength(2)]),
      rfMail:new FormControl('',[Validators.required,Validators.email]),
      rfAddress: new FormControl('',[Validators.required],),
      rfState: new FormControl('',[Validators.required],),
      rfGender: new FormControl('',[Validators.required],)
    })
 
 get rffName(){
  return this.loginForm.get('rffName')
 }
 get rflName(){
   return this.loginForm.get('rflName')
  }
  get rfMail(){
    return this.loginForm.get('rfMail')
   }
   get rfAddress(){
    return this.loginForm.get('rfAddress')
   }
   get rfState(){
    return this.loginForm.get('rfState')
   }
   get rfGender(){
    return this.loginForm.get('rfGender')
   }
 



      
      
}
