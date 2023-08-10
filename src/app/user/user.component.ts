import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from '../services/message.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  formName="User Form";
  val: number=9;
 
  ResetForm(){
    this.firstName = '';
    this.lastName = '';
  }
  firstName:string ="Tushar";
  lastName:string ="Misal";
  //Use to send the data from  Child to parent
  @Output() newUserCreated= new EventEmitter<string>();
  constructor(private msg:MessageService,private userD:UserDataService)
  {

  }
  userApiData!: any[];
  ngOnInit():void {
    //subscribe the regisered method
    this.userD.getUser().subscribe({
      next : val=>{
       //console.log(val);
        this.userApiData  =val.data;
      },
      error: er=>{
        console.log('Error occured :'+er.message);
      }
      
    });
    
  }
  Save()
  {
    //Service implmentation
    console.log('From User Component : '+this.msg.getMessage());
    //Emitting data from child to parent
    let fullName=this.firstName+' '+this.lastName;
    this.newUserCreated.emit(fullName);
    //alert('Form submitted'+this.firstName+' ' +this.lastName);
    let user={
      userName:this.firstName,
      lastName:this.lastName
    }
    this.userD.saveUser(user).subscribe();
  }
  ClearButtonVisibility()
  {
    let value;
    if(this.firstName!='' && this.lastName!='')
    {
      value=true;
    }
    else
    {
      value=false;
    }
    return value;
  }
}
