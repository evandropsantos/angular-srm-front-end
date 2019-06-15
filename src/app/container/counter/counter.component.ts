import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-counter-component',
    templateUrl: 'counter.component.html',
    styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
    quantity: number = 0;
    @Input() text: string = '';

    getItem(item) {
        const value = item.value;

        if(value === 'add' && this.quantity < 100)
            this.quantity = this.addItem(this.quantity);
        else if(value === 'remove' && this.quantity > 0)
            this.quantity = this.removeItem(this.quantity);
        
        item.value = 'action';
    }
    
    addItem(value) { return value + 1; }

    removeItem(value) { return value - 1; }
}