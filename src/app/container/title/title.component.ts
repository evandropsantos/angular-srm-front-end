import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-title-component',
    templateUrl: 'title.component.html',
    styleUrls: ['./title.component.scss']
})

export class TitleComponent {
    title = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        const route = this.route.snapshot.data['title'];

        this.title = route;
    }
}