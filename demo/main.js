import formatCurrencyInput from '../index'

formatCurrencyInput.watch('#currency-test-1')

document.querySelector('#currency-test-1').addEventListener('blur', (e) => {
  const cents = e.target.dataset.cents
  document.querySelector('#cents').innerHTML = cents
})
