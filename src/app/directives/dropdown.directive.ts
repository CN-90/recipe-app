import { Directive, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})


export class DropdownDirective implements OnInit {
  @HostBinding('class.open') openClass = false;
  
  @HostListener('click') onClick(){
    this.openClass = !this.openClass;
  } 

  constructor(){

  }

  ngOnInit(){

  }

}