import { Directive, ElementRef, AfterViewInit, Input, EventEmitter, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit, AfterViewInit {
  @Input() focusEvent: EventEmitter<boolean>;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.focusEvent.subscribe(event => {
      this.focus();
    });
  }

  ngAfterViewInit() {
    this.focus();
  }

  focus() {
    this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus', []);
    // this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'click', []);
  }
}
