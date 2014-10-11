# chudnovsky

[![Build Status][travis-svg]][travis]
[![Dependency Status][gemnasium-svg]][gemnasium]

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


   [travis]: https://travis-ci.org/KenanY/chudnovsky
   [travis-svg]: https://img.shields.io/travis/KenanY/chudnovsky.svg
   [gemnasium]: https://gemnasium.com/KenanY/chudnovsky
   [travis-svg]: https://img.shields.io/gemnasium/KenanY/chudnovsky.svg
   [chudnovsky]: https://en.wikipedia.org/wiki/Chudnovsky_algorithm