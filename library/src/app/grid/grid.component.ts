import {Component, Input} from "@angular/core";

@Component({
  selector: 'library-grid',
    template: `
        <div class="row" *ngFor="let cellComponentType of cellComponentTypes">
            <div class="col-lg-12">
                <library-cell [componentType]="cellComponentType"></library-cell>
            </div>
        </div>
    `
})
export class GridComponent {
    @Input() componentTypes: any;

    cellComponentTypes: any[] = [];

    addDynamicCellComponent(selectedComponentType:any) {
        this.cellComponentTypes.push(selectedComponentType);
    }
}

