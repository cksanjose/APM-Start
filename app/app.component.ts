import { Component } from 'angular2/core';
import { ProductListComponent } from "./products/product-list.component";
import { ProductService } from "./products/product.service";
import { HTTP_PROVIDERS } from "angular2/http";
import 'rxjs/Rx';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductDetailComponent} from "./products/product-detail.component";
import {LocationListComponent} from "./locations/location-list.component";
import {LocationService} from "./locations/location.service";   // Load all features

@Component ({
    selector: "pm-app",
    templateUrl: "app/shared/navigation.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS,
                LocationService]
})

@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    { path: '/products', name: 'Products', component: ProductListComponent },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent },
    { path: '/locations', name: 'Locations', component: LocationListComponent },
])

export class AppComponent {
    pageTitle: string = "Acme Product Management";

    getTitle(): string {
        return this.pageTitle + " System";
    }
}
