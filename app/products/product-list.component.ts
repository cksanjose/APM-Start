import { Component, OnInit } from 'angular2/core';
import { IProduct } from "./products";
import {ProductFilterPipe} from "./product-filter.pipe";
import {StarComponent} from "../shared/star.component";
import {StarEvent} from "../shared/star-event.component";
import {ProductService} from "./product.service";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component ({
    templateUrl: `app/products/product-list.component.html`,
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {
    constructor(private _productService: ProductService) {

    }

    imageWidth: number = 50;
    imageMargin: number = 2;
    pageTitle: string = "Active Product List";
    showImage: boolean = false;
    listFilter: string = "";
    products: IProduct[];
    errorMessage: string;

    getTitle(): string {
        return this.pageTitle;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit():any {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message:StarEvent): void {
        this.pageTitle = "Product List " + message.message;
    }
}
