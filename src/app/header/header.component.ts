import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onSelect(feature: string){
    this.featureSelected.emit(feature);
    //EventEmitter need to be from angular core -- other eventEmitters giving args error

  }

}
