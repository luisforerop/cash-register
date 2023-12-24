import { FC } from 'react'
import { useMinicartContext } from '../providers'
import { ProductInfoType } from '../shared/models'
import { Price } from '.'

export const ProductCard: FC<ProductInfoType> = (product) => {
  const { image, name, price } = product
  const { addProduct } = useMinicartContext()
  return (
    <button
      className="flex flex-col gap-2 w-full p-0 overflow-hidden h-max"
      onClick={() => addProduct(product)}
    >
      <img className="min-h-[133px]" src={image} alt={name} />
      <div className="p-2 flex flex-col gap-2 items-start">
        <span className="text-start">{name}</span>
        <Price price={price} />
      </div>
    </button>
  )
}
