import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { HeaderComponent } from './layout/content/header/header.component';
import { SidenavComponent } from './layout/content/sidenav/sidenav.component';
import { BodyComponent } from './layout/content/body/body.component';
import { DashboardComponent } from './layout/home/dashboard/dashboard.component';
import { HomeComponent } from './layout/home/home.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SublevelMenuComponent } from './layout/content/sidenav/sublevel-menu.component';
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import {CdkMenu, CdkMenuModule, CdkMenuTrigger} from "@angular/cdk/menu";
import {OverlayModule} from "@angular/cdk/overlay";
import { BadRequestComponent } from './layout/status/bad-request/bad-request.component';
import { SendComponent } from './layout/element/button/send-btn/send.component';
import { GitBtnComponent } from './layout/element/button/git-btn/git-btn.component';
import { ProBtnComponent } from './layout/element/button/pro-btn/pro-btn.component';
import { HvBtnComponent } from './layout/element/button/hv-btn/hv-btn.component';
import { ServerErrorComponent } from './layout/status/server-error/server-error.component';
import {BaseChartDirective} from "ng2-charts";
import { BaseContentComponent } from './layout/home/base-content/base-content.component';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardModule} from "@angular/material/card";
import { InputStyleComponent } from './layout/element/input/input-style/input-style.component';
import { InsertStaffComponent } from './layout/home/staff/insert-staff/insert-staff.component';
import { ListStaffComponent } from './layout/home/staff/list-staff/list-staff.component';
import { InsertClientComponent } from './layout/home/client/insert-client/insert-client.component';
import { ListClientComponent } from './layout/home/client/list-client/list-client.component';
import { InsertMaterialComponent } from './layout/home/material/insert-material/insert-material.component';
import { ListMaterialComponent } from './layout/home/material/list-material/list-material.component';
import { InsertThemeComponent } from './layout/home/theme/insert-theme/insert-theme.component';
import { ListThemeComponent } from './layout/home/theme/list-theme/list-theme.component';
import { InsertReservationComponent } from './layout/home/reservation/insert-reservation/insert-reservation.component';
import { ListReservationComponent } from './layout/home/reservation/list-reservation/list-reservation.component';
import { InsertRoomComponent } from './layout/home/room/insert-room/insert-room.component';
import { ListRoomComponent } from './layout/home/room/list-room/list-room.component';
import { InsertCategoryComponent } from './layout/home/category/insert-category/insert-category.component';
import { ListCategoryComponent } from './layout/home/category/list-category/list-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    HomeComponent,
    SublevelMenuComponent,
    BadRequestComponent,
    SendComponent,
    GitBtnComponent,
    ProBtnComponent,
    HvBtnComponent,
    ServerErrorComponent,
    BaseContentComponent,
    InputStyleComponent,
    InsertStaffComponent,
    ListStaffComponent,
    InsertClientComponent,
    ListClientComponent,
    InsertMaterialComponent,
    ListMaterialComponent,
    InsertThemeComponent,
    ListThemeComponent,
    InsertReservationComponent,
    ListReservationComponent,
    InsertRoomComponent,
    ListRoomComponent,
    InsertCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    FontAwesomeModule,
    NgOptimizedImage,
    CdkMenu,
    CdkMenuTrigger,
    OverlayModule,
    CdkMenuModule,
    BaseChartDirective,
    MatIcon,
    MatFabButton,
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
