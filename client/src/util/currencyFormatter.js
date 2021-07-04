const currencyFormatter = (value, country) => {
    if (isNaN(value)) return value

    const code = country && country.code ? country.code : 'NG'
    const currency = country && country.currency ? country.currency : 'NGN'


    const formatter = new Intl.NumberFormat(`en-${code}`, { style: 'currency', currency, currencyDisplay: 'symbol', })
    return formatter.format(value)
}

export default currencyFormatter