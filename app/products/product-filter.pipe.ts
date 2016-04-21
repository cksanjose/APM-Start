import {PipeTransform, Pipe} from "angular2/core";
import { IProduct } from "./products";
/**
 * Created by SANJOCE on 4/13/2016.
 */

@Pipe({
    name: "productFilter"
})

export class ProductFilterPipe implements PipeTransform {
    transform(value:IProduct[], args:string[]):IProduct[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}
