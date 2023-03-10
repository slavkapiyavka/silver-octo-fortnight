import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/shared/services/data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { PersonComponent } from './components/person/person.component';

@NgModule({
    declarations: [AppComponent, PersonsListComponent, PersonComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    providers: [DataService],
    bootstrap: [AppComponent],
})
export class AppModule {}
