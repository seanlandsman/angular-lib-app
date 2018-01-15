// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
//
// import {AppComponent} from './app.component';
// import {GridModule} from 'library/dist/main';
// import {BlueComponent} from './blue/blue.component';
//
// @NgModule({
//     declarations: [
//         AppComponent,
//         BlueComponent
//     ],
//     imports: [
//         BrowserModule,
//         GridModule.withComponents([])
//     ],
//     providers: [],
//     bootstrap: [AppComponent]
// })
// export class AppModule {
// }
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GridModule} from 'library/dist/main';
import {BlueComponent} from './blue/blue.component';

@NgModule({
    declarations: [
        AppComponent,
        BlueComponent
    ],
    imports: [
        BrowserModule,
        GridModule.withComponents([
            BlueComponent
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
