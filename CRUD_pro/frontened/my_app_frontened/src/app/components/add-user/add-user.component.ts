import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
email: any;
  constructor(private userService: UserService,private router:Router){}
  data: any
  form=new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('',Validators.required)
  })


  addUser(){
    this.data=this.form.value
    this.userService.addUser(this.data).subscribe(data=>{
      this.router.navigate(['/'])
    })
  }

}
