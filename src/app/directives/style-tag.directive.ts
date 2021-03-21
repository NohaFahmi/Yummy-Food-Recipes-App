import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyleTag]'
})
export class StyleTagDirective {

  constructor(private el: ElementRef) {
    // console.log(el.nativeElement.innerText)
    el.nativeElement.style.color = "black"
    el.nativeElement.style.fontWeight = "bold"

    // }
  }

}
