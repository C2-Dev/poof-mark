import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FartComponent } from './fart/fart.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule} from "@agm/core";
import {MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatFormFieldModule,
        MatTabsModule,
        MatInputModule,
        MatDatepickerModule,
        MatSnackBarModule,
        } from '@angular/material';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AppComponent,
    FartComponent,
    LoginComponent,
    MapComponent,
    TabNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:8000'],
        blacklistedRoutes: []
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE API KEY HERE'
    }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
