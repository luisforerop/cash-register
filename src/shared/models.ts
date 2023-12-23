export type ProductInfoType = {
  image: string
  price: number
  name: string
  id: string
}

export interface IProduct extends ProductInfoType {
  quantity: number
}
