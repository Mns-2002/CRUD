import { Component, OnInit  } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [CommonModule, RouterModule,HttpClientModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit{
  users: any | undefined

  constructor(private userService: UserService){}
 
  ngOnInit(): void{
    this.userService.getUsers().subscribe(data=>{
      this.users=data
      console.log(data)
    })
  }

  deleteUser(id:number){
    this.userService.deleteUserById(id).subscribe(data=>{
      console.log(data)
      this.ngOnInit()
    })
  }


}
