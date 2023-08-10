import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
courseData: any[]=[
  {Id:'1',CourseName:'Angular',StartDate:'02-March-2023',EndDate:'12-March-2023'},
  {Id:'2',CourseName:'React',StartDate:'02-March-2023',EndDate:'12-March-2023'}
];
items : any[]=[{name:"Firstname",value:"1"},{name:"Lastname",value:"2"}];
selectedValue : string ="Firstname";
@Input() recievedValueFromParent!:number;
//Service Injection
//Keep it private so that other component will not acess it
constructor(private msgService:MessageService,private route:Router)
{

}
ngOnInit(): void {
    this.msgService.sendMessage('Message from course details component');//Able to access the service function here

}
navigateToUser(){
  this.route.navigate(['/user']);
} 
}
