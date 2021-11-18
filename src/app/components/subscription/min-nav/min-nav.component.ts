import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-min-nav',
  templateUrl: './min-nav.component.html',
  styleUrls: ['./min-nav.component.css']
})
export class MinNavComponent implements OnInit {

  constructor() { }

  @ViewChild('complete_payment') myDiv: ElementRef<HTMLElement>;

  toggle_view(event:any){
    this.myDiv.nativeElement.click()
  }

  ngOnInit(): void {
  }

}
