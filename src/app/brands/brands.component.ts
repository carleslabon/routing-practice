import { Component } from '@angular/core';

@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html'
})
export class BrandsComponent {
    brands = [
        'Apple', 'Mac', 'Huawei', 'Asus', 'Vivo'
    ];
 } 