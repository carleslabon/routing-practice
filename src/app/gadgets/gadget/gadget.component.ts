import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-gadget',
    templateUrl: './gadget.component.html'
})
export class GadgetComponent implements OnInit, OnDestroy{ 
    gadget: {id: number, name: string}
    paramsSubscription: Subscription;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.gadget = {
            id: this.route.snapshot.params['id'],
            name: this.route.snapshot.params['name']
        };
        this.paramsSubscription = this.route.params.subscribe(
            (params: Params) => {
                this.gadget.id = params['id'];
                this.gadget.name = params['name'];
            }
        );
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }
}