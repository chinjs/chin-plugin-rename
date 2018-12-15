# chin-plugin-rename

[![npm](https://img.shields.io/npm/v/chin-plugin-rename.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/chin-plugin-rename)
[![npm](https://img.shields.io/npm/dm/chin-plugin-rename.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/chin-plugin-rename)
[![Build Status](https://img.shields.io/travis/chinjs/chin-plugin-rename.svg?longCache=true&style=flat-square)](https://travis-ci.org/chinjs/chin-plugin-rename)
[![Coverage Status](https://img.shields.io/codecov/c/github/chinjs/chin-plugin-rename.svg?longCache=true&style=flat-square)](https://codecov.io/github/chinjs/chin-plugin-rename)

[chin](https://github.com/chinjs/chin) plugin for rename.

## Installation
```shell
yarn add -D chin chin-plugin-rename
```

## Usage

```js
import Rename from 'chin-plugin-rename'

const ext = Rename({ base: 'name.ext' })
```
#### [options](https://nodejs.org/api/path.html#path_path_parse_path)
- `root`
- `dir`
- `base`
- `name`
- `ext`
- `quiet`

## License
MIT (http://opensource.org/licenses/MIT)