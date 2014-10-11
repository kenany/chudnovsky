# chudnovsky

Estimate pi with the [Chudnovsky algorithm][chudnovsky].

## Example

``` javascript
var chudnovsky = require('chudnovsky');

chudnovsky(1);
// => 3.1415926535897936
```

## Installation

``` bash
$ npm install chudnovsky
```

## API

``` javascript
var chudnovsky = require('chudnovsky');
```

### `chudnovsky(n)`

Estimate pi using the Chudnovsky algorithm, evaluating the infinite sum up to
_Number_ `n`.


   [chudnovsky]: https://en.wikipedia.org/wiki/Chudnovsky_algorithm