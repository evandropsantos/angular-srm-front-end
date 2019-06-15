import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './container/management/management.component';
import { AccountComponent } from './container/account/account.component';
import { ReceivableComponent } from './container/receivable/receivable.component';

const routes: Routes = [
    { path: 'painel-gestao', component: ManagementComponent, data: { title: 'Painel de Gestão'} },
    { path: 'conta-digital', component: AccountComponent, data: { title: 'Conta Digital'} },
    { path: 'ant-recebiveis', component: ReceivableComponent, data: { title: 'Ant. de Recebíveis'} },
    { path: '**', component: ManagementComponent, data: { title: 'Painel de Gestão'} }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}