import { FC } from 'react'
import { formatCurrency } from '../shared/utils'

type PriceProps = {
  price: number
  textSize?: string
}

export const Price: FC<PriceProps> = ({ price, textSize = 'text-sm' }) => {
  if (price >= Number.MAX_SAFE_INTEGER) {
    return <span className="text-start">Infinitos copitos</span>
  }

  return (
    <span className={textSize + ' text-start'}>
      {formatCurrency(price)} Copitos
    </span>
  )
}
