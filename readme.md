# format-currency-input

`format-currency-input` is a small utility that reformats currency in an input and also exposes some helper functions.

## Notes

- This package makes use of `Intl.NumberFormat`; your environment must support it or have the appropriate polyfill.
- This package was created for a very specific use-case when I couldn't find anything slim enough that exactly matched what I needed. I'm happy to entertain further development.

## Installation

```
npm i format-currency-input
```

## Usage

CommonJS Require:

```js
const formatCurrencyInput = require('format-currency-input')
```

ES6 Import:

```js
import formatCurrencyInput from 'format-currency-input'
```

### Primary Usage:

The `watch` method accepts an input selector and options. It will find all inputs with a given selector via `querySelectorAll` and then reformat the input on `blur`.

```js
formatCurrencyInput.watch('.currency-input')
```

**With options:**

```js
formatCurrencyInput.watch('.currency-input', {
  removeCents: true,
  removeSymbol: true,
})
```

### Helper Functions:

The `format` and `cents` methods expose a couple internal helper functions.

```js
formatCurrencyInput.format('2500') // $2,500.00
formatCurrencyInput.format('2500.235') // $2,500.24
formatCurrencyInput.format(200) // $200.00
formatCurrencyInput.format(200, { removeSymbol: true, removeCents: true }) // 200
```

```js
formatCurrencyInput.cents('$2,500') // 250000
formatCurrencyInput.cents('$2,500.55') // 250055
formatCurrencyInput.cents(2) // 200
formatCurrencyInput.cents(300) // 30000
```

### `data-cents` Attribute

Reformatting text in an input is good practice to ensure your users are inputting their amount correctly, but we need to ensure the data we send to our servers is properly formatted – probably in cents.

Upon reformatting, this utility also sets the currency value in cents as the value of `data-cents` on the input element.

### Options

The second argument of any method is an optional `options` object.

| Option                     | Default | Use                                 |
| -------------------------- | ------- | ----------------------------------- |
| `removeCents`              | `false` | Remove cents (\$2,500)              |
| `removeSymbol`             | `false` | Remove symbol (2,500.00)            |
| `removeCommas`             | `false` | Remove commas (\$2500.00)           |
| `removeDataCentsAttribute` | `false` | Don't set `data-cents` after format |

## License

MIT
