import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanAdminGuard } from './components/guard/can-admin.guard';

const routes: Routes = [ 
  {path:'', redirectTo: 'home', pathMatch:'full'},
{ path: 'not', loadChildren: () => import('./components/pages/notFound/not-found/not-found.module').then(m => m.NotFoundModule) }, 
{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./components/pages/admin/admin.module').then(m => m.AdminModule), },
  { path: 'roles', loadChildren: () => import('./components/pages/roles/roles.module').then(m => m.RolesModule) },
  { path: 'users', loadChildren: () => import('./components/pages/users/users.module').then(m => m.UsersModule) },
  { path: 'new', loadChildren: () => import('./components/pages/new/new.module').then(m => m.NewModule) },
  { path: 'edit', loadChildren: () => import('./components/pages/edit/edit.module').then(m => m.EditModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
