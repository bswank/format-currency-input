# format-currency-input

`format-currency-input` is a small utility that reformats currency in an input and also exposes some helper functions. Provided by [Brian Swank](https://swank.dev/).

## Notes

- This package makes use of `Intl.NumberFormat` so your environment must support it or have the appropriate polyfill.
- This package was created for a very specific use-case when I couldn't find anything slim enough that exactly matched what I needed. I'm happy to entertain further development.

## Installation

```
npm i format-currency-input
```

## Usage

CommonJS Require:

```
const formatCurrencyInput = require('format-currency-input')
```

ES6 Import:

```
import formatCurrencyInput from 'format-currency-input'
```

### Primary Usage:

The `watch` method accepts a selector and options.

```

```

### Helper Functions:

The `format` and `cents` methods expose a couple internal helper functions.

```

```

### `data-cents` Attribute

Reformatting text in an input is good practice to ensure your users are inputting their amount correctly, but we need to ensure the data we send to our servers is properly formatted – probably in cents.

Upon reformatting, this utility also sets the currency value in cents as the value of `data-cents` on the input element.

### Options

The second argument of any method is an optional `options` object.

| Option                     | Default | Use                       |
| -------------------------- | ------- | ------------------------- |
| `removeCents`              | `false` | Remove cents (\$2,500)    |
| `removeSymbol`             | `false` | Remove symbol (2,500.00)  |
| `removeCommas`             | `false` | Remove commas (\$2500.00) |
| `removeDataCentsAttribute` | `false` | Will not set `data-cents` |

## License

MIT
