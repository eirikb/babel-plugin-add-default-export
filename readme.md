POC babel plugin to expose `var` (global) variables from modules when bundling (e.g., in parcel).

Converts this:
```JavaScript
var x = 1
```

becomes:
```JavaScript
var x = 1
export default x
```

used like this:
```JavaScript
import x from 'some-module-without-exports'
```


It also supports multiple `var`s, but because I don't know much about babel plugin
development, these are exposed as array, but can be destructured as such:

```JavaScript
import [x, y, z] from 'some-moulde-without-exports'
```

With a lot of help from [Nicolò Ribaudo](https://github.com/nicolo-ribaudo).
