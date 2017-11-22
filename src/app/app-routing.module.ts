import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './component/heroes/heroes.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';

const routes: Routes = [
  //默认路由
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  //详情
  {path: 'detail/:id', component: HeroDetailComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule {

}
