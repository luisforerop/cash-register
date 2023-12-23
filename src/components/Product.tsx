import { FC } from 'react'
import { useMinicartContext } from '../providers'
import { IProduct } from '../shared/models'

export const Product: FC<IProduct> = ({ id, image, name, quantity }) => {
  const { updateProductQuantity } = useMinicartContext()
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <img src={image} alt="product" className="w-12 h-12" />
        <span>{name}</span>
      </div>
      <div className="flex gap-3 items-center">
        <button onClick={() => updateProductQuantity(id, 'remove')}>-</button>
        <span>{quantity}</span>
        <button onClick={() => updateProductQuantity(id, 'add')}>+</button>
      </div>
    </div>
  )
}
