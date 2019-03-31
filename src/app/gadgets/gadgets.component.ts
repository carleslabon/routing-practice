import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-gadgets',
    templateUrl: './gadgets.component.html'
})
export class GadgetsComponent { 
    gadgets = [
        {
            id: 1,
            name: 'iPhone'
        },
        {
            id: 2,
            name: 'iPad'
        },
        {
            id: 3,
            name: 'iWatch'
        },
        {
            id: 4,
            name: 'iPod'
        },
        {
            id: 5,
            name: 'Mac'
        },
    ];

    constructor(private router: Router, private route: ActivatedRoute) { }

    onReloadPage() {
        // this.router.navigate(['gadgets'], {relativeTo: this.route});
    }
}