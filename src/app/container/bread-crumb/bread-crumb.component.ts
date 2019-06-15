import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';

@Component({
    selector: 'app-bread-crumb',
    templateUrl: 'bread-crumb.component.html',
    styleUrls: ['./bread-crumb.component.scss']
})

export class BreadCrumbComponent implements OnInit {
    locale = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        const route = this.route.snapshot.data['title'];

        this.locale = route;
    }
}