import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AdminManagerComponent } from './admin/admin-manager/admin-manager.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'game', component: GameComponent},
  { path: 'about', component: AboutComponent},
  { path: 'requirement', component: RequirementsComponent},
  { path: 'team', component: TeamComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'list', component: ProductListComponent},
  { path: 'deatils/:productID', component: ProductDetailComponent},
  { path: 'admin', component: AdminComponent,
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: AdminDashboardComponent},
        // { path: 'list', component: AdminListComponent},
        { path: 'manager', component: AdminManagerComponent},
        { path: 'detail/:productID', component: AdminDetailComponent},
        { path: 'add', component: AdminAddComponent},
        { path: 'edit/:id', component: AdminEditComponent}
  // { path: 'manager/edit/:id', component: AdminManagerComponent},
    ]
    }
  // { path: 'manager/:id', component: ProductDetailComponent}
  // { path: '**', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
