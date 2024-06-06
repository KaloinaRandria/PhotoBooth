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
import { StatistiqueComponent } from './layout/home/statistique/statistique.component';
import { HomeComponent } from './layout/home/home.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SublevelMenuComponent } from './layout/content/sidenav/sublevel-menu.component';
import { ThemeComponent } from './layout/home/stock/theme/theme.component';
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
import { PdfComponent } from './layout/home/pdf/pdf.component';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardHeader, MatCardModule} from "@angular/material/card";
import { ChatComponent } from './layout/home/chat/chat.component';
import { FormComponent } from './layout/home/form/form.component';
import { EmployeComponent } from './layout/home/employe/employe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    StatistiqueComponent,
    HomeComponent,
    SublevelMenuComponent,
    ThemeComponent,
    BadRequestComponent,
    SendComponent,
    GitBtnComponent,
    ProBtnComponent,
    HvBtnComponent,
    ServerErrorComponent,
    BaseContentComponent,
    PdfComponent,
    ChatComponent,
    FormComponent,
    EmployeComponent
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
