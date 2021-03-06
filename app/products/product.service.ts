import {IProduct} from "./products";
import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
/**
 * Created by sanjoce on 4/15/2016.
 */

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';
    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log("All: " +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }
}
