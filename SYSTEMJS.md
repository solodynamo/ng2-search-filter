## SystemJS

In your `system.config.js`

Append to `map`

```js
var map = {
    ...
    'ng2-search-filter': 'node_modules/ng2-search-filter'
}
```

and then add to `packages`

```js
var packages = {
    ...
    'ng2-search-filter': { main: 'dist/index.js' }
}
````
