# Angular2 Search Filter Pipe

[![npm version](https://badge.fury.io/js/ng2-search-filter.svg)](https://www.npmjs.com/package/ng2-search-filter) [![](https://david-dm.org/solodynamo/ng2-search-filter.svg)](https://www.npmjs.com/package/ng2-search-filter)

> Filter search items

Angular 2 filter to make custom search.

## Install

```
npm i ng2-search-filter --save
```

## Usage

In case you're using `systemjs` - see configuration [here](https://github.com/solodynamo/ng2-search-filter/blob/master/SYSTEMJS.md).

Import `Ng2SearchPipeModule` to your module

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [BrowserModule, Ng2SearchPipeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

And use pipe in your component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
    <div>
        <input type="text" [(ngModel)]="term">
        <div *ngFor = "let item of items |filter:term" >
          <p>
            {{item.name}}
          </p>
        </div>

    </div>  
  `
})

export class AppComponent {
  items: string[] = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];
}
```

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Solodynamo](https://github.com/solodynamo/ng2-search-filter)
