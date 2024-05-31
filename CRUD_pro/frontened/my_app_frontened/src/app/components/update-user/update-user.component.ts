import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{
  user: any
  data: any
  constructor(private userService: UserService,private route: ActivatedRoute,private router:Router){}
  
  ngOnInit(): void {
    let id=this.route.snapshot.params['id']
    this.userService.getUserById(id).subscribe(data=>{
      this.user=data
      console.log(data)
    })
  }

  form=new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email)
  })

  submit(){
    this.data=this.form.value
    this.user.name=this.data.name
    this.user.email=this.data.email
    console.log(this.data)

    this.userService.updateUser(this.user?.id,this.user).subscribe(data=>{
      console.log(data)
    })
      
    this.router.navigate(['/'])
  }


}
