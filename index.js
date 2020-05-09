function cents(value) {
  let cents = value.replace(/[$,]/g, '')
  return cents * 100
}

function format(value, options = {}) {
  if (typeof options !== 'object') {
    throw new Error(
      `[format-dollars] Options must be an object but a ${typeof options} was passed as the second argument instead.`
    )
  }

  let formattedValue = value.toString()

  formattedValue = formattedValue.replace(/[^\d.-]/g, '')

  formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(formattedValue.replace(/[^0-9.]/g, ''))

  if (formattedValue === '$NaN') {
    formattedValue = '$0.00'
  }

  if (options.removeCents) {
    formattedValue = formattedValue.replace(/[^.]+$/, '')
    formattedValue = formattedValue.substr(0, formattedValue.length - 1)
  }

  if (options.removeSymbol) {
    formattedValue = formattedValue.replace(/[$,]/g, '')
  }

  if (options.removeCommas) {
    formattedValue = formattedValue.replace(/[,]/g, '')
  }

  return formattedValue
}

function watch(elementSelector, options = {}) {
  if (typeof options !== 'object') {
    throw new Error(
      `[format-dollars] Options must be an object but a ${typeof options} was passed as the second argument instead.`
    )
  }

  const elements = document.querySelectorAll(elementSelector)

  for (let el of elements) {
    if (el.type !== 'text' && el.type !== 'number') {
      throw new Error(
        `[format-dollars] Your input type must be "text" or "number" but is currently "${el.type}".`
      )
    }

    if (el.type === 'number') {
      options.removeSymbol = true
    }

    el.addEventListener('blur', (event) => {
      const formattedValue = format(event.target.value, options)
      event.target.value = formattedValue

      if (!options.removeDataCentsAttribute) {
        el.dataset.cents = cents(formattedValue)
      }
    })
  }
}

const formatCurrencyInput = {
  watch,
  format,
  cents,
}

export default formatCurrencyInput
