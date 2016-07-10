# nodenotes [![Build Status](https://travis-ci.org/willyb321/nodenotes.svg?branch=master)](https://travis-ci.org/willyb321/nodenotes)

> My impressive module


## Install

```
$ npm install --save nodenotes
```


## Usage

```js
const nodenotes = require('nodenotes');

nodenotes('unicorns');
//=> 'unicorns & rainbows'
```


## API

### nodenotes(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global nodenotes
```

```
$ nodenotes --help

  Usage
    nodenotes [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ nodenotes
    unicorns & rainbows
    $ nodenotes ponies
    ponies & rainbows
```


## License

MIT © [William Blythe](https://tehsuperwilly.tech)
