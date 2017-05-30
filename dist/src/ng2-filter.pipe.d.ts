import { PipeTransform } from "@angular/core";
export declare class Ng2SearchPipe implements PipeTransform {
    /**
     * @items = object from array
     * @term = term's search
     */
    transform(items: any, term: any): any;
}
