import { Component, ViewChild } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  valuefromParent : number =10;

  @ViewChild('userComponent') userComponentRef! : UserComponent;
  alertOfUserCreation(event : any)
  {
    alert('User data received from child to Parent '+event);
  }
  GetUser()
  {
    console.log(this.userComponentRef.formName);
  }
}
