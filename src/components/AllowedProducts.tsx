import { useMemo } from 'react'
import { ProductCard } from '.'
import { products } from '../shared/constants'
import { useMinicartContext } from '../providers'

export const AllowedProducts = () => {
  const { products: productsAdded } = useMinicartContext()
  const allowedProductIds = useMemo(
    () => productsAdded.map(({ id }) => id),
    [productsAdded]
  )
  const productsAllowed = useMemo(
    () => products.filter(({ id }) => !allowedProductIds.includes(id)),
    [allowedProductIds]
  )

  return (
    <section className="p-8 rounded-md border-2 border-sky-500">
      <div className="flex justify-between">
        <h2 className="font-semibold text-5xl">Productos</h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(130px,_1fr))] gap-4 my-4 overflow-auto h-[calc(100%_-_32px)]">
        {productsAllowed.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </section>
  )
}
