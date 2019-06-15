import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { TitleComponent } from './title/title.component';

import { ButtonComponent } from './button/button.component';
import { CounterComponent } from './counter/counter.component';
import { ManagementComponent } from './management/management.component';
import { AccountComponent } from './account/account.component';
import { ReceivableComponent } from './receivable/receivable.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BreadCrumbComponent, 
        TitleComponent, 
        ManagementComponent,
        ButtonComponent,
        CounterComponent,
        AccountComponent,
        ReceivableComponent
    ],
    exports: [
        BreadCrumbComponent, 
        TitleComponent, 
        ManagementComponent,
        ButtonComponent,
        CounterComponent,
        ReceivableComponent
    ]
})
export class ContainerModule {}