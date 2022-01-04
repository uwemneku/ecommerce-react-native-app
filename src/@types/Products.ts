export type Products = {
    id: string,
    title: string,
    price: number,
    category: ProductCategories,
    description: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export type ProductCategories = 
    "electronics" |
    "jewelery" |
    "men's clothing" |
    "women's clothing"

export type AllProducts ={[key in ProductCategories]: Products[]}
// export type AllProducts ={[Property in keyof ProductCategories]: Products[]}