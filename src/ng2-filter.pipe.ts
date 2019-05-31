import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: 'filter',
  pure: false
})
@Injectable()
export class Ng2SearchPipe implements PipeTransform {

  /**
     * @param items object from array
     * @param term term's search
     * @param excludes array of strings which will ignored during search
     */
  transform(items: any, term: string, excludes: any = []): any {
    if (!term || !items) return items;

    return Ng2SearchPipe.filter(items, term, excludes);
  }

  /**
   *
   * @param items List of items to filter
   * @param term  a string term to compare with every property of the list
   * @param excludes List of keys which will be ignored during search
   *
   */
  static filter(items: Array<{ [key: string]: any }>, term: string, excludes: any): Array<{ [key: string]: any }> {

    const toCompare = term.toLowerCase();

    function checkInside(item: any, term: string) {
      for (let property in item) {
        if (item[property] === null || item[property] == undefined || excludes.includes(property)) {
          continue;
        }
        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        }
        else if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }
}
