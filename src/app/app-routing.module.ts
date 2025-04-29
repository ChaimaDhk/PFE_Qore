import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AdminAddCategoryComponent } from './Admin/admin-add-category/admin-add-category.component';
import { AdminAddEventComponent } from './Admin/admin-add-event/admin-add-event.component';
import { AdminChartsComponent } from './Admin/admin-charts/admin-charts.component';
import { AdminDisplayCategoryComponent } from './Admin/admin-display-category/admin-display-category.component';
import { AdminDisplayEventsComponent } from './Admin/admin-display-events/admin-display-events.component';
import { AdminDisplayMessagesComponent } from './Admin/admin-display-messages/admin-display-messages.component';
import { AdminDisplayUsersComponent } from './Admin/admin-display-users/admin-display-users.component';
import { AdminReplyComponent } from './Admin/admin-reply/admin-reply.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { DisplayEventComponent } from './components/display-event/display-event.component';
import { ClientAboutComponent } from './Client/client-about/client-about.component';
import { ClientContactComponent } from './Client/client-contact/client-contact.component';
import { ClientUpcomingComponent } from './Client/client-upcoming/client-upcoming.component';
import { ClientDisplayEventComponent } from './Client/client-display-event/client-display-event.component';
import { ClientWishListComponent } from './Client/client-wish-list/client-wish-list.component';
import { ClientCartComponent } from './Client/client-cart/client-cart.component';
import { ClientHomeComponent } from './Client/client-home/client-home.component';
import { ClientInvoiceComponent } from './Client/client-invoice/client-invoice.component';
import { LoginComponent } from './components/login/login.component';
import { ClientHeaderComponent } from './Client/client-header/client-header.component';
import { ClientSearchComponent } from './Client/client-search/client-search.component';
import { ClientUpdateInfoComponent } from './Client/client-update-info/client-update-info.component';
import { VisiteurHeaderComponent } from './Visiteur/visiteur-header/visiteur-header.component';
import { VisiteurDisplayEventComponent } from './Visiteur/visiteur-display-event/visiteur-display-event.component';
import { VisiteurSearchComponent } from './Visiteur/visiteur-search/visiteur-search.component';
import { VisiteurContactComponent } from './Visiteur/visiteur-contact/visiteur-contact.component';
import { VisiteurUpcomingComponent } from './Visiteur/visiteur-upcoming/visiteur-upcoming.component';
import { VisiteurAboutComponent } from './Visiteur/visiteur-about/visiteur-about.component';
import { VisiteurHomeComponent } from './Visiteur/visiteur-home/visiteur-home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ClientEventComponent } from './Client/client-event/client-event.component';
import { ClientUpdatePwdComponent } from './Client/client-update-pwd/client-update-pwd.component';
import { AdminDisplayEventComponent } from './Admin/admin-display-event/admin-display-event.component';


const routes: Routes = [

 //////////////////new///////////////////
 { path: 'dashbord', component:AdminComponent ,children :[
 { path: 'addEvent', component:AdminAddEventComponent },
 { path: 'addAdmin', component:AddAdminComponent },
 { path: 'displayEvents', component:AdminDisplayEventsComponent },
 { path: 'displayEvent/:id', component:AdminDisplayEventComponent },
 { path: 'editEvent/:id', component:AdminAddEventComponent },
 { path: 'addCategory', component:AdminAddCategoryComponent },
 { path: 'displayCategory', component:AdminDisplayCategoryComponent },
 { path: 'displayMessages', component:AdminDisplayMessagesComponent },
 { path: 'displayUsers', component:AdminDisplayUsersComponent },
 { path: 'reply/:id', component:AdminReplyComponent },
 { path: 'chart', component:AdminChartsComponent }]
},
{ path: 'client', component:ClientHeaderComponent,children:[
 { path: 'about', component:ClientAboutComponent },
 { path: 'home', component:ClientHomeComponent },
 { path: 'messages', component:ClientContactComponent },
 { path: 'upcoming', component:ClientUpcomingComponent },
 { path: 'updateInfo/:id', component:ClientUpdateInfoComponent },
 { path: 'updatePwd', component:ClientUpdatePwdComponent },
 { path: 'wishList', component:ClientWishListComponent },
 { path: 'cart', component:ClientCartComponent },
 { path: 'search', component:ClientSearchComponent },
 
 { path: 'invoice', component:ClientInvoiceComponent },
 
 { path: 'displayEvents/:id', component:ClientEventComponent }
] },

{ path: '', component:VisiteurHeaderComponent,children:[
  { path: 'event/:id', component:VisiteurDisplayEventComponent },
  { path: 'search', component:VisiteurSearchComponent },
  { path: '', component:VisiteurHomeComponent },
  { path: 'contacts', component:VisiteurContactComponent },
  
  
  { path: 'upcoming', component:VisiteurUpcomingComponent },
  { path: 'about', component:VisiteurAboutComponent },
  { path: 'login', component:LoginComponent },
{ path: 'signUp', component:SignUpComponent },
] },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
