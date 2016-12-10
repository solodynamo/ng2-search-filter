## SystemJS

In your `system.config.js`

Append to `map`

```js
var map = {
    ...
    'ng2-filter-pipe': 'node_modules/ng2-search-pipe'
}
```

and then add to `packages`

```js
var packages = {
    ...
    'ng2-search-pipe': { main: 'dist/index.js' }
}
````
