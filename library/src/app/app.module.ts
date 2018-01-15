import {ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {GridComponent} from './grid/grid.component';
import {CellComponent} from "./cell/cell.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        GridComponent,
        CellComponent
    ],
    exports: [
        GridComponent
    ]
})
export class GridModule {
    static withComponents(components: any[]): ModuleWithProviders {
        return {
            ngModule: GridModule,
            providers: [
                {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true}
            ]
        }
    }
}

