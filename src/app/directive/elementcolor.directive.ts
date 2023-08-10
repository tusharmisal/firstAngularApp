import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appElementcolor]'
})
export class ElementcolorDirective {

  constructor(private elref:ElementRef) { 
  elref.nativeElement.style.color ='red';
  }
  
}
