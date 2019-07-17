import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCheckboxModule,
    MatListModule, MatCardModule, MatToolbarModule,
    MatSidenavModule, MatIconModule, MatGridListModule, MatChipsModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListCardComponent } from './list-card/list-card.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ListCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatSidenavModule,
        MatIconModule,
        MatGridListModule,
        MatChipsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
