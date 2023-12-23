import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext, useMemo, useState } from 'react'
import { IProduct, ProductInfoType } from '../shared/models'

type PossibleUpdateQuantityAction = 'add' | 'remove'

export interface MinicartContextType {
  products: IProduct[]
  total: number
  updateProductQuantity: (
    productId: string,
    action: PossibleUpdateQuantityAction
  ) => void
  addProduct: (product: ProductInfoType) => void
}

const MinicartContext = createContext({} as MinicartContextType)

export const useMinicartContext = () => useContext(MinicartContext)

export const MinicartProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = MinicartContext
  const [products, setProducts] = useState<IProduct[]>([])
  const total = useMemo(
    () =>
      products.reduce(
        (accum, product) => accum + product.price * product.quantity,
        0
      ),
    [products]
  )

  const addProduct = (product: ProductInfoType) => {
    setProducts((curr) => curr.concat([{ ...product, quantity: 1 }]))
  }

  const updateProductQuantity = (
    productId: string,
    action: PossibleUpdateQuantityAction
  ) => {
    const operation: {
      [key in PossibleUpdateQuantityAction]: (quantity: number) => number
    } = {
      add: (quantity) => quantity + 1,
      remove: (quantity) => Math.max(quantity - 1, 0),
    }
    setProducts((curr) =>
      curr
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: operation[action](product.quantity) }
            : product
        )
        .filter((product) => product.quantity > 0)
    )
  }

  const context: MinicartContextType = {
    products,
    total,
    addProduct,
    updateProductQuantity,
  }

  return <Provider value={context}>{children}</Provider>
}
