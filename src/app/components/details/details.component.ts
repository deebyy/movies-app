import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit works!');
  }
  ngOnChanges(): void {
    console.log('OnChanges works!');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit works!');

  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit works!');

  }

}
