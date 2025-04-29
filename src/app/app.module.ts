import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EventsComponent } from './components/events/events.component';
import { ContactVisiteurComponent } from './components/contact-visiteur/contact-visiteur.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { SliderComponent } from './components/slider/slider.component';
import { EventComponent } from './components/event/event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { DisplayEventComponent } from './components/display-event/display-event.component';
import { DisplayEventsComponent } from './components/display-events/display-events.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisplayCategoryComponent } from './components/display-category/display-category.component';
import { DisplayClientsComponent } from './components/display-clients/display-clients.component';
import { DisplayMessagesComponent } from './components/display-messages/display-messages.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { ReplyComponent } from './components/reply/reply.component';
import { WishListComponent } from './components/wish-liste/wish-liste.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { SearchComponent } from './components/search/search.component';
import { ChartComponent } from './components/chart/chart.component';
import { EditInfoComponent } from './components/edit-info/edit-info.component';
import { PwdChangeComponent } from './components/pwd-change/pwd-change.component';
import { NgxChartsModule, TooltipModule } from '@swimlane/ngx-charts';
import { HeaderVisiteurComponent } from './components/header-visiteur/header-visiteur.component';
import { AdminDisplayEventsComponent } from './Admin/admin-display-events/admin-display-events.component';
import { AdminDisplayUsersComponent } from './Admin/admin-display-users/admin-display-users.component';
import { AdminDisplayMessagesComponent } from './Admin/admin-display-messages/admin-display-messages.component';
import { AdminDisplayCategoryComponent } from './Admin/admin-display-category/admin-display-category.component';
import { AdminAddCategoryComponent } from './Admin/admin-add-category/admin-add-category.component';
import { AdminAddEventComponent } from './Admin/admin-add-event/admin-add-event.component';
import { AdminReplyComponent } from './Admin/admin-reply/admin-reply.component';
import { AdminChartsComponent } from './Admin/admin-charts/admin-charts.component';
import { ClientHeaderComponent } from './Client/client-header/client-header.component';
import { ClientHomeComponent } from './Client/client-home/client-home.component';
import { ClientContactComponent } from './Client/client-contact/client-contact.component';
import { ClientAboutComponent } from './Client/client-about/client-about.component';
import { ClientUpcomingComponent } from './Client/client-upcoming/client-upcoming.component';
import { ClientUpdateInfoComponent } from './Client/client-update-info/client-update-info.component';
import { ClientUpdatePwdComponent } from './Client/client-update-pwd/client-update-pwd.component';
import { ClientWishListComponent } from './Client/client-wish-list/client-wish-list.component';
import { ClientCartComponent } from './Client/client-cart/client-cart.component';
import { ClientInvoiceComponent } from './Client/client-invoice/client-invoice.component';
import { ClientEventComponent } from './Client/client-event/client-event.component';
import { ClientSearchComponent } from './Client/client-search/client-search.component';
import { ClientDisplayEventComponent } from './Client/client-display-event/client-display-event.component';
import { VisiteurHomeComponent } from './Visiteur/visiteur-home/visiteur-home.component';
import { VisiteurHeaderComponent } from './Visiteur/visiteur-header/visiteur-header.component';
import { VisiteurDisplayEventComponent } from './Visiteur/visiteur-display-event/visiteur-display-event.component';
import { VisiteurUpcomingComponent } from './Visiteur/visiteur-upcoming/visiteur-upcoming.component';
import { VisiteurContactComponent } from './Visiteur/visiteur-contact/visiteur-contact.component';
import { VisiteurSearchComponent } from './Visiteur/visiteur-search/visiteur-search.component';
import { VisiteurEventComponent } from './Visiteur/visiteur-event/visiteur-event.component';
import { VisiteurEventsComponent } from './Visiteur/visiteur-events/visiteur-events.component';
import { VisiteurAboutComponent } from './Visiteur/visiteur-about/visiteur-about.component';
import { ChartsModule } from 'ng2-charts';
import { ClientHomeUpcomingComponent } from './Client/client-home-upcoming/client-home-upcoming.component';
import { AdminDisplayEventComponent } from './Admin/admin-display-event/admin-display-event.component';
import { VisiteurHomeUpcomingComponent } from './Visiteur/visiteur-home-upcoming/visiteur-home-upcoming.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    EventsComponent,
    ContactVisiteurComponent,
    BlogComponent,
    HomeComponent,
    AboutComponent,
    UpcomingComponent,
    SliderComponent,
    EventComponent,
    AddEventComponent,
    AddCategoryComponent,
    AddAdminComponent,
    DisplayEventComponent,
    DisplayEventsComponent,
    ContactComponent,
    DisplayCategoryComponent,
    DisplayClientsComponent,
    DisplayMessagesComponent,
    LoginComponent,
    SignUpComponent,
    AdminComponent,
    ClientComponent,
    ReplyComponent,
   WishListComponent,
   ReservationsComponent,
   InvoiceComponent,
   SearchComponent,
   ChartComponent,
   EditInfoComponent,
   PwdChangeComponent,
   HeaderVisiteurComponent,
   AdminDisplayEventsComponent,
   AdminDisplayUsersComponent,
   AdminDisplayMessagesComponent,
   AdminDisplayCategoryComponent,
   AdminAddCategoryComponent,
   AdminAddEventComponent,
   AdminReplyComponent,
   AdminChartsComponent,
   ClientHeaderComponent,
   ClientHomeComponent,
   ClientContactComponent,
   ClientAboutComponent,
   ClientUpcomingComponent,
   ClientUpdateInfoComponent,
   ClientUpdatePwdComponent,
   ClientWishListComponent,
   ClientCartComponent,
   ClientInvoiceComponent,
   ClientEventComponent,
   ClientSearchComponent,
   ClientDisplayEventComponent,
   VisiteurHomeComponent,
   VisiteurHeaderComponent,
   VisiteurDisplayEventComponent,
   VisiteurUpcomingComponent,
   VisiteurContactComponent,
   VisiteurSearchComponent,
   VisiteurEventComponent,
   VisiteurEventsComponent,
   VisiteurAboutComponent,
   VisiteurHomeUpcomingComponent,
   ClientHomeUpcomingComponent,
   AdminDisplayEventComponent,
  //new
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    ChartsModule,
    TooltipModule

  
    // InMemoryWebApiModule.forRoot(DataService),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
