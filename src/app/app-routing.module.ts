import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./layout/login/login.component";
import {DashboardComponent} from "./layout/home/dashboard/dashboard.component";
import {StatistiqueComponent} from "./layout/home/statistique/statistique.component";
import {ThemeComponent} from "./layout/home/stock/theme/theme.component";
import {BadRequestComponent} from "./layout/status/bad-request/bad-request.component";
import {PdfComponent} from "./layout/home/pdf/pdf.component";
import {HomeComponent} from "./layout/home/home.component";
import {ChatComponent} from "./layout/home/chat/chat.component";
import {FormComponent} from "./layout/home/form/form.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'pdf', component: PdfComponent },
      { path: 'form', component: FormComponent },
      { path: 'statistique', component: StatistiqueComponent },
      { path: 'chat', component: ChatComponent },
      {
        path: 'stock',
        children: [
          {
            path: 'create',
            children: [
              { path: 'theme', component: ThemeComponent}
            ]
          }
        ]
      }
    ]
  },
  { path: '**', component: BadRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
