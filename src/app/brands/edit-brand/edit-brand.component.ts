import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-brand',
    templateUrl: './edit-brand.component.html'
})
export class EditBrandComponent implements OnInit{ 
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        console.log(this.route.snapshot.queryParams);
        console.log(this.route.snapshot.fragment);
        this.route.queryParams.subscribe();
        this.route.fragment.subscribe();
    }
}