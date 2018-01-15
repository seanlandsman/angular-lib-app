// import {Component, OnInit} from '@angular/core';
// import {BlueComponent} from "./blue/blue.component";
//
// @Component({
//     selector: 'app-root',
//     template: `
//         <library-grid #grid></library-grid>
//     `
// })
// export class AppComponent implements OnInit {
//     selectedComponentType: any;
//
//     ngOnInit(): void {
//         this.selectedComponentType = BlueComponent;
//     }
//
// }

import {Component, OnInit} from '@angular/core';
import {BlueComponent} from "./blue/blue.component";

@Component({
    selector: 'app-root',
    template: `
        <div>
            <div><h2>Application Code</h2></div>
            <button type="button" class="btn btn-primary"
                    (click)="grid.addDynamicCellComponent(selectedComponentType)">Add Dynamic Grid component
            </button>
        </div>
        <hr>
        <div>
            <div><h2>Library Code</h2></div>
            <div>
                <library-grid #grid></library-grid>
            </div>
        </div>
    `
})
export class AppComponent implements OnInit {
    selectedComponentType: any;

    ngOnInit(): void {
        this.selectedComponentType = BlueComponent;
    }

}

