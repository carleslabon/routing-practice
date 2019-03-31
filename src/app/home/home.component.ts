import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private router: Router) { }

    onLoadGadget(id: number) {
        this.router.navigate(['/brands', id, 'edit'], {queryParams: 
            {
                allowEdit: '1'
            }, 
            fragment: 'loading'
        });
    }
 }