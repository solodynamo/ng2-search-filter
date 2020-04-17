import { Pipe, PipeTransform, Injectable } from "@angular/core";
import deburr from 'lodash.deburr';

@Pipe({
  name: 'filter',
  pure: false
})
@Injectable()
export class Ng2SearchPipe implements PipeTransform {

  /**
   * @param items List of items to filter
   * @param term  a string term to compare with every property of the list
   * @param excludes List of keys which will be ignored during search
   */
  static filter(items: Array<{ [key: string]: any }>, term: string, excludes: any): Array<{ [key: string]: any }> {

    const toCompare = deburr(term.toLowerCase());

    // tslint:disable-next-line:no-shadowed-variable
    function checkInside(item: any, term: string) {

      if (typeof item === 'string' && deburr(item.toString().toLowerCase()).includes(toCompare)) {
        return true;
      }

      for (const property in item) {
        if (item[property] === null || item[property] === undefined || excludes.includes(property)) {
          continue;
        }
        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        } else if (deburr(item[property].toString().toLowerCase()).includes(toCompare)) {
          return true;
        }
      }
      return false;
    }

    return items.filter(item => checkInside(item, term));
  }
  /**
   * @param items object from array
   * @param term term's search
   * @param excludes array of strings which will ignored during search
   */
  transform(items: any, term: string, excludes: any = []): any {
    if (!term || !items) {
      return items;
    }

    return Ng2SearchPipe.filter(items, term, excludes);
  }
}
