import { useMinicartContext } from '../providers'
import { Product } from '.'

export const Minicart = () => {
  const { products, total } = useMinicartContext()
  return (
    <section className="p-8 rounded-md border-2 border-sky-500 grid grid-rows-[80px_1fr_60px]">
      <h1 className="font-semibold text-5xl">Copito's mall</h1>
      <div className="overflow-auto flex flex-col gap-2 p2">
        {products.map((products) => (
          <Product key={products.id} {...products} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button>Pagar</button>
        <div className="flex gap-5">
          <span>TOTAL</span>
          <span>{total}</span>
        </div>
      </div>
    </section>
  )
}
