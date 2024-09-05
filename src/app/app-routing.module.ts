import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'question1', loadChildren: () => import('./question1/question1.module').then(m => m.Question1PageModule) },
  { path: 'question2', loadChildren: () => import('./question2/question2.module').then(m => m.Question2PageModule) },
  { path: 'question3', loadChildren: () => import('./question3/question3.module').then(m => m.Question3PageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }