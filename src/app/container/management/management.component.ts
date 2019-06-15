import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-management-component',
    templateUrl: 'management.component.html',
    styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
    buttons: Object[] = [];

	constructor(http: HttpClient) {
		http
			.get<Object[]>('http://localhost:3000/buttons')
			.subscribe(data => {
				this.buttons = data;
				console.log(data);
			});

	}
}