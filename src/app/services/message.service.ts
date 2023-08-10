import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  userMessage !: string ;
  constructor() { }
  
  sendMessage(msg:string)
  {
      this.userMessage=msg;
  }
  getMessage()
  {
    return this.userMessage;
  }
}
