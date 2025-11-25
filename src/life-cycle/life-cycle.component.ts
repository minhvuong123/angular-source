import { AfterContentChecked, AfterContentInit, afterEveryRender, afterNextRender, AfterViewChecked, AfterViewInit, Component, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html'
})
export class LifeCycle implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'LifeCycle';

  valueInput1 = input(0);
  valueInput2 = input(0);

  constructor() {
    console.log(this.title + "constructor");
    afterNextRender({

    })

    afterEveryRender({
      
    })
  }
  

  ngOnInit(): void {
    console.log(this.title + ' ' +"ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.title + ' ' + "ngOnChanges", changes);
  }

  ngAfterContentInit(): void {
    console.log(this.title + ' ' + "ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log(this.title + ' ' + "ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log(this.title + ' ' + "ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log(this.title + ' ' + "ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log(this.title + ' ' + "ngOnDestroy");
  }

  changeDomElement() {
    document.getElementById('lifeCycleElement')?.appendChild(document.createElement("p"));
  }
}
