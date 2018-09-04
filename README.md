<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">@messageflow/tslint-config</h1>

  <p>Yet another opinionated TSLint config</p>
</div>

<hr />

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![Dependency Status][daviddm-badge]][daviddm-url]

[![Code of Conduct][coc-badge]][coc-url]

> A [TSLint config][tslint-config-url] based on [Airbnb JavaScript Style Guide][airbnb-javascript-style-guide-url] for [Messageflow][messageflow-url]

## Table of contents

- [Table of contents](#table-of-contents)
- [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
    - [tslint.json](#tslintjson)
    - [[Optional] tslint.prod.json](#optional-tslintprodjson)
  - [Rules](#rules)
- [License](#license)

## Setup

### Install

```sh
# Install via NPM as one of the `devDependencies`
$ npm install --save-dev @messageflow/tslint-config
```

### Usage

#### tslint.json

```json
{
  "extends": [
    "@messageflow/tslint-config"
  ],
}
```

#### [Optional] tslint.prod.json

```js
{
  "extends": [
    "@messageflow/tslint-config"
  ],
  "rules": {
    // No `debugger` in production mode
    "no-debugger": true
  }
}
```

### Rules

- [tslint][tslint-url]
- [tslint-config-airbnb][tslint-config-airbnb-url]
- [tslint-immutable][tslint-immutable-url]

## License

[MIT License](https://motss.mit-license.org) © Rong Sen Ng

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[tslint-config-url]: https://palantir.github.io/tslint/usage/tslint-json
[airbnb-javascript-style-guide-url]: https://github.com/airbnb/javascript
[messageflow-url]: https://github.com/Messageflow
[tslint-url]: https://github.com/palantir/tslint
[tslint-config-airbnb-url]: https://github.com/progre/tslint-config-airbnb
[tslint-immutable-url]: https://github.com/jonaskello/tslint-immutable

<!-- Badges -->
[version-badge]: https://flat.badgen.net/npm/v/@messageflow/tslint-config
[node-version-badge]: https://flat.badgen.net/npm/node/@messageflow/tslint-config
[mit-license-badge]: https://flat.badgen.net/npm/license/@messageflow/tslint-config

[downloads-badge]: https://flat.badgen.net/npm/dm/@messageflow/tslint-config
[total-downloads-badge]: https://flat.badgen.net/npm/dt/@messageflow/tslint-config?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/@messageflow/tslint-config
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/@messageflow/tslint-config

[daviddm-badge]: https://flat.badgen.net/david/dep/messageflow/tslint-config

[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[version-url]: https://www.npmjs.com/package/@messageflow/tslint-config
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: https://github.com/Messageflow/tslint-config/blob/master/LICENSE

[downloads-url]: https://www.npmtrends.com/@messageflow/tslint-config
[packagephobia-url]: https://packagephobia.now.sh/result?p=%40messageflow%2Ftslint-config
[bundlephobia-url]: https://bundlephobia.com/result?p=@messageflow/tslint-config

[daviddm-url]: https://david-dm.org/messageflow/tslint-config

[coc-url]: https://github.com/messageflow/tslint-config/blob/master/CODE_OF_CONDUCT.md
