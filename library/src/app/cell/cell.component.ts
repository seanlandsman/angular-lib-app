import {Component, Input, ViewContainerRef, OnInit, ComponentFactoryResolver} from "@angular/core";

@Component({
  selector: 'library-cell',
  template: ''
})
export class CellComponent  implements OnInit {
    @Input() componentType: any;

    constructor(private viewContainerRef: ViewContainerRef,
                private cfr: ComponentFactoryResolver) {
    }

    ngOnInit() {
        let compFactory = this.cfr.resolveComponentFactory(this.componentType);
        this.viewContainerRef.createComponent(compFactory);
    }
}