import { Directive, ElementRef, HostListener, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appViwe]',
  standalone: true
})
export class ViweDirective {
@Input('appDirective') color:string='rgba(0, 0, 0, 0.1)'
  constructor(
    private elemant:ElementRef
    ) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.elemant.nativeElement.style.boxShadow= `${this.color} 0px 4px 12px`;
  }

  @HostListener('mouseover') mouseover(){
    this.elemant.nativeElement.style.boxShadow=`${this.color} 0px 10px 10px, ${this.color} 0px -7px 15px, ${this.color} 0px 4px 6px, ${this.color} 0px 12px 13px, ${this.color} 0px -3px 5px`

  }
  @HostListener('mouseout') mouseout(){
    this.elemant.nativeElement.style.boxShadow=`${this.color} 0px 4px 12px`
  }

}
