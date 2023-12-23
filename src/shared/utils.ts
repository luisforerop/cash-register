export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(
    value
  )
