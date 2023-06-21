export interface ProductItem {
    limit: number
    products: ProductArray[]
    skip: number
    total: number
}

export interface ProductArray {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

